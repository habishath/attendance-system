# Attendance System

## Project Overview

This project is an imaginary school system for managing student attendance. It includes a login page for users to authenticate and a home page for displaying a welcome message and providing a logout option. The project is divided into two main parts: the frontend, built with React and Vite, and the backend, built with Node.js and Express.

## Project Structure

attendance-system/<br>
+--- server/<br>
|   +--- index.js<br>
|   +--- users.json (optional)<br>
|   +--- .env<br>
+--- client/<br>
|   +--- public/<br>
|   |   +--- vite.svg (optional)<br>
|   +--- src/<br>
|   |   +--- pages/<br>
|   |   |   +--- Home.jsx<br>
|   |   |   +--- Login.jsx<br>
|   |   +--- App.css<br>
|   |   +--- App.jsx<br>
|   |   +--- index.css<br>
|   |   +--- main.jsx<br>
|   +--- index.html<br>
|   +--- package.json<br>
|   +--- package-lock.json (generated)<br>
|   +--- postcss.config.js (optional)<br>
|   +--- tailwind.config.js (optional)<br>
+--- docs/ (optional)<br>
+--- README.md<br>


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (version 6.x or later)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the Repository**

   ```sh
   git clone <repository-url>
   cd attendance-system

2. **Set Up the Server**

   ```sh
   cd server
   npm install

3. **Set Up the Client**

   ```sh
   cd ../client
   npm install

**Running the Application**

1. **Start the Server**
   ```sh
    cd server
    node index.js

The server will start on 'http://localhost:5001'.

2. **Start the Client**
   ```sh
    cd ../client
    npm run dev

The client will start on 'http://localhost:5173'.

**Login Credentials**

For testing purposes, you can use the following credentials:

Username: 'admin'<br>
Password: 'password'

**Screenshots**

Screenshots of the significant tasks such as the login screen and home screen can be found in the 'docs' folder.





   


