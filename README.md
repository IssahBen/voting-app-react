# 🗳️ WeVote

**WeVote** is a modern, secure, and scalable web-based voting platform designed for organizations to create and manage polls, elections, and surveys with ease. Built using **React**, **Ruby on Rails**, and **Tailwind CSS**, WeVote ensures real-time interactions and a seamless voting experience.

---

## 🚀 Features

- 🧾 **Create & Manage Polls**
  - Admins can create elections and surveys with custom options and timeframes.

- 🔐 **Secure Voting**
  - Each vote is authenticated and securely stored via API-backed validation.

- 💡 **Real-Time Results**
  - Users see live updates as votes are cast (optional for private polls).

- 📬 **Email Notifications**
  - Voters can be invited and reminded via email.

- 🌐 **Responsive UI**
  - Mobile-friendly design powered by Tailwind CSS.

---

## 🛠 Tech Stack

| Layer        | Tech                                           |
|--------------|------------------------------------------------|
| Frontend     | React, Tailwind CSS, Axios                     |
| Backend      | Ruby on Rails (API-only), PostgreSQL           |
| Auth         | Devise (with token-based sessions or JWT)      |
| API Comm     | RESTful APIs                                   |
| Deployment   | Render / Heroku / Netlify (based on setup)     |

---

## 📦 Installation

### 🔧 Backend (Rails API)

```bash
git clone https://github.com/yourusername/voting-app-react-api.git
cd voting-app-react-api

bundle install
rails db:create db:migrate

# Optional: Add credentials for email or JWT
EDITOR="code --wait" bin/rails credentials:edit

rails s
