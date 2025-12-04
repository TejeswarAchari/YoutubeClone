

import React from "react";
import { useSelector } from "react-redux";
import { Link,useLocation } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
    const location = useLocation();

  // 👇 detect watch page
  const isWatchPage = location.pathname.startsWith("/watch");

  // 👇 hide sidebar completely on watch page
  if (isWatchPage) return null;

  return (
    <div
      className={`
        bg-white shadow-lg border-r
        sticky top-16
        h-[calc(100vh-4rem)] overflow-y-auto
        transition-[width,padding] duration-300 ease-in-out
        ${isMenuOpen ? "w-56 px-4 py-4" : "w-20 px-4 py-4"}
      `}
    >
      {/* MAIN MENU */}
      <ul className="space-y-3 text-gray-900">
       <Link to={"/"}> <li
          className="flex items-center gap-3 cursor-pointer"
          title={!isMenuOpen ? "Home" : ""}
        >
          <span className="text-xl">🏠</span>
          {isMenuOpen && (
            <Link to="/" className="text-sm">
              Home
            </Link>
          )}
        </li></Link>

        <li
          className="flex items-center gap-3 cursor-pointer"
          title={!isMenuOpen ? "Shorts" : ""}
        >
          <span className="text-xl">🎬</span>
          {isMenuOpen && (
            <Link to="/shorts" className="text-sm">
              Shorts
            </Link>
          )}
        </li>

        <li
          className="flex items-center gap-3 cursor-pointer"
          title={!isMenuOpen ? "Videos" : ""}
        >
          <span className="text-xl">📺</span>
          {isMenuOpen && (
            <Link to="/videos" className="text-sm">
              Videos
            </Link>
          )}
        </li>

        <li
          className="flex items-center gap-3 cursor-pointer"
          title={!isMenuOpen ? "Live" : ""}
        >
          <span className="text-xl">📡</span>
          {isMenuOpen && (
            <Link to="/live" className="text-sm">
              Live
            </Link>
          )}
        </li>
      </ul>

      {/* SUBSCRIPTIONS */}
      <div className="mt-6">
        {isMenuOpen && (
          <h1 className="font-bold text-sm mb-2 text-gray-800">
            Subscriptions
          </h1>
        )}
        <ul className="space-y-3 text-gray-800">
          <li
            className="flex items-center gap-3 cursor-pointer"
            title={!isMenuOpen ? "Music" : ""}
          >
            <span>🎵</span>
            {isMenuOpen && <span className="text-sm">Music</span>}
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer"
            title={!isMenuOpen ? "Sports" : ""}
          >
            <span>⚽</span>
            {isMenuOpen && <span className="text-sm">Sports</span>}
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer"
            title={!isMenuOpen ? "Gaming" : ""}
          >
            <span>🎮</span>
            {isMenuOpen && <span className="text-sm">Gaming</span>}
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer"
            title={!isMenuOpen ? "Movies" : ""}
          >
            <span>🎬</span>
            {isMenuOpen && <span className="text-sm">Movies</span>}
          </li>
        </ul>
      </div>

      {/* WATCH LATER */}
      <div className="mt-6">
        {isMenuOpen && (
          <h1 className="font-bold text-sm mb-2 text-gray-800">
            Watch Later
          </h1>
        )}
        <ul className="space-y-3 text-gray-800">
          <li
            className="flex items-center gap-3 cursor-pointer"
            title={!isMenuOpen ? "Music (Watch later)" : ""}
          >
            <span>⏰</span>
            {isMenuOpen && <span className="text-sm">Music</span>}
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer"
            title={!isMenuOpen ? "Sports (Watch later)" : ""}
          >
            <span>📌</span>
            {isMenuOpen && <span className="text-sm">Sports</span>}
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer"
            title={!isMenuOpen ? "Gaming (Watch later)" : ""}
          >
            <span>⭐</span>
            {isMenuOpen && <span className="text-sm">Gaming</span>}
          </li>
          <li
            className="flex items-center gap-3 cursor-pointer"
            title={!isMenuOpen ? "Movies (Watch later)" : ""}
          >
            <span>🎞️</span>
            {isMenuOpen && <span className="text-sm">Movies</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
