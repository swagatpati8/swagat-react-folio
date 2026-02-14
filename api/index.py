from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# New 2026-compliant Imports
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain_pinecone import PineconeVectorStore

# The "Classic" package holds the chains you're looking for
from langchain_classic.chains import create_retrieval_chain
from langchain_classic.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv

load_dotenv() 
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# 1. Setup the LLM and Embeddings
llm = ChatGoogleGenerativeAI(model="gemini-flash-latest", temperature=0.3)
embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")
vectorstore = PineconeVectorStore(index_name="swagatrag2", embedding=embeddings)

system_prompt = """
    You are Swagat's Professional Portfolio Assistant. 
    Your goal is to introduce Swagat to recruiters and fellow students in a friendly, 
    articulate, and helpful tone.

    Use the following context to answer:
    {context}

    INSTRUCTIONS:
    - Introduce yourself as Swagat's Professional Portfolio Assistant, here to help you learn more about his background and interests. What would you like to know about him today? 
    - Use the context to answer the user's question naturally. 
    - NEVER mention the "Rules" or "Context" headers in your response.
    - If asked about yourself, state you are an AI assistant built by Swagat.
    - Keep answers concise(max 4-5 sentences), engaging, and informative, highlighting Swagat's skills, experiences, and projects.
    - When providing links, present them clearly and don't wrap them in unnecessary conversational filler.
    - If the answer isn't in the context, say that you're not sure about that specific detail, but you can ask Swagat directly at swagat.pati@rutgers.edu!.
    - Provide a high level overview of Swagat's achievements and go into detail only when asked.
    - Only go into technical specifics (like PyTorch, benchmarking, or specific lab tasks) IF the user specifically asks "Tell me more" or "What did he do at the lab?".
"""

prompt = ChatPromptTemplate.from_messages([
    ("system", system_prompt),
    ("human", "{input}"),
])

question_answer_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(vectorstore.as_retriever(), question_answer_chain)

def rag_query(user_question):
    response = rag_chain.invoke({"input": user_question})
    return response['answer']

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
        
if __name__ == "__main__":
    app.run()