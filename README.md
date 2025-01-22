# Todo List App Backend

A RESTful API backend for a Todo List application built with Express.js, TypeScript, and Prisma ORM.

## Features

- CRUD operations for tasks
- Input validation
- MySQL database integration using Prisma
- TypeScript support
- Error handling
- CORS enabled
- Request logging with Morgan

## Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure MySQL is running:
   - **On macOS**: You can start MySQL using Homebrew with the following command:
     ```bash
     brew services start mysql
     ```
     Verify that MySQL is running by checking the status:
     ```bash
     brew services list
     ```
   - **On Windows**: Start MySQL from the Services app or use the command line if MySQL is installed as a service:
     ```bash
     net start mysql
     ```
     Alternatively, use the MySQL Workbench to start the server.

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your MySQL database credentials.

5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

## Development

Start the development server with hot reload:

bash
npm run dev
``` 

## Production

Build the project and start the production server:

bash
npm run build
npm start
```

## API Endpoints

### Tasks

| Method | Endpoint     | Description         | Request Body                                    |
|--------|-------------|---------------------|------------------------------------------------|
| GET    | /tasks      | Get all tasks       | -                                              |
| POST   | /tasks      | Create a new task   | `{ title: string, color?: string, completed?: boolean }` |
| PUT    | /tasks/:id  | Update a task       | `{ title?: string, color?: string, completed?: boolean }`|
| DELETE | /tasks/:id  | Delete a task       | -                                              |

### Request Body Validation

#### Task Creation/Update
- `title`: Required, string, max 100 characters
- `color`: Optional, string
- `completed`: Optional, boolean



## Project Structure

```
src/
├── controllers/    # Request handlers
├── middleware/     # Custom middleware (validation)
├── prisma/         # Prisma client and configurations
├── routes/         # API routes
├── services/       # Business logic
├── types/          # TypeScript interfaces
└── index.ts        # Application entry point
```