# Backend Lab 4 - User & News API

This repository contains two Express.js projects:

- **EX-1:** User management API
- **EX-2:** News articles API with journalists and categories

---

## EX-1: User Management API

### Features

- List all users
- Get a user by ID
- Create, update, and delete users
- Request validation and logging middleware

### Getting Started

1. Navigate to the `EX-1` folder:
    ```sh
    cd EX-1
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the server:
    ```sh
    node server.js
    ```
4. The API will be running at `http://localhost:3000/users`

### API Endpoints

- `GET /users` - List all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user (requires `name` and `email`)
- `PUT /users/:id` - Update user (requires `name` and/or `email`)
- `DELETE /users/:id` - Delete user

---

## EX-2: News Articles API

### Features

- CRUD for articles, journalists, and categories
- Get articles by journalist or category
- Logging middleware

### Getting Started

1. Navigate to the `EX-2` folder:
    ```sh
    cd EX-2
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the server:
    ```sh
    node server.js
    ```
4. The API will be running at `http://localhost:3000`

### API Endpoints

#### Articles

- `GET /articles` - List all articles
- `GET /articles/:id` - Get article by ID
- `POST /articles` - Create article
- `PUT /articles/:id` - Update article
- `DELETE /articles/:id` - Delete article

#### Journalists

- `GET /journalists` - List all journalists
- `GET /journalists/:id` - Get journalist by ID
- `POST /journalists` - Create journalist
- `PUT /journalists/:id` - Update journalist
- `DELETE /journalists/:id` - Delete journalist
- `GET /journalists/:id/articles` - Get articles by journalist

#### Categories

- `GET /categories` - List all categories
- `GET /categories/:id` - Get category by ID
- `POST /categories` - Create category
- `PUT /categories/:id` - Update category
- `DELETE /categories/:id` - Delete category
- `GET /categories/:id/articles` - Get articles by category

---

## Notes

- All data is stored in-memory (no database).
- Requires Node.js and npm.
- For development/testing purposes only.
