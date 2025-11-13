# Frontend – Role-Based Authentication App (Next.js + TypeScript)

This is the frontend for a **Role-Based Authentication Web App**, built using **Next.js**, **TypeScript**, **TailwindCSS**, and **Shadcn UI**.  
It supports User/Admin role selection during signup, login, and a protected dashboard page.

---

## 🚀 Features

- 🔐 Signup with **role selection** (User / Admin)
- 🔑 Login using email + password
- 🔒 Protected Dashboard page
- 👤 Shows logged-in user info with role
- 🎨 TailwindCSS 
- 🔄 Auto redirect if already authenticated
- 🌐 Fully deployable on Vercel
- 📦 Integrates with backend API (Node.js + Express)


---

## 🛠 Tech Stack

- **Next.js 14+ (App Router)**
- **TypeScript**
- **TailwindCSS**
- **Axios for API calls**

---

## 🔧 Environment Variables

Create a new file:
### `.env`

NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/vaibhavVS18/inbotiq_assignment_frontend.git
cd frontend
2️⃣ Install dependencies
npm install
3️⃣ Run development server
sh
npm run dev
Now open:
👉 http://localhost:3000

🏗 Build and Run in Production
npm run build
npm start
🚀 Deployment (Vercel)
Push project to GitHub

Go to Vercel → New Project

Import your GitHub repo

Add environment variable:
NEXT_PUBLIC_BACKEND_URL=<your-live-backend-url>
Deploy 🎉

📌 Frontend Pages
Route	Description
/signup	Register with email, password + role
/login	Login existing user
/dashboard	Protected page; shows user + role

🔗 API Endpoints Used (from backend)
bash
Copy code
POST /auth/signup
POST /auth/login
GET  /auth/me
POST /auth/logout
