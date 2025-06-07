# 🏠 Hostel Management System - Backend

This repository contains the backend codebase for the **Hostel Management System**, a comprehensive solution for managing hostel operations including tenant management, rental billing, payments, and real-time communication. Built with **Node.js**, **Express**, **MongoDB**, and **Socket.IO**, this backend powers the core functionalities of the system.

---

## 🚀 Features

### 👥 User & Hostel Management
- Admins can create and manage hostels, rooms, and users.
- Role-based access (Admin, Manager, Tenant) for secure data segregation.
- Authentication and authorization using **JWT**.
- Forgot password functionality with **OTP/Email-based reset**.

### 💳 Monthly Rental Invoice Generation
- Automatically generates monthly rental invoices for each tenant.
- Supports invoice tracking, payment status, and reminders.
- Email notifications for due invoices.

### 🔐 Payment Gateway Integration
- Integrated with **Razorpay / Stripe** for seamless online payments.
- Secure transactions with success/failure status tracking.
- Records payment history for auditing.

### 💬 Real-Time Chat (WebSocket)
- Tenants and management can communicate through a built-in chat system.
- Real-time updates powered by **Socket.IO**.
- Supports private (1-to-1) messaging and group chat.
- Message history stored in MongoDB for future reference.

---

## 🛠 Tech Stack

| Technology   | Description                            |
|--------------|----------------------------------------|
| Node.js      | JavaScript runtime                     |
| Express.js   | Web framework for RESTful APIs         |
| MongoDB      | NoSQL database                         |
| Mongoose     | ODM for MongoDB                        |
| JWT          | JSON Web Token for authentication      |
| Socket.IO    | Real-time bi-directional communication |
| Nodemailer   | For sending email notifications        |
| Razorpay / Stripe | Online payment integration       |

---
### 🔍 Folder Details

- **`config/`** – Centralized configurations like database connection and constants.
- **`controllers/`** – Business logic for handling HTTP requests and responses.
- **`middlewares/`** – Reusable middlewares like authentication and error handling.
- **`models/`** – MongoDB schemas using Mongoose to define the data structure.
- **`routes/`** – All Express route handlers organized by module.
- **`sockets/`** – WebSocket (real-time) logic handled through Socket.IO events.
- **`utils/`** – Helper functions for repeated operations like mail sending, OTP generation, etc.
- **`server.js`** – Initializes the Express app, connects to DB, and starts the server.
- **`.env`** – Stores sensitive configuration values (DB URI, API keys).
- **`package.json`** – Lists project dependencies, scripts, and metadata.

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/hostel-backend.git
cd hostel-backend

```
## 🔐 Environment Variables

The following environment variables must be set in your `.env` file for the application to function correctly:

| Variable Name        | Description                                 | Example Value                     |
|----------------------|---------------------------------------------|-----------------------------------|
| `PORT`               | Port number the server will run on          | `5000`                            |
| `MONGO_URI`          | MongoDB connection URI                      | `mongodb+srv://<user>:<pass>@...` |
| `JWT_SECRET`         | Secret key for JWT token signing            | `your_jwt_secret_key`             |
| `EMAIL_USER`         | Email ID used for sending transactional emails | `your_email@example.com`       |
| `EMAIL_PASS`         | Password or app-specific password for email | `your_email_password`             |
| `RAZORPAY_KEY_ID`    | Razorpay API key ID                         | `your_razorpay_key_id`            |
| `RAZORPAY_KEY_SECRET`| Razorpay API secret                         | `your_razorpay_key_secret`        |

> ⚠️ Make sure **never to commit** your `.env` file to version control. Add it to your `.gitignore` file.

