# Employee Management System

A full-stack web application to manage employee records with full CRUD operations.

Built with **React** (frontend) and **Spring Boot** (backend), connected to a **MySQL** database.

---

## Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React 19, Axios              |
| Backend   | Spring Boot, Spring Data JPA |
| Database  | MySQL                        |
| Build     | Maven (backend), npm (frontend) |

---

## Features

- View all employees in a list
- Add a new employee
- Edit employee details
- Delete an employee
- REST API with proper HTTP status codes

---

## Project Structure

```
Employee-Management-System/
├── backend/        # Spring Boot REST API
└── frontend/       # React app
```

---

## Getting Started

### Prerequisites

- Java 17+
- Node.js 18+
- MySQL 8+
- Maven

---

### 1. Database Setup

Create the database in MySQL:

```sql
CREATE DATABASE employee_db;
```

Update credentials in `backend/src/main/resources/application.properties` if needed:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password
```

---

### 2. Run the Backend

```bash
cd backend
./mvnw spring-boot:run
```

The API will be available at `http://localhost:8081`

---

### 3. Run the Frontend

```bash
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | `/api/employees`      | Get all employees    |
| GET    | `/api/employees/{id}` | Get employee by ID   |
| POST   | `/api/employees`      | Add new employee     |
| PUT    | `/api/employees/{id}` | Update employee      |
| DELETE | `/api/employees/{id}` | Delete employee      |

---

## Employee Fields

| Field      | Type   |
|------------|--------|
| id         | Long   |
| name       | String |
| email      | String |
| department | String |
| salary     | Double |
