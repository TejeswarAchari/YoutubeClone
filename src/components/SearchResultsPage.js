import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import formatViewCount from "../utils/formatViewCount";
import formatPublishedDate from "../utils/formatDate";

const SearchResultsPage = () => {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const fetchResults = async () => {
      try {
        setLoading(true);
        const res = await fetch(YOUTUBE_SEARCH_RESULTS_API + encodeURIComponent(query));
        const data = await res.json();
        if (ignore) return;
        setItems(data.items || []);
      } catch (e) {
        console.error("Error fetching search results:", e);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    if (query.trim()) fetchResults();
    else {
      setItems([]);
      setLoading(false);
    }

    return () => {
      ignore = true;
    };
  }, [query]);

  if (loading) return <Shimmer />;

  if (!query.trim()) {
    return <p className="p-4 text-gray-500">Type something to search.</p>;
  }

  if (!items.length) {
    return <p className="p-4 text-gray-500">No results for “{query}”.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      {items.map((item) => {
        const vid = item.id?.videoId;
        const sn = item.snippet || {};
        const thumb = sn?.thumbnails?.medium?.url || sn?.thumbnails?.default?.url;
        const channel = sn?.channelTitle;
        const title = sn?.title;
        const publishedAt = sn?.publishedAt;
        const views = item.statistics?.viewCount; // only if your API includes part=statistics

        return (
          <Link
            key={vid || title + publishedAt}
            to={vid ? `/watch?v=${vid}` : "#"}
            className="flex gap-4 border-b pb-4 hover:bg-gray-50 rounded-lg"
          >
            <div className="min-w-60 w-60">
              <img
                src={thumb}
                alt={title}
                className="w-60 h-36 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold line-clamp-2">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{channel}</p>
              <p className="text-sm text-gray-500 mt-1">
                {views ? `${formatViewCount(views)} views • ` : ""}
                {formatPublishedDate(publishedAt)}
              </p>
              <p className="text-sm text-gray-500 line-clamp-2 mt-2">
                {sn?.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResultsPage;
