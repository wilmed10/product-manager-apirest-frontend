# 🛍️ Product Manager - PERN Stack

**Product Manager** is a full-stack web application for managing product inventories, built using the **PERN stack**: PostgreSQL, Express, React, and Node.js. This project serves as an educational and practical demonstration of how to build modern web applications using a REST API and a React frontend, enhanced with testing and API documentation.


## ✨ Features

- 🔧 Create, Read, Update, and Delete (CRUD) products
- 🧩 Backend built with Express, Sequelize, and TypeScript
- 🗃️ PostgreSQL integration for relational data management
- ⚛️ Frontend built with React and TypeScript
- 🎨 Modern styling using Tailwind CSS
- ✅ Form validation with Valibot and express-validator
- 📃 API documentation using Swagger
- 🧪 Unit and integration tests with Jest and Supertest
- 🚀 Deployment ready


## 🧱 Tech Stack

### Frontend
- React 19
- React Router DOM 7
- TypeScript
- Tailwind CSS
- Axios
- Valibot
- Vite

### Backend
- Node.js
- Express.js
- Sequelize & Sequelize-TypeScript
- PostgreSQL
- TypeScript
- dotenv, cors, morgan
- Swagger (swagger-jsdoc + swagger-ui-express)

### Testing
- Jest
- Supertest

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ProductManager-PERN.git
cd ProductManager-PERN
```

### 2. Install dependencies

- Backend
```bash
cd server
npm install
```
- Frontend
```bash
cd ../client
npm install
```

### 3. Set up environment variables
Create a .env file in both the server/ and client/ directories and provide the necessary environment variables such as database URL, port, etc.

### 4. Run the app in development mode

- Backend
```bash
cd server
npm run dev
```
- Frontend
```bash
cd client
npm run dev

The frontend should be available at http://localhost:5173 and the backend at http://localhost:3000 (or whichever ports you configure).
```


## 🧪 Running Tests

Backend tests are written using Jest and Supertest.

```bash
cd server
npm test
```

You can also check test coverage with:

```bash
npm run test:coverage
```


## 📚 API Documentation
The backend includes Swagger documentation. Once the server is running, visit:

```bash
http://localhost:3000/api/docs
You will find all the available endpoints, request/response structures, and status codes.
```

## 🔒 Validation & Error Handling

- Express Validator is used on the server side to ensure input data is clean and validated.
- Valibot handles client-side form validation.
- Consistent error responses using a middleware error handler.


## 🛠️ Project Goals

This project was created as a learning tool to practice:
- Full Stack development using modern tools
- REST API design and documentation
- Testing backend APIs
- Component-based architecture in React
- TypeScript usage across both frontend and backend
- Building and deploying real-world web applications