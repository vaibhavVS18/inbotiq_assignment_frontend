# Frontend – Role-Based Authentication App (Next.js + TypeScript)

This is the frontend for a **Role-Based Authentication Web App**, built using **Next.js**, **TypeScript**, **TailwindCSS**, and **Shadcn UI**.  
It supports User/Admin role selection during signup, login, and a protected dashboard page.

---

## 🚀 Features

- 🔐 Signup with **role selection** (User / Admin)
- 🔑 Login using email + password
- 🔒 Protected Dashboard page
- 👤 Shows logged-in user info with role
- 🎨 TailwindCSS + Shadcn UI components
- 🔄 Auto redirect if already authenticated
- 🌐 Fully deployable on Vercel
- 📦 Integrates with backend API (Node.js + Express)

---

## 📁 Project Structure

frontend/
├── app/
│ ├── signup/
│ ├── login/
│ ├── dashboard/
│ └── layout.tsx
├── components/
├── lib/
├── public/
├── styles/
├── package.json
├── next.config.mjs
└── README.md

yaml
Copy code

---

## 🛠 Tech Stack

- **Next.js 14+ (App Router)**
- **TypeScript**
- **TailwindCSS**
- **Shadcn UI**
- **Axios for API calls**

---

## 🔧 Environment Variables

Create a new file:

### `.env.local`

NEXT_PUBLIC_BACKEND_URL=<your-backend-base-url>

makefile
Copy code

Example:

NEXT_PUBLIC_BACKEND_URL=https://your-backend.onrender.com

yaml
Copy code

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone <your-frontend-repo-url>
cd frontend
2️⃣ Install dependencies
sh
Copy code
npm install
3️⃣ Run development server
sh
Copy code
npm run dev
Now open:
👉 http://localhost:3000

🏗 Build and Run in Production
sh
Copy code
npm run build
npm start
🚀 Deployment (Vercel)
Push project to GitHub

Go to Vercel → New Project

Import your GitHub repo

Add environment variable:

ini
Copy code
NEXT_PUBLIC_BACKEND_URL=<your-live-backend-url>
Deploy 🎉

📌 Frontend Pages
Route	Description
/signup	Register with name, email, password + role
/login	Login existing user
/dashboard	Protected page; shows user + role

🔗 API Endpoints Used (from backend)
bash
Copy code
POST /auth/signup
POST /auth/login
GET  /auth/me
