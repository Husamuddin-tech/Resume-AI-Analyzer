
# 📄 AI Resume Analyzer

**A full‑stack web application powered by Google Gemini, designed to analyze your resume with intelligence and empathy—highlighting strengths, weaknesses, and tailored improvement suggestions.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

## 🚀 Live Demo

[Try it out now](https://resume-ai-analyzer-peach.vercel.app/) — upload a PDF, get instant Gemini-powered feedback.

---

## ✨ Key Features

- **AI-Driven Resume Insights**: Upload a resume PDF and receive structured, context‑aware feedback from Google Gemini.
- **Automated Parsing**: Extracts contact info, work history, education, skills, projects and more.
- **Smart Scoring**: Gives a quantitative score with identified improvement zones and upskilling suggestions.
- **Upload History**: View all past resume analyses in a sortable table with detailed modal view.
- **Modern UI/UX**: Drag‑and‑drop upload, toast notifications, mobile responsiveness for smooth user experience.

---

## 🧱 Tech Stack

| Layer         | Technologies                                                                 |
|---------------|------------------------------------------------------------------------------|
| Frontend      | React.js (Vite), Axios, react-hot-toast, react-dropzone                      |
| Backend       | Node.js, Express, Multer, PDF‑Parse                                           |
| Database      | PostgreSQL                                                                    |
| AI Engine     | Google Gemini API via `@google/generative-ai`                                |
| Deployment    | Vercel (frontend), Render (backend + database)                                |

---

## 🗂️ Project Structure

```
resume-analyzer/
├── client/
│   ├── public/
│   ├── src/
│   ├── .env.local
│   └── package.json
└── server/
    ├── controllers/
    ├── routes/
    ├── middleware/
    ├── utils/
    ├── database.sql
    ├── index.js
    ├── .env
    └── package.json
```

---

## ⚙️ Local Setup Guide

### Prerequisites

- Node.js v18+  
- PostgreSQL installed and running

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Husamuddin-tech/Resume-AI-Analyzer.git
cd Resume-AI‑Analyzer
```

#### 2. Backend Setup

```bash
cd server
npm install
```

**Create `.env`**:

```env
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/resume_db"
GEMINI_API_KEY="your_google_gemini_api_key"
```

**Database setup**:

```bash
psql -U USERNAME -c "CREATE DATABASE resume_db;"
psql -U USERNAME -d resume_db -f database.sql
```

**Run server**:

```bash
npm start
```

Backend runs at `http://localhost:4000`

#### 3. Frontend Setup

```bash
cd ../client
npm install
```

**Create `.env.local`**:

```env
VITE_API_BASE_URL="http://localhost:4000"
```

**Run frontend**:

```bash
npm run dev
```

Available at `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint                  | Description                                         |
|--------|---------------------------|-----------------------------------------------------|
| POST   | `/api/resumes/upload`     | Upload a resume PDF and receive parsed feedback     |
| GET    | `/api/resumes`            | Retrieve all previously analyzed resumes            |
| GET    | `/api/resumes/:id`        | Get full analysis for a specific resume             |

---

## 🖼️ Screenshot Placeholders


<img width="920" height="802" alt="resumeAnalysis" src="https://github.com/user-attachments/assets/a0497ba2-3b27-4ee6-bc80-fb9064cc98fb" />

Resume Analysis

<img width="1173" height="613" alt="historyViewer" src="https://github.com/user-attachments/assets/4171e9b8-083b-40c9-bfc1-16a91e47d70a" />

History Viewer

<img width="998" height="412" alt="AIFeedback1" src="https://github.com/user-attachments/assets/46f6807e-46d4-4f3f-b8aa-beb7a1fcf66b" />

AI Feedback - 1

<img width="861" height="568" alt="AIFeedback2" src="https://github.com/user-attachments/assets/de2bc7a8-f905-45d4-a042-0e882eeaad2c" />

AI Feedback - 2

---

## ✅ Why This Tool Stands Out

- Harnesses Google Gemini for deep, nuanced resume evaluation  
- Non-technical users get actionable feedback instantly  
- Clean, intuitive interface on both mobile and desktop  
- Built to scale and evolve with future expansion 

---

## 🙋 Author

**Syed Husamuddin**  
- 🔗 [GitHub](https://github.com/Husamuddin-tech)  
- 💼 [LinkedIn](https://www.linkedin.com/in/syed-husamuddin)

---

