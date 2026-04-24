#  Mini SaaS Task Management System

A full-stack **Task Management SaaS application** with secure authentication and multi-user functionality.  
Users can create, manage, and track their own tasks through a clean and responsive interface.

---

##  Features

###  Authentication

- User Signup & Login  
- Password hashing using bcrypt  
- JWT-based authentication  
- Protected routes  

###  Task Management

- Create tasks  
- View only your tasks (multi-user isolation)  
- Update task status (Pending → Completed)  
- Delete tasks  

###  Backend

- Node.js + Express  
- Sequelize ORM with PostgreSQL  
- RESTful API architecture  
- Error handling middleware  
- Input validation  

###  Frontend

- React (Vite)  
- Tailwind CSS  
- Responsive UI  
- State management using React Hooks  
- API integration using Axios  

###  Database

- PostgreSQL (hosted on Neon)  
- Proper user-task relationship  

---

##  Tech Stack

### Frontend
- React  
- Tailwind CSS  
- Axios  
- React Router  

### Backend
- Node.js  
- Express.js  
- Sequelize ORM  
- JWT Authentication  
- bcrypt  

### Database
- PostgreSQL (Neon)  

### Deployment
- Frontend: Vercel  
- Backend: Render  
- Database: Neon  

---

##  Project Structure

```bash
task-saas/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api/
│   │   └── App.jsx
│   └── index.html
```

---

##  Environment Variables

### Backend (`.env`)

```env
DATABASE_URL=your_neon_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Frontend (`.env`)

```env
VITE_API_URL=https://your-backend.onrender.com/api
```

---

##  Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/task-saas.git
cd task-saas
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

##  API Endpoints

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks for logged-in user |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update task status |
| DELETE | `/api/tasks/:id` | Delete a task |

---

##  Key Highlights

- Multi-user data isolation using `userId`  
- Secure JWT-based authentication  
- Clean and scalable architecture  
- Fully deployed full-stack application  
- Production-ready configuration  

---

##  Future Improvements

- [ ] Task filtering (Completed / Pending)  
- [ ] Toast notifications  
- [ ] Dark mode  
- [ ] Pagination  
- [ ] Role-based access control  

---

##  Author

**Harsh Kabra**
