# 🎵 Music Streaming Backend

A RESTful backend API for a **Music Streaming Application** built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**.

This backend provides secure authentication, role-based authorization, music uploads, album management, and artist-specific operations. It is designed as the backend service for a full-stack Music Streaming Application.

---

# 🚀 Features

- 🔐 User Registration & Login
- 🍪 JWT Authentication using HTTP Cookies
- 🛡️ Role-Based Authorization (User & Artist)
- 🎵 Upload Music (Artist Only)
- 🎼 View All Music
- 🎧 View Artist's Uploaded Music
- 💿 Create Albums
- 📀 View All Albums
- 📁 View Artist's Albums
- 🔍 Get Album Details by ID
- 🗑️ Delete Music (Artist Only)
- 🗑️ Delete Album (Artist Only)
- ☁️ Audio Storage using ImageKit
- 🔑 Password Hashing with bcrypt
- 📦 MongoDB Database with Mongoose
- 🌐 CORS Configuration for Frontend Integration
- ⚡ RESTful API Architecture
- 🧪 Tested using Postman

---

# 🛠️ Tech Stack

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
- Nodemon

---

# 📁 Folder Structure

```text
backend/
│
├── src/
│   │
│   ├── controllers/
│   │      ├── auth.controller.js
│   │      └── music.controller.js
│   │
│   ├── db/
│   │      └── db.js
│   │
│   ├── middlewares/
│   │      └── auth.middleware.js
│   │
│   ├── models/
│   │      ├── user.model.js
│   │      ├── music.model.js
│   │      └── album.model.js
│   │
│   ├── routes/
│   │      ├── auth.routes.js
│   │      └── music.routes.js
│   │
│   ├── services/
│   │      └── storage.service.js
│   │
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

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Adityagaur7078/music-streaming-app.git
```

---

## 2. Navigate to Backend

```bash
cd music-streaming-app/backend
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create a `.env` File

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

---

## 5. Start Development Server

```bash
npm run dev
```

Server starts on

```text
http://localhost:3000
```

---

# 🔐 Authentication

Authentication is implemented using **JWT stored inside HTTP Cookies**.

After a successful login, the backend sends a JWT cookie which is automatically used for authenticated requests.

### Roles

- User
- Artist

---

# 🔒 Security Features

- Password hashing using **bcryptjs**
- JWT Authentication
- HTTP Cookie Authentication
- Role-Based Authorization
- Protected Routes
- Secure Password Storage
- CORS enabled for frontend integration
- Artist-only protected endpoints

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint | Access | Description |
|---------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register User / Artist |
| POST | `/api/auth/login` | Public | Login |
| POST | `/api/auth/logout` | Authenticated | Logout |

---

## Music

| Method | Endpoint | Access | Description |
|---------|----------|--------|-------------|
| POST | `/api/music/upload` | Artist | Upload Music |
| GET | `/api/music` | User, Artist | Get All Music |
| GET | `/api/music/artist/musics` | Artist | Get Artist Music |
| DELETE | `/api/music/:musicId` | Artist | Delete Music |

---

## Albums

| Method | Endpoint | Access | Description |
|---------|----------|--------|-------------|
| POST | `/api/music/album` | Artist | Create Album |
| GET | `/api/music/albums` | User, Artist | Get All Albums |
| GET | `/api/music/albums/:albumId` | User, Artist | Get Album Details |
| GET | `/api/music/artist/albums` | Artist | Get Artist Albums |
| DELETE | `/api/music/album/:albumId` | Artist | Delete Album |

---

# 👤 User Permissions

| Feature | User | Artist |
|----------|------|---------|
| Register | ✅ | ✅ |
| Login | ✅ | ✅ |
| Logout | ✅ | ✅ |
| View Music | ✅ | ✅ |
| View Albums | ✅ | ✅ |
| View Album Details | ✅ | ✅ |
| Upload Music | ❌ | ✅ |
| View Own Music | ❌ | ✅ |
| Create Album | ❌ | ✅ |
| View Own Albums | ❌ | ✅ |
| Delete Music | ❌ | ✅ |
| Delete Album | ❌ | ✅ |

---

# 🌐 CORS Configuration

The backend allows requests from the frontend running on:

```text
http://localhost:5173
```

with credentials enabled.

```javascript
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
```

---

# 📦 Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server Port |
| MONGO_URI | MongoDB Connection String |
| JWT_SECRET | JWT Secret Key |
| IMAGEKIT_PRIVATE_KEY | ImageKit Private Key |

---

# 📤 Music Upload Flow

```text
Artist
   │
   ▼
Upload Music
   │
   ▼
Multer
   │
   ▼
ImageKit
   │
   ▼
ImageKit URL
   │
   ▼
MongoDB
```

---

# 🔑 Authentication Flow

```text
Register/Login
      │
      ▼
Password Hashing (bcrypt)
      │
      ▼
JWT Generation
      │
      ▼
HTTP Cookie
      │
      ▼
Protected Routes
      │
      ▼
Role Verification
```

---

# 📂 Database Models

## User

```javascript
{
    username,
    email,
    password,
    role
}
```

---

## Music

```javascript
{
    title,
    audioUrl,
    artist
}
```

---

## Album

```javascript
{
    title,
    musics,
    artist
}
```

---

# 🧪 API Testing

The backend has been tested using **Postman**.

### Authentication

- ✅ Register
- ✅ Login
- ✅ Logout

### Music

- ✅ Upload Music
- ✅ Get All Music
- ✅ Get Artist Music
- ✅ Delete Music

### Albums

- ✅ Create Album
- ✅ Get All Albums
- ✅ Get Album By ID
- ✅ Get Artist Albums
- ✅ Delete Album

---

# 📖 Learning Objectives

This project was built to practice:

- REST API Development
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Cookie-Based Authentication
- Role-Based Authorization
- Multer File Upload
- ImageKit Integration
- Backend Project Structure
- CRUD Operations
- API Testing using Postman

---

# 👨‍💻 Author

**Aditya Gaur**

GitHub: https://github.com/Adityagaur7078

LinkedIn: https://www.linkedin.com/in/adityagaur7078/

---

# 📄 License

This project is developed for **learning, educational, and portfolio purposes**.