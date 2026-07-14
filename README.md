# 💼 Fiverr Clone

A modern full-stack Fiverr-inspired marketplace where users can discover services, search by category, and sellers can publish and manage their own gigs.

Built with **React**, **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

### Authentication

- User registration and login with JWT authentication
- Secure password hashing with bcrypt
- Cookie-based authentication
- Role-based authorization (Buyer / Seller)

### Seller Features

- Register as a seller
- Create new service listings
- Upload a profile picture
- Upload a cover image and multiple gallery images for each service
- Edit and delete own services
- View all created services

### Marketplace

- Browse all available services
- Filter services by category
- Search services by keyword
- View detailed service information
- Responsive service cards

### Access Control

- Only sellers can access:
  - Add Service page
  - My Services page
- Buyers can browse and search services but cannot create listings.

---

## 🛠️ Tech Stack

### Frontend

- React 19
- React Router
- TanStack Query
- Axios
- Tailwind CSS
- React Toastify
- React Icons
- Splide Slider
- Day.js

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Multer
- Cloudinary
- Express Rate Limit
- Cookie Parser

---

## 📸 Image Uploads

Images are stored using **Cloudinary**.

Users can upload:

- Profile picture
- Gig cover image
- Multiple gallery images

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/elifbk/fiverr-fullstack-mongodb.git
cd fiverr-clone
```

### Backend

```bash
cd api
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **api** folder and add the following variables:

```env
PORT=
MONGO_URI=
NODE_ENV=
CLIENT_URL=http://localhost:5173
JWT_SECRET=
JWT_EXPIRES=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_SECRET=
```

## 🎥 Demo

![](fiverr.gif)
