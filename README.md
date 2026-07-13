# Product CRUD Application

A fully functional CRUD application for product management built with Node.js, Express, MongoDB, and EJS.

## Features
- Create, Read, Update, Delete products
- Server-side rendering with EJS
- MongoDB database integration
- Express.js API
- Form validation
- Responsive UI
- Automatic restart with Nodemon

## Technologies
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Frontend:** EJS, HTML, CSS
- **Tools:** Postman, Nodemon

## Installation

```bash
git clone https://github.com/Amit-Mondal-007/Product-CRUD.git
cd Product-CRUD
npm install
```

## Configuration

Create a `.env` file:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/products
NODE_ENV=development
```

## Running the Application

```bash
npm start
```

Application will be available at `http://localhost:3000`

## API Endpoints

- `GET /products` - Get all products
- `POST /products` - Create new product
- `GET /products/:id` - Get single product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

## Project Structure

```
├── models/
├── routes/
├── controllers/
├── views/
├── public/
└── server.js
```

---

Production-ready CRUD application!
