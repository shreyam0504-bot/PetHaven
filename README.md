# PetHaven – Pet Adoption Platform

PetHaven is a simple and user-friendly pet adoption website that allows users to browse pets, submit adoption requests, use wishlist & compare features, take a pet match quiz, and download appointment slips. An admin module is included for managing pets and adoption requests. The project runs fully as a static frontend, with an optional Node.js backend included.

## Features

### User
- View pets with images & details  
- Wishlist & Compare pets  
- Adoption request form  
- User profile page  
- Pet Match Quiz  
- Download appointment slip (PDF)

### Admin
- Admin login  
- Add / Edit / Delete pets  
- View & manage adoption requests  
- Approve / Reject requests  
- Schedule appointments  

## Tech Stack
- Frontend: HTML, CSS, JavaScript  
- PDF: jsPDF  
- Backend (optional): Node.js, Express  
- Database (optional): MongoDB  

## How to Run the Project

### 1. Run the Frontend (Recommended)

You can run the frontend in two ways:

**Option A — Use Live Server (VS Code Extension)**  
1. Open the project folder in VS Code  
2. Right-click `home.html`  
3. Select **Open with Live Server**  
This is the best way to run the full project.

**Option B — Open Directly in Browser**  
Just double-click `home.html`
All main features (wishlist, compare, quiz, user pages, admin UI) work without any backend.

### 2. Run with Backend (Optional)

If you want to use the Node.js backend:
1. cd backend
2. npm install
3. node server.js

The backend will run at: `http://localhost:5000`
