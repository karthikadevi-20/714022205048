# 🔗 React URL Shortener (Frontend Only)

A user-friendly **URL Shortener Web App** built with **React and Material UI**.  
This app allows users to shorten URLs, manage expiry times, add custom shortcodes, and view detailed statistics for each shortened link.  

⚡ **Frontend Only Implementation** (No backend). All data is stored in React state for demo purposes.

---

## 🚀 Features

- ✅ Shorten URLs with optional custom shortcode  
- ✅ Specify validity period (default: 30 minutes)  
- ✅ Limit: Up to **5 URLs** shortened at a time  
- ✅ Automatic shortcode generation (if not provided)  
- ✅ Display shortened URLs with original URL, created time, and expiry  
- ✅ Statistics page with:
  - Total click count  
  - Timestamps of each click  
  - Source of click (browser)  
  - Coarse-grained location of click  
- ✅ Client-side validation (valid URL, unique shortcode, expiry check)  
- ✅ Error handling with Material UI **Snackbar + Alerts**  
- ✅ Attractive, responsive UI using **Material UI**  
- ✅ Routing with `react-router-dom`  

---

## 🛠️ Tech Stack

- **React** (create-react-app)  
- **Material UI (MUI)** for styling  
- **React Router DOM** for navigation  
- **JavaScript (ES6+)**  

---

## 📂 Project Structure

url-shortener-frontend/
│── src/
│ ├── components/
│ │ ├── UrlForm.js
│ │ ├── UrlList.js
│ │ └── StatsTable.js
│ ├── pages/
│ │ ├── ShortenerPage.js
│ │ └── StatisticsPage.js
│ ├── App.js
│ ├── index.js
│ └── index.css
│── package.json
│── README.md


---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/url-shortener-frontend.git
   cd url-shortener-frontend

    Install dependencies

npm install

Run the development server

npm start

The app will run at 👉 http://localhost:3000
📸 Screenshots (Demo)
🔗 URL Shortener Page

    <img width="1854" height="876" alt="image" src="https://github.com/user-attachments/assets/b1e5916a-6b7a-4840-8534-4d260d3bd418" />


🎯 Future Enhancements

    ✅ Connect with a backend API for persistence

    ✅ Implement real click tracking & analytics

    ✅ Add authentication for secure usage
