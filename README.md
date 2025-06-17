# 🏨 Hotel Booking Platform - Backend API (Mini Project)

A backend REST API for a hotel booking platform built with Express.js and Sequelize. This project supports user registration, hotel room listings, searching rooms, and booking functionality.

## 🚀 Features

- User Registration and Login (JWT Auth)
- CRUD operations for hotel room listings (owner only)
- Search rooms based on availability (check-in/check-out)
- Book available rooms (avoids double booking)
- Input validation and error handling
- SQLite database via Sequelize ORM

## 🧑‍💻 Tech Stack

- Node.js + Express.js
- Sequelize ORM
- SQLite (can switch to PostgreSQL or MySQL)
- JWT for Authentication
- bcrypt for password hashing

## 📁 Project Structure

```
hotel-booking-api/
├── models/
├── routes/
├── middleware/
├── config/
├── app.js
├── .env
└── package.json
```

## 📦 Installation

```bash
git clone <your-repo-url>
cd hotel-booking-api
npm install
```
Create a `.env` file:
```
JWT_SECRET=your_jwt_secret
```

## ▶️ Run the Server

```bash
npm run dev
```

## 📬 API Endpoints

### Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get token

### Rooms

- `POST /api/rooms` - Create a hotel room (requires token)
- `GET /api/rooms` - Get all rooms
- `GET /api/rooms/search?checkIn=YYYY-MM-DD&checkOut=YYYY-MM-DD` - Search available rooms
- `DELETE /api/rooms/:id` - Delete a room (owner only)

### Bookings

- `POST /api/bookings` - Book a room (requires token)

## 🧪 Dummy Users

```json
POST /api/auth/register
{
  "username": "Alice",
  "email": "alice@example.com",
  "password": "alice123"
}
```

## 📅 Dummy Booking

```json
POST /api/bookings
Headers: Authorization: Bearer <token>
{
  "roomId": 1,
  "checkIn": "2025-06-27",
  "checkOut": "2025-06-29"
}
```

## 📌 Notes

- Make sure to use Bearer token in headers for protected routes.
- The project uses SQLite for simplicity; you can switch to PostgreSQL or MySQL in `models/index.js`.

---

© 2025 Hotel Booking API Project - Prodigy Infotech Task 05