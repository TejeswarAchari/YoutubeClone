# 🎬 YouTube Clone – React + Redux + Tailwind

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![YouTube API](https://img.shields.io/badge/YouTube_API-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

> A high-performance YouTube-style video streaming application built with React, Redux Toolkit, Tailwind CSS, and the YouTube Data API.

This project features a fully responsive UI, live chat simulation, optimized search functionality with debouncing, and recursive threaded comments.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture Highlights](#-architecture-highlights)
- [Project Structure](#-project-structure)
- [Routing](#-routing-overview)
- [Getting Started](#-getting-started)
- [Contributing](#-contributing)

---

## 🚀 Features

| Feature | Description |
| :--- | :--- |
| **🔍 Smart Search** | Debounced search input + API-based suggestions + Dedicated search results page to minimize API calls. |
| **🧭 Nested Routing** | Persistent header/sidebar architecture with page-level dynamic content using React Router's `<Outlet />`. |
| **🆚 Dynamic Sidebar** | Global sidebar state managed via Redux (`toggleMenu`, `openMenu`, `closeMenu`) for smooth transitions. |
| **📺 Watch Page** | Full video player (iframe) integration, complete with recommendation lists, comments, and live chat. |
| **💬 Live Chat** | Simulation of high-frequency live data using `setInterval` polling (New messages every 1.5s). |
| **🧵 Threaded Comments** | Advanced N-level deep comments implemented using Recursive Component Rendering. |
| **⚡ Performance** | Shimmer UI / Skeleton screens implemented for better user experience during data fetching. |
| **📱 Responsive Design** | Mobile-first approach with sticky headers and adaptive grid layouts using Tailwind CSS. |

---

## 🛠️ Tech Stack

### Frontend
* **React** (Hooks, Functional Components)
* **JavaScript** (ES6+)
* **create-react-app**

### Styling
* **Tailwind CSS** (Utility-first framework)

### State Management
* **Redux Toolkit** (Slices, Store)
* **React-Redux**

### Routing
* **React Router DOM** (v6+)

### APIs
* **YouTube Data API v3**
* **Google Suggest API**

---

## 🧠 Architecture Highlights

### 1. Optimization via Debouncing
* **Search keystrokes are debounced (200ms delay)** to drastically reduce API calls to the suggestion engine.
* Results are **cached in a Redux slice** to prevent re-fetching the same query multiple times.

### 2. Live Chat Simulation
* Uses **API polling (`setInterval`)** to simulate a live socket connection.
* Manages the DOM size by **removing old chat messages** as new ones arrive to prevent memory leaks and browser lag.

### 3. Recursive Components
* The "Comments" section utilizes a **recursive structure** to handle nested replies of infinite depth efficiently.

### 4. Lazy Loading
* Components and heavy assets are **lazy-loaded** to improve the Initial Contentful Paint (ICP) score.

---

## 📂 Project Structure

```bash
src/
├── components/          # Reusable UI components and Pages
│   ├── Head.js         # Navigation Bar
│   ├── Sidebar.js      # Collapsible Sidebar
│   ├── VideoContainer.js
│   ├── WatchPage.js
│   └── ...
├── utils/               # Helper functions and State
│   ├── appStore.js     # Redux Store configuration
│   ├── chatSlice.js    # Chat data logic
│   ├── searchSlice.js  # Caching logic
│   └── constants.js    # API Keys and URLs
├── App.js               # Main Layout & Router Provider
└── index.js             # Entry Point
```
🔗 Routing OverviewRouteComponentDescription/MainContainerThe home feed displaying popular videos./watch?v=:idWatchPageThe video player, live chat, and comments section./results?q=:querySearchResultsLists videos matching the user's search query.📦 Getting StartedFollow these steps to set up the project locally.1. Clone the repositoryBashgit clone [https://github.com/your-username/youtube-clone.git](https://github.com/your-username/youtube-clone.git)
cd youtube-clone

2. Install dependenciesBashnpm install

3. Configure API KeysTo fetch real data, you need a YouTube Data API key.Go to the Google Cloud Console.Enable YouTube Data API v3.Create an API Key.Create a file src/utils/constants.js and add the following:JavaScript// src/utils/constants.js
export const GOOGLE_API_KEY = "YOUR_GENERATED_KEY_HERE";

export const YOUTUBE_VIDEOS_API = "[https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=](https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=)" + GOOGLE_API_KEY;

4. Start the development serverBashnpm start
Runs the app in the development mode.Open http://localhost:3000 to view it in your browser.🤝 ContributingContributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.Fork the ProjectCreate your Feature Branch (git checkout -b feature/AmazingFeature)Commit your Changes (git commit -m 'Add some AmazingFeature')Push to the Branch (git push origin feature/AmazingFeature)Open a Pull Request📄 LicenseThis project is for learning and educational purposes only.All trademarks, logos, and brand names are the property of their respective owners.
