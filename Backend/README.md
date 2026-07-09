# 🎵 Music Streaming Backend

A RESTful backend API for a Music Streaming Application built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. The application supports user authentication, artist-specific music uploads, album management, and role-based authorization.

---

## 🚀 Features

- 🔐 User Registration & Login
- 🍪 JWT Authentication using HTTP Cookies
- 🛡️ Role-Based Authorization (User & Artist)
- 🎵 Upload Music (Artist Only)
- 💿 Create Albums
- 📂 Store Music Files using ImageKit
- 📦 MongoDB Database with Mongoose
- 🔑 Password Hashing using bcrypt
- 📋 RESTful API Design
- ⚡ Error Handling
- 🧪 Tested with Postman

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Multer
- ImageKit
- Cookie Parser
- CORS
- dotenv

---

## 📁 Folder Structure

```text
backend/
│
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Adityagaur7078/music-streaming-app.git
```

### Navigate to the backend folder

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

### Start the development server

```bash
npm run dev
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user or artist |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/logout` | Logout |

---

### Music

| Method | Endpoint | Access |
|---------|----------|--------|
| POST | `/api/music/upload` | Artist |
| GET | `/api/music` | User, Artist |

---

### Albums

| Method | Endpoint | Access |
|---------|----------|--------|
| POST | `/api/music/album` | Artist |
| GET | `/api/music/albums` | User, Artist |
| GET | `/api/music/albums/:albumId` | User, Artist |

---

## 🔐 Authentication

Authentication is handled using **JWT stored in HTTP-only cookies**.

### Roles

- User
- Artist

### Permissions

| Feature | User | Artist |
|----------|------|---------|
| Register | ✅ | ✅ |
| Login | ✅ | ✅ |
| View Music | ✅ | ✅ |
| View Albums | ✅ | ✅ |
| Upload Music | ❌ | ✅ |
| Create Album | ❌ | ✅ |

---

## 📦 Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server Port |
| MONGO_URI | MongoDB Connection String |
| JWT_SECRET | Secret key for JWT |
| IMAGEKIT_PRIVATE_KEY | ImageKit Private Key |

---

## 🧪 Testing

The API has been tested using **Postman**.

Tested endpoints include:

- Register
- Login
- Logout
- Upload Music
- Create Album
- Get All Music
- Get All Albums
- Get Album By ID

---

## 🚀 Future Improvements

- Refresh Token Authentication
- Request Validation (Joi/Zod)
- Global Error Handler
- Music Search
- Playlist Feature
- Likes & Favorites
- Admin Dashboard
- Streaming Analytics
- Unit & Integration Tests
- Docker Support
- CI/CD Pipeline

---

## 👨‍💻 Author

**Aditya Gaur**

GitHub: https://github.com/Adityagaur7078

---

## 📄 License

This project is created for learning and portfolio purposes.