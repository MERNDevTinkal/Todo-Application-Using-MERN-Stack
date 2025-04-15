🚀 Todo Application Using MERN Stack
A clean, full-featured Todo Application built with the MERN stack — MongoDB, Express.js, React.js, and Node.js. This project is a complete full-stack app that allows users to register, log in securely, and manage their tasks efficiently.

🔥 Key Features
✅ User Authentication with JWT & Cookies
✅ Create, Read, Update, and Delete Todos
✅ Protected API Routes – only accessible to logged-in users
✅ Inline Todo Editing with validations
✅ Modern, responsive UI with a smooth user experience
✅ Backend built with Express.js + MongoDB
✅ Frontend crafted with React.js + Tailwind CSS

🌐 Technologies Used
React.js

Node.js

Express.js

MongoDB

JWT (JSON Web Tokens)

Axios

Cookie-Parser

Tailwind CSS

🛠️ Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/MERNDevTinkal/Todo-Application-Using-MERN-Stack.git
cd Todo-Application-Using-MERN-Stack
2. Backend Setup
bash
Copy
Edit
cd server
npm install
Create a .env file in the server folder and add:

ini
Copy
Edit
PORT=5000
MONGODB_URI=your_mongo_uri
SECRET_KEY=your_jwt_secret
Run the server:

bash
Copy
Edit
npm run dev
3. Frontend Setup
bash
Copy
Edit
cd ../client
npm install
npm run dev
🔐 Authentication Flow
Uses JWT stored in HTTP-only cookies for secure authentication

Middleware protects all /todo routes

Automatically redirects unauthenticated users to login/register pages

🙌 Author
Made with ❤️ by Tinkal Kumar

