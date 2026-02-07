import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
from pinecone import Pinecone

load_dotenv()
app = Flask(__name__)
# Keep your CORS settings
CORS(app, resources={r"/api/*": {"origins": "*"}})

# 1. Setup Direct Clients (No LangChain = Small Bundle Size)
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
pc = Pinecone(api_key=os.environ["PINECONE_API_KEY"])
index = pc.Index("swagatrag2")
llm = genai.GenerativeModel('gemini-1.5-flash')

def rag_query(user_question):
    # 1. Generate Embedding using the SDK
    res = genai.embed_content(
        model="models/embedding-001", 
        content=user_question, 
        task_type="retrieval_query"
    )
    query_embedding = res['embedding']

    # 2. Query Pinecone Direct
    results = index.query(vector=query_embedding, top_k=5, include_metadata=True)
    # Extract text from your metadata (make sure your metadata key is 'text')
    context = "\n".join([match['metadata'].get('text', '') for match in results['matches']])

    # 3. Create the prompt with your refined instructions
    prompt = f"""
    You are Swagat's Professional Portfolio Assistant. 
    Goal: Introduce Swagat to recruiters in a friendly, articulate, and helpful tone.

    Context:
    {context}

    INSTRUCTIONS:
    - Use the context to answer naturally.
    - If asked "Who are you?", say you are an AI assistant built by Swagat.
    - Keep answers concise (max 2-3 paragraphs).
    - If info is missing, say: "I'm not sure about that specific detail, but you can ask Swagat directly at swagat.pati@rutgers.edu!"
    
    User Question: {user_question}
    """

    # 4. Generate Response
    response = llm.generate_content(prompt)
    return response.text

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_msg = data.get('message')
    try:
        answer = rag_query(user_msg)
        return jsonify({"answer": answer})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

# Vercel needs this exported
app = app