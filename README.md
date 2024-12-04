README for GWECCC 2025 Project
GWECCC 2025 Website
This repository contains the full-stack code for the GWECCC 2025 Website, which is built with MERN Stack (MongoDB, Express, React, Node.js)
. This website is for the Global Water, Energy, and Climate Change Conference 2025 (GWECCC 2025).

Features
Banner Section: A dynamic slider/banner with event dates and venue.
About the Event: A section with a brief description of GWECCC 2025.
Event Schedule: A display of event schedules, including dates, topics, and speakers.
Registration: Form for users to register with personal details and the number of delegates.
Admin Panel: Admin interface for managing participant registrations.

Tech Stack
Frontend: React.js
Backend: Node.js, Express.js, MongoDB
Database: MongoDB (hosted on MongoDB Atlas or local)

Setup Instructions

Frontend (React)
Clone the repository:
git clone <repository-url>

1. Navigate to the frontend directory:

cd gweccc-frontend 2. Install the necessary dependencies:

npm install

3.Run the frontend:
npm start

#backend
1.Navigate to the backend directory:

cd gweccc-backend

2.Install the necessary dependencies:

npm install

3.Set up environment variables:

Create a .env file in the root of the gweccc-backend directory:

MONGODB_URI=<your-mongodb-connection-string>

Run the backend:node index.js

API Endpoints (Backend)
POST /register: To register participants.
GET /registrations: To fetch all registrations.

Frontend Features
Home Page: Displays the event banner and brief description.
Event Schedule: Displays the event schedule with dates, topics, and speakers.
Registration Form: Allows participants to register, including providing the number of delegates.
