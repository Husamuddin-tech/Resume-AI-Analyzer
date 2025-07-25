
# 📄 AI Resume Analyzer

**A full‑stack web application powered by Google Gemini, designed to analyze your resume with intelligence and empathy—highlighting strengths, weaknesses, and tailored improvement suggestions.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

## 🚀 Live Demo

[Try it out now](https://resume‑ai‑analyzer‑peach.vercel.app/) — upload a PDF, get instant Gemini-powered feedback.

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

*Insert UI visuals here (e.g. drag‑and‑drop upload, analysis results, history view)*

- **Screenshot 1**: Upload interface  
- **Screenshot 2**: Analysis report  
- **Screenshot 3**: History dashboard and modal  

---

## ✅ Why This Tool Stands Out

- Harnesses Google Gemini for deep, nuanced resume evaluation  
- Non-technical users get actionable feedback instantly  
- Clean, intuitive interface on both mobile and desktop  
- Built to scale and evolve with future expansion

---

## 📈 Future Roadmap

- **Tailored feedback**: Upload job descriptions for targeted match scoring  
- **PDF export**: Download complete analysis reports  
- **Multi‑model AI**: Integrate with Claude, LLaMA, open‑source LLMs  
- **Browser extension**: Instant resume scanning on any page  
- **Bias & fairness module**: Benchmarking via FAIRE frameworks and metrics  

---

## 🙋 Author

**Syed Husamuddin**  
- [GitHub](https://github.com/Husamuddin-tech)  
- [LinkedIn](https://www.linkedin.com/in/syed-husamuddin)

---

