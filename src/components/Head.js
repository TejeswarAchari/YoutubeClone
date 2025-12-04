
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useNavigate,Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(getSearchSuggestions, 200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + encodeURIComponent(searchQuery));
      const json = await res.json();
      setSuggestions(json[1] || []); // YouTube suggest format: [query, [s1, s2, ...]]
    } catch (e) {
      console.error(e);
    }
  };

  const submitSearch = (q) => {
    const finalQ = (q ?? searchQuery).trim();
    if (!finalQ) return;
    navigate(`/results?q=${encodeURIComponent(finalQ)}`);
    setShowSuggestions(false);
  };

  const toggleMenuHandler = () => dispatch(toggleMenu());

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg items-center sticky top-0 z-50 bg-white">
      {/* Left: Menu + Logo */}
      <div className="flex items-center gap-3 col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-5 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/285px-Hamburger_icon.svg.png"
        />
       <Link to={"/"}> <img
          className="h-16"
          alt="logo"
          src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
        /></Link>
      </div>

      {/* Middle: Search */}
      <div className="col-span-10 flex justify-center">
        <div className="relative w-1/2">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submitSearch();
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 120)} // allow click on suggestion
            className="w-full border border-gray-400 p-2 pr-12 rounded-full outline-none"
            type="text"
            placeholder="Search"
          />
          <button
            className="absolute right-1 top-1/2 -translate-y-1/2 py-1 px-4 bg-gray-200 rounded-full border border-gray-400"
            aria-label="Search"
            onMouseDown={() => submitSearch()}
          >
            🔍
          </button>

          {/* Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl text-left overflow-hidden">
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  onMouseDown={() => submitSearch(s)} // search immediately
                >
                  <span>🔎</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Right: User */}
      <div className="col-span-1 flex justify-end">
        <img
          className="h-10"
          alt="user-logo"
          src="https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
