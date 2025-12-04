import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import formatViewCount from "../utils/formatViewCount";
import formatPublishedDate from "../utils/formatDate";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const SearchResultsPage = () => {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, [dispatch]);

  useEffect(() => {
    let ignore = false;

    const fetchResults = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          YOUTUBE_SEARCH_RESULTS_API + encodeURIComponent(query)
        );
        const data = await res.json();
        if (ignore) return;
        setItems(data.items || []);
      } catch (e) {
        console.error("Error fetching search results:", e);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    if (query.trim()) {
      fetchResults();
    } else {
      setItems([]);
      setLoading(false);
    }

    return () => {
      ignore = true;
    };
  }, [query]);

  if (loading) return <Shimmer />;

  if (!query.trim()) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] px-4 pt-4">
        <div className="max-w-5xl mx-auto text-gray-500 text-sm">
          Type something to search.
        </div>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="min-h-screen bg-[#f9f9f9] px-4 pt-4">
        <div className="max-w-5xl mx-auto text-gray-500 text-sm">
          No results for “{query}”.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-4 pt-4">
      <div className="max-w-5xl mx-auto space-y-4">
        {/* Small heading like YouTube’s “About X results” (optional) */}
        <p className="text-md text-gray-500">
          Search results for <span className="text-md font-bold">"{query}"</span>
        </p>

        {items.map((item) => {
          const vid = item.id?.videoId;
          if (!vid) return null; // behave like YT: ignore non-video results

          const sn = item.snippet || {};
          const thumb =
            sn?.thumbnails?.medium?.url || sn?.thumbnails?.default?.url;
          const channel = sn?.channelTitle;
          const title = sn?.title;
          const publishedAt = sn?.publishedAt;
          const views = item.statistics?.viewCount;

          return (
            <Link
              key={vid}
              to={`/watch?v=${vid}`}
              className="flex gap-3 md:gap-4 pb-4 border-b border-gray-200 
                         -mx-3 px-3 md:-mx-4 md:px-4
                         hover:bg-gray-100/70 rounded-2xl transition-colors duration-150"
            >
              {/* Thumbnail */}
              <div className="w-40 md:w-64 flex-shrink-0">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
                  {thumb && (
                    <img
                      src={thumb}
                      alt={title}
                      className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-150"
                    />
                  )}
                </div>
              </div>

              {/* Text area */}
              <div className="flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-[15px] md:text-[16px] font-medium leading-snug line-clamp-2">
                  {title}
                </h3>

                {/* Meta row (views • date) */}
                <div className="flex flex-wrap items-center gap-1.5 text-[13px] text-gray-600 mt-1">
                  {views && (
                    <>
                      <span>{formatViewCount(views)} views</span>
                      <span className="text-[10px]">•</span>
                    </>
                  )}
                  {publishedAt && (
                    <span>{formatPublishedDate(publishedAt)}</span>
                  )}
                </div>

                {/* Channel name */}
                <p className="text-[13px] text-gray-600 mt-1">{channel}</p>

                {/* Description */}
                <p className="text-[13px] md:text-sm text-gray-600 mt-2 line-clamp-2 md:line-clamp-3">
                  {sn?.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultsPage;
