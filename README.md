# 📝 Personal Task Manager (Full-Stack Assessment)

This project is a small, production-grade full-stack web application built for the Studio Graphene Full Stack Developer Assessment. It implements **Exercise 1: Personal Task Manager**, which allows a single user to seamlessly create, view, update, and delete tasks while tracking completions and active metrics.

---

## 🚀 Live Demo Links
* **Frontend App:** *[Insert your deployed Vercel/Netlify URL here if applicable]*
* **Backend API:** *[Insert your deployed Render/Railway URL here if applicable]*

---

## 🛠️ Tech Stack & Choice Justifications
* **Frontend:** Built with **React** via the **Vite** runtime environment for lightweight execution and near-instantaneous hot-reloading compilation.
* **Icons:** **Lucide React** utilized to provide clean, minimalist semantic iconography (such as calendar tracking and check states) across the UI components.
* **Backend:** Engineered with **Node.js** and the **Express** framework utilizing modern ES6 module imports (`"type": "module"`) to deliver decoupled, high-performance API endpoints.
* **Storage Layer:** Configured with a localized **JSON file-system flat-flat architecture (`tasks.json`)** to achieve persistent information tracking across server restarts without the overhead of heavy third-party database deployments.
* **Styling Framework:** Implemented structural inline CSS mapping across single-responsibility modules to maximize viewport responsiveness and maintain zero-latency layout paint updates.

---

## 📂 Project Structure
This repository is configured as a clear monorepo using standard modular separation between client logic and server endpoints:

```text
task-manager-assessment/
├── data/
│   └── tasks.json       # Flat-file persistence JSON datastore
├── server/              # Node.js + Express backend infrastructure
│   ├── src/
│   │   ├── models/       # Task data structures and constructors
│   │   ├── repositories/ # Direct data file-system read/write handlers
│   │   ├── services/     # Business rule orchestrators (date sorting/validation)
│   │   ├── controllers/  # Express HTTP request and status response handlers
│   │   └── routes/       # Mapping grids binding paths to explicit controllers
│   ├── server.js        # Global Express configuration assembly point
│   └── package.json     # Backend server dependencies
└── client/              # React frontend application architecture
    ├── src/
    │   ├── components/  # Reusable single-responsibility layout blocks
    │   │   ├── TaskDashboard.jsx # Dynamic statistics metric dashboard panel
    │   │   ├── TaskFilter.jsx    # Status view tab controllers (All/Active/Completed)
    │   │   ├── TaskForm.jsx      # Input validation form for creating tasks
    │   │   └── TaskItem.jsx      # Individual task item handler with overdue rules
    │   ├── services/    # Centralized network proxy communication layer
    │   │   └── taskService.js    # Decoupled fetch handlers (GET, POST, PUT, DELETE)
    │   ├── App.jsx      # Central hub state manager coordinating components
    │   └── main.jsx     # Frontend DOM entry point configuration
    └── package.json     # Frontend web app client dependencies