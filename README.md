# 🌾 KisanTrust — AI-Powered Agricultural Credit Intelligence Platform

<div align="center">

**Turn crop photos into credit scores. Empower farmers. Enable lenders.**

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?logo=python&logoColor=white)](https://python.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8-010101?logo=socket.io&logoColor=white)](https://socket.io/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 📋 Table of Contents

- [The Problem](#-the-problem)
- [Our Solution](#-our-solution)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [Team](#-team)

---

## 🔴 The Problem

India has **15.8 crore farmers** — yet **71% have zero access to formal credit**. Banks reject them because:

- ❌ No CIBIL score or credit history
- ❌ No verifiable proof of farming activity
- ❌ No way to assess crop risk before lending

The result? Farmers borrow from moneylenders at **24–36% interest** (vs. 7% bank rate), creating a **₹16 lakh crore informal debt burden**. Meanwhile, India loses **₹90,000 crore/year** to crop diseases that go undetected until it's too late.

> **The gap:** No infrastructure exists to convert a farmer's real farming behavior into a number a bank can trust.

---

## 💡 Our Solution

**KisanTrust** creates a verified digital farming identity by combining AI-powered crop diagnosis with a proprietary agricultural credit scoring system.

### Three Pillars

| 🤖 AI Crop Doctor | 📊 Agri-Trust Score | 🤝 Lender Marketplace |
|---|---|---|
| Instant disease detection from phone camera using Gemini Vision AI | Proprietary credit score (0–850) built from verified farm behavior | Ranked farmer profiles for data-driven lending decisions |
| Treatment plans in farmer's native language | Tamper-proof, server-computed, GPS-verified | Real-time chat + 1-click loan processing with SMS alerts |

> *"We turn a farmer's crop photos into a credit score that banks can trust."*

---

## ✨ Key Features

### For Farmers 🌾
- **AI Crop Diagnosis** — Upload a photo, get disease identification + treatment plan in seconds
- **Multilingual Support** — Full UI + AI-generated treatment plans in Hindi, Marathi, Tamil, Telugu
- **Agri-Trust Score** — Transparent score breakdown showing how farming behavior builds creditworthiness
- **Loan Application** — One-click loan application visible to all lenders
- **Real-Time Chat** — Direct messaging with lenders reviewing their application
- **SMS Notifications** — Instant alerts on loan approval/rejection (works on feature phones)
- **Diagnosis History** — Complete log of all diagnoses with follow-up tracking

### For Lenders 🏦
- **Farmer Search** — Look up any farmer by phone number to view verified profile
- **Loan Leaderboard** — All applications ranked by Agri-Trust Score (highest first)
- **AI-Verified Data** — GPS-tagged diagnoses, improvement tracking, behavioral metrics
- **Score Radar Chart** — Compare up to 3 farmers side-by-side
- **1-Click Approve/Reject** — Streamlined loan processing with SMS auto-notification
- **Real-Time Chat** — Integrated messenger in farmer profile drawer
- **DPDP Compliance** — Farmer data anonymized until credit inquiry consent

### Platform Intelligence 🧠
- **Agri-Trust Score Algorithm** — Computed from 5 behavioral factors:
  - Diagnosis Frequency (30%) — How actively does the farmer monitor crops?
  - Improvement Rate (25%) — Do crops improve after treatment?
  - Seasonal Management (20%) — Right actions at right crop stages?
  - Location Consistency (15%) — GPS proves real field ownership
  - Response Time (10%) — How fast does farmer act on alerts?
- **Follow-Up Tracking** — System detects if farmer follows treatment recommendations
- **Treatment Database** — Curated crop-specific treatments matched via AI

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 18 + TypeScript | Component-based UI with type safety |
| Vite | Lightning-fast dev server & build tool |
| Framer Motion | Smooth page transitions & micro-animations |
| Recharts | Radar charts for score comparison |
| Leaflet + OpenStreetMap | GPS field mapping & verification |
| Socket.IO Client | Real-time chat messaging |
| Lucide React | Consistent icon system |

### Backend (Node.js)
| Technology | Purpose |
|-----------|---------|
| Express.js 5 | REST API framework |
| MongoDB + Mongoose | Document database & ODM |
| Socket.IO | WebSocket server for real-time chat |
| JWT (dual system) | Separate farmer & lender authentication |
| Bcrypt | Password hashing |
| Cloudinary + Multer | Image upload & CDN storage |
| Twilio | SMS notifications (loan alerts, reminders) |

### AI Agent (Python)
| Technology | Purpose |
|-----------|---------|
| FastAPI + Uvicorn | High-performance AI microservice |
| Google Gemini 1.5 Pro | Multimodal vision — crop disease detection |
| LangChain | Multi-step AI reasoning pipeline |
| Sentence Transformers | Treatment database semantic matching |
| Pillow | Image preprocessing |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React)                         │
│   Farmer Dashboard │ Lender Dashboard │ Chat │ Loan Apply       │
└──────────┬──────────────────┬───────────────────┬───────────────┘
           │ REST API          │ WebSocket          │ REST API
           ▼                   ▼                    ▼
┌──────────────────────────────────────────────────────────────────┐
│                    BACKEND (Node.js + Express)                   │
│                                                                  │
│  Auth │ Diagnosis │ Score │ Loans │ Chat │ Lender │ Upload       │
│  Routes  Routes    Routes  Routes  Routes  Routes   Routes      │
│                                                                  │
│  ┌─────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │
│  │ JWT Auth│  │ Socket.IO│  │ Twilio   │  │ Cloudinary       │  │
│  │ (Dual)  │  │ Server   │  │ SMS      │  │ Image Storage    │  │
│  └─────────┘  └──────────┘  └──────────┘  └──────────────────┘  │
│                        │                                         │
│                    MongoDB                                       │
│  Farmers │ Diagnoses │ LoanApps │ Messages │ Lenders │ Fields   │
└──────────────────────────┬───────────────────────────────────────┘
                           │ HTTP
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                  AI AGENT (Python + FastAPI)                      │
│                                                                  │
│  ┌────────────┐  ┌─────────────────┐  ┌───────────────────────┐ │
│  │ Image      │  │ Gemini 1.5 Pro  │  │ Treatment Database    │ │
│  │ Processing │  │ Vision API      │  │ + Semantic Matching   │ │
│  └────────────┘  └─────────────────┘  └───────────────────────┘ │
│                                                                  │
│  Diagnosis Pipeline: Image → Disease Detection → Treatment →     │
│                      Translation → Score Update                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
KisanTrust/
├── frontend/                        # React + TypeScript Frontend
│   ├── src/
│   │   └── app/
│   │       ├── components/
│   │       │   ├── LandingPage.tsx       # Marketing landing page
│   │       │   ├── Auth.tsx              # Login/Register (farmer + lender)
│   │       │   ├── FarmerLayout.tsx      # Sidebar layout + chat widget
│   │       │   ├── FarmerDashboard.tsx   # Main farmer dashboard
│   │       │   ├── DiagnoseCrop.tsx      # AI crop diagnosis page
│   │       │   ├── DiagnosisHistory.tsx  # Diagnosis log
│   │       │   ├── DiagnosisDetail.tsx   # Single diagnosis deep-dive
│   │       │   ├── ScoreDetails.tsx      # Agri-Trust Score breakdown
│   │       │   ├── LoanApply.tsx         # Loan application form
│   │       │   ├── ChatWidget.tsx        # Floating chat bubble
│   │       │   ├── LenderDashboard.tsx   # Lender portal + leaderboard
│   │       │   ├── FarmerSettings.tsx    # Profile settings
│   │       │   └── ...                   # Landing pages, navbar, etc.
│   │       ├── contexts/
│   │       │   ├── AuthContext.tsx        # Auth state management
│   │       │   └── ThemeContext.tsx       # Dark/light theme
│   │       ├── services/
│   │       │   ├── api.ts                # REST API client
│   │       │   └── socket.ts             # Socket.IO client
│   │       ├── i18n/
│   │       │   └── translations.ts       # Multilingual UI strings
│   │       └── routes.tsx                # App routing
│   └── package.json
│
├── backend/                         # Node.js + Express Backend
│   ├── main.js                          # Server entry + Socket.IO setup
│   ├── config/
│   │   └── db.js                        # MongoDB connection
│   ├── models/
│   │   ├── farmer_model.js              # Farmer schema
│   │   ├── lender_model.js              # Lender schema
│   │   ├── diagnosis_model.js           # Diagnosis records
│   │   ├── loanApplication_model.js     # Loan applications
│   │   ├── message_model.js             # Chat messages
│   │   ├── field_model.js               # GPS field data
│   │   └── blacklistedToken_model.js    # JWT blacklist
│   ├── controllers/
│   │   ├── authController.js            # Farmer auth logic
│   │   ├── lender_controller.js         # Lender auth + farmer lookup
│   │   ├── diagnosis_controller.js      # Crop diagnosis orchestration
│   │   ├── loan_controller.js           # Loan apply/review/leaderboard
│   │   └── chat_controller.js           # Chat conversations/messages
│   ├── routes/
│   │   ├── authroutes.js                # POST /api/auth/*
│   │   ├── lenderroutes.js              # POST /api/lenders/*
│   │   ├── diagnosisroutes.js           # POST /api/diagnosis/*
│   │   ├── loanroutes.js                # /api/loans/*
│   │   ├── chatroutes.js                # /api/chat/*
│   │   ├── scoreroutes.js               # GET /api/score/*
│   │   ├── fieldroutes.js               # POST /api/fields/*
│   │   └── uploadImage.js               # POST /api/upload
│   ├── middleware/
│   │   ├── authmiddleware.js            # Farmer JWT verification
│   │   ├── lenderAuth.js                # Lender JWT verification
│   │   └── upload.js                    # Multer + Cloudinary config
│   ├── utils/
│   │   ├── smsService.js                # Twilio SMS (loan alerts, reminders)
│   │   └── aiService.js                 # AI agent HTTP client
│   ├── data/
│   │   └── treatmentDatabase.js         # Curated crop treatment data
│   ├── .env                             # Environment variables
│   └── package.json
│
└── agent/                           # Python AI Microservice
    ├── main.py                          # FastAPI entry point
    ├── config.py                        # Gemini API / Cloudinary config
    ├── models.py                        # Pydantic request/response models
    ├── services/
    │   ├── diagnosis_service.py         # Core AI diagnosis pipeline
    │   ├── image_service.py             # Image preprocessing
    │   ├── disease_matcher.py           # Treatment semantic matching
    │   ├── cloudinary_service.py        # Image upload service
    │   └── embedding_service.py         # Sentence transformer embeddings
    ├── requirements.txt
    └── venv/
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **Python** ≥ 3.10
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **API Keys:**
  - [Google Gemini API](https://ai.google.dev/) — for crop disease AI
  - [Cloudinary](https://cloudinary.com/) — for image storage
  - [Twilio](https://www.twilio.com/) — for SMS (optional)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/KisanTrust.git
cd KisanTrust
```

### 2. Setup Backend (Node.js)

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/kisantrust
JWT_SECRET=your_jwt_secret_key_here

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Twilio (optional — for SMS notifications)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1xxxxxxxxxx

# AI Agent Service URL
AI_SERVICE_URL=http://localhost:8000
```

Start the backend:

```bash
npm run dev
```

### 3. Setup AI Agent (Python)

```bash
cd agent
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file in `/agent`:

```env
GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the AI service:

```bash
uvicorn main:app --reload
```

### 4. Setup Frontend (React)

```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

### 5. Access the Application

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:3000 |
| AI Agent | http://localhost:8000 |
| API Health Check | http://localhost:3000/ |
| AI Agent Docs | http://localhost:8000/docs |

---

## 📡 API Documentation

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new farmer |
| POST | `/api/auth/login` | Farmer login (returns JWT) |
| POST | `/api/auth/logout` | Logout (blacklists token) |
| GET | `/api/auth/profile` | Get farmer profile |
| PUT | `/api/auth/profile` | Update farmer profile |

### Lender

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/lenders/register` | Register a lender organization |
| POST | `/api/lenders/login` | Lender login (returns JWT) |
| GET | `/api/lenders/farmers/:phone` | View farmer profile by phone |

### Diagnosis

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/diagnosis/analyze` | Upload image & get AI diagnosis |
| GET | `/api/diagnosis/history` | Get farmer's diagnosis history |
| GET | `/api/diagnosis/:id` | Get diagnosis details |

### Agri-Trust Score

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/score` | Get farmer's current score + breakdown |

### Loans

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/loans/apply` | Farmer | Submit loan application |
| GET | `/api/loans/my-applications` | Farmer | View own applications |
| GET | `/api/loans/leaderboard` | Lender | All pending apps (ranked by score) |
| PUT | `/api/loans/:id/review` | Lender | Approve/reject application |

### Chat

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/chat/conversations` | List all conversations |
| GET | `/api/chat/messages/:partnerId` | Get messages with a user |
| GET | `/api/chat/unread` | Get unread message count |

### WebSocket Events (Socket.IO)

| Event | Direction | Description |
|-------|-----------|-------------|
| `send_message` | Client → Server | Send a chat message |
| `receive_message` | Server → Client | Incoming message |
| `message_sent` | Server → Client | Confirmation of sent message |
| `typing` | Client → Server | Typing indicator |
| `partner_typing` | Server → Client | Partner is typing |
| `mark_read` | Client → Server | Mark messages as read |

---

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | ✅ | Backend server port (default: 3000) |
| `MONGODB_URI` | ✅ | MongoDB connection string |
| `JWT_SECRET` | ✅ | Secret key for JWT signing |
| `CLOUDINARY_CLOUD_NAME` | ✅ | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | ✅ | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | ✅ | Cloudinary API secret |
| `GEMINI_API_KEY` | ✅ | Google Gemini API key |
| `AI_SERVICE_URL` | ✅ | AI agent URL (default: http://localhost:8000) |
| `TWILIO_ACCOUNT_SID` | ❌ | Twilio SID (for SMS) |
| `TWILIO_AUTH_TOKEN` | ❌ | Twilio auth token |
| `TWILIO_PHONE_NUMBER` | ❌ | Twilio sender number |

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for India's farmers**

*KisanTrust — किसान का विश्वास*

</div>
