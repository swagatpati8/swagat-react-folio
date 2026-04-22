🚀 Swagat's Professional Portfolio & RAG AI Assistant
This repository contains the source code for my personal portfolio website and a specialized RAG (Retrieval-Augmented Generation) Chatbot designed to act as my professional representative.

🧠 Features

AI Portfolio Assistant: A custom-built chatbot capable of answering complex questions about my professional background, technical skills, and research at the Rutgers Art & AI Lab.

RAG Architecture: The assistant utilizes a Retrieval-Augmented Generation pipeline to ensure all answers are grounded in specific "facts" about my career, minimizing hallucinations.

High Availability: Integrated with a custom Cron Job heartbeat to prevent Render's free-tier spin-down, ensuring the AI is responsive 24/7.

Responsive Design: A modern, dark-themed UI built for readability and high-speed performance across all devices.

🛠️ Technical Stack

Frontend: React (Vercel) with Tailwind CSS for high-fidelity UI.

LLM & Embeddings: Google Gemini (1.5 Flash) for reasoning and gemini-embedding-001 for vectorization.

Vector Database: Pinecone (Serverless) for lightning-fast semantic search.

Backend: Python/Flask (Render) acting as the orchestration layer.

Reliability: External Cron-Job monitoring to maintain 100% server uptime.

📖 How it Works

Ingestion: Professional data is embedded and stored in a Pinecone vector index.

Retrieval: When a user asks a question, the system performs a cosine similarity search to find the most relevant "facts."

Augmentation: The system prompt is augmented with this retrieved context.

Generation: The Gemini model synthesizes a natural, helpful response.
