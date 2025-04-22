# 🧠 AI-Powered Medical Report Assistant

This project is an **AI-based medical assistant** built using the RAG (Retrieval-Augmented Generation) architecture. It allows users to upload medical reports (PDF/images), extract summaries using **Gemini**, and ask questions about the uploaded reports. The app uses **semantic search** powered by **Pinecone** and delivers accurate, context-aware responses using **Gemini AI**.

---

## 🚀 Features

- 📄 Upload medical reports (PDF or image)
- 🧠 Extracts key insights using Gemini (Google AI)
- 💬 Ask questions about the uploaded report
- 🔍 Retrieves relevant context using Pinecone vector search
- 🤖 Real-time streaming answers powered by Gemini
- ✅ Clean and modern UI with Tailwind CSS + Shadcn UI

---

## 🔑 Key Technologies Covered

| Tech | Description |
|------|-------------|
| **RAG (Retrieval-Augmented Generation)** | Combines document retrieval with AI to answer questions contextually. |
| **Pinecone (Vector Database)** | Used for storing and retrieving relevant chunks from report + user query. |
| **Next.js (React Framework)** | Full-stack React framework for building both frontend and backend APIs. |
| **LangChain (LLM Application Framework)** | (Optional integration ready) Can structure prompts and chains for LLMs. |
| **Transformers.js (Hugging Face)** | For using local or cloud-based transformer models (future integration). |
| **Tailwind CSS** | Utility-first CSS framework for responsive design. |
| **Shadcn UI** | Elegant, accessible React components for clean UI. |

---

## 🖼️ How It Works

1. **Upload Report:**  
   Upload a PDF or image file. Images are compressed for better performance.

2. **Extract Summary:**  
   The app uses **Gemini** to extract a summary from the uploaded report.

3. **Chat with Report:**  
   User types a query.  
   → It combines the query + summary  
   → Searches for related content using **Pinecone**  
   → Final prompt is sent to **Gemini**  
   → The answer is streamed back in real time.


---

## 🧑‍💻 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-username/medical-rag-assistant.git

# 2. Navigate to the project folder
cd medical-rag-assistant

# 3. Install dependencies
npm install

# 4. Setup .env with your API keys (Gemini, Pinecone, etc.)
# Example:
# GEMINI_API_KEY=your-key
# PINECONE_API_KEY=your-key

# 5. Run the dev server
npm run dev
