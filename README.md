# Connectverse-MelodyVerse Auth App

This project is a full-stack authentication system built for two fictional platforms:

- **Connectverse** (Backend – Node.js/Express API)
- **MelodyVerse** (Frontend – React.js, TailwindCSS)

It implements user signup, login, and JWT-based authentication with responsive UI, reusable components, and routing protection.

---

## 📁 Project Structure

```
connectverse-melodyverse-auth/
│
├── client/                  # Frontend (MelodyVerse)
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Login, Signup, Home
│   │   ├── App.js           # Routes and layout
│   │   ├── index.js         # React root
│   │   └── index.css        # Tailwind CSS directives
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                 # Backend (Connectverse)
│   ├── controllers/         # Logic for authentication
│   ├── models/              # Mongoose User schema
│   ├── routes/              # Express routes
│   ├── middleware/          # (Optional: Auth middleware)
│   ├── .env                 # Environment variables
│   ├── app.js               # App setup
│   └── server.js            # Entry point
│
├── README.md
└── package.json
```

---

## ⚙️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- bcryptjs (Password hashing)
- jsonwebtoken (JWT Auth)

---

## 🚀 Getting Started

### 📦 1. Clone the Repository
```bash
git clone https://github.com/yourusername/connectverse-melodyverse-auth.git
cd connectverse-melodyverse-auth
```

### 🔧 2. Backend Setup (Connectverse)
```bash
cd server
npm install
```

#### Create a `.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:
```bash
npm start
```

### 🎨 3. Frontend Setup (MelodyVerse)
```bash
cd client
npm install
npm start
```

> Visit: [http://localhost:3000](http://localhost:3000)

---

## ✨ Features

### ✅ Signup (`/signup`)
- Validates inputs
- Confirms password match
- Stores user with hashed password
- Returns JWT token

### ✅ Login (`/login`)
- Accepts username/email and password
- Verifies user and password
- Returns JWT token on success

### ✅ Protected Route
- Homepage (`/`) only accessible with token

### ✅ UI & UX
- TailwindCSS styling
- Reusable components (InputField, PasswordField, AlertMessage)
- Password visibility toggle
- Remember Me checkbox
- Forgot Password link (non-functional stub)

### ✅ JWT Auth
- Token stored in `localStorage`
- Used to protect homepage

---

## 🔐 Security & Best Practices
- Passwords hashed with bcrypt
- JWT with expiration
- Input validations
- .env for sensitive credentials

---

## 🌟 Bonus Features (Implemented/Optional)
- 🔒 ProtectedRoute component
- 👁️ Password toggle
- ✅ Form validation and alert messages
- 🧪 Ready for Jest testing support (can be added)
- 🔐 Logout clears token and redirects

---

## 🛠 Future Enhancements
- Password reset
- Email verification
- Rate limiting
- Unit testing with Jest

---

## 🙌 Author
Developed as part of a Full Stack Developer Assignment.

---

## 📝 License
This project is licensed for educational use.