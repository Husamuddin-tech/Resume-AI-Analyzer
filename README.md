# 📄 AI Resume Analyzer

**A full-stack web application that leverages the Google Gemini API to provide intelligent analysis and feedback on resumes. This tool is designed to help users optimize their resumes by identifying strengths, weaknesses, and areas for improvement.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

---

### 🚀 Checkout the Live Demo 👉🏻 [Click here!](https://resume-ai-analyzer-peach.vercel.app/)

## ✨ Features

- **🤖 AI-Powered Analysis**: Upload a PDF resume and get instant, structured feedback from Google's Gemini LLM.
- **📊 Structured Data Extraction**: Automatically parses and categorizes personal details, work experience, education, skills, and more.
- **⭐ Resume Scoring & Feedback**: Provides an objective score, detailed improvement areas, and relevant upskilling suggestions.
- **🗂️ Historical Viewer**: Browse all previously analyzed resumes in a clean, sortable table with a detailed modal view.
- **💅 Modern UI/UX**: A responsive and intuitive interface featuring a drag-and-drop uploader and toast notifications for a smooth user experience.

---

## 🛠️ Tech Stack

| Category      | Technology                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| **Frontend**  | React.js (Vite), Axios, CSS, `react-hot-toast`, `react-dropzone`                                              |
| **Backend**   | Node.js, Express.js                                                                                          |
| **Database**  | PostgreSQL                                                                                                   |
| **AI**        | Google Gemini API (`@google/generative-ai`)                                                                  |
| **File API**  | Multer (for file uploads), PDF-Parse (for text extraction)                                                   |
| **Deployment**| **Frontend**: Vercel , **Backend & Database**: Render                                                   |

---

## 📂 Project Structure

```
resume-analyzer/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.css
│   │   └── theme.js
│   ├── .env.local
│   └── package.json
│
└── server/
    ├── routes/
    │   └── resumeRoutes.js
    ├── controllers/
    ├── middleware/
    ├── utils/
    ├── database.sql
    ├── index.js
    ├── .env
    └── package.json
```

---

## ⚙️ Local Development Setup

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [PostgreSQL](https://www.postgresql.org/download/)

### 🔧 Installation Guide

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/resume-analyzer.git
cd resume-analyzer
```

#### 2. Backend Setup

```bash
cd server
npm install
```

- Create a `.env` file in the `/server` directory:

```env
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/resume_db"
GEMINI_API_KEY="your_google_ai_api_key"
```

- Create the PostgreSQL database:

```bash
psql -U YOUR_USERNAME -c "CREATE DATABASE resume_db;"
```

- Run schema:

```bash
psql -U YOUR_USERNAME -d resume_db -f database.sql
```

- Start the backend server:

```bash
npm start
```

Server runs at `http://localhost:4000`

#### 3. Frontend Setup

```bash
cd ../client
npm install
```

- Create `.env.local`:

```env
VITE_API_BASE_URL="http://localhost:4000"
```

- Start the frontend server:

```bash
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint             | Description                                              |
|--------|----------------------|----------------------------------------------------------|
| `POST` | `/api/resumes/upload`| Uploads a resume PDF for analysis and saves the result. |
| `GET`  | `/api/resumes`       | Fetches all parsed resume data.                         |
| `GET`  | `/api/resumes/:id`   | Fetches details for a specific resume by ID.            |

---

## 👤 Author

**Syed Husamuddin**

- 🔗 [GitHub](https://github.com/SyedHusamuddin)
- 💼 [LinkedIn](https://www.linkedin.com/in/syedhusamuddin)
