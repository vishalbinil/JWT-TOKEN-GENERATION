# JWT-TOKEN-GENERATION
JWT TOKEN GENERATION
# NestJS Authentication API

 Introduction
This project is a **NestJS-based authentication API** that provides user signup and login functionalities using **JWT authentication** and **MongoDB**.

 Features
- User authentication using **JWT**
- Secure password storage using **bcrypt**
- MongoDB integration using **Mongoose**
- Protected routes with **Guards**

## 🛠 Installation

Clone the Repository
```sh
git clone https://github.com/your-repo/nestjs-auth.git
cd nestjs-auth
```

 Install Dependencies
```sh
npm install
```

 Configure Environment Variables
Create a `.env` file in the root directory and add:
```sh
MONGO_URI=mongodb://localhost:27017/nest-auth
JWT_SECRET=your_jwt_secret
PORT=3000
```

 Run the Application
```sh
npm run start
```
The server should now be running at **http://localhost:3000**.

---

 API Endpoints

 User Signup
**Endpoint:** `POST /auth/signup`
- **Request Body:**
  ```json
  {
    "email": "testuser@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User created successfully",
    "user": {
      "email": "testuser@example.com",
      "id": "60d9c6f4bca2b2f8e4e9f2d5"
    }
  }
  ```

 User Login
**Endpoint:** `POST /auth/login`
- **Request Body:**
  ```json
  {
    "email": "testuser@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "access_token": "jwt-token-here"
  }
  ```

 Get User Profile (Protected)
**Endpoint:** `GET /auth/profile`
- **Headers:**
  ```sh
  Authorization: Bearer <your_jwt_token>
  ```
- **Response:**
  ```json
  {
    "userId": "60d9c6f4bca2b2f8e4e9f2d5",
    "email": "testuser@example.com"
  }
  
Technologies Used
- **NestJS** - Backend framework
- **MongoDB + Mongoose** - Database
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Postman** - API testing


