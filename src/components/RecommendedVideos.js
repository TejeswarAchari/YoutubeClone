import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import formatViewCount from "../utils/formatViewCount";
import formatPublishedDate from "../utils/formatDate";
import { YOUTUBE_RELATED_VIDEOS_API } from "../utils/constants";

const RecommendedVideos = ({ videoId }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchRecommended = async () => {
      try {
        setLoading(true);
        const res = await fetch(YOUTUBE_RELATED_VIDEOS_API);
        const data = await res.json();
        if (ignore) return;

        // items from this API: { id: "VIDEO_ID", snippet: {...}, statistics: {...} }
        let items = data.items || [];

        // optional: remove the currently playing video from list
        if (videoId) {
          items = items.filter((item) => item.id !== videoId);
        }

        setVideos(items);
      } catch (err) {
        console.error("Error fetching recommended videos:", err);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchRecommended();

    return () => {
      ignore = true;
    };
  }, [videoId]); // refetch when you open a different video

  if (loading) return <Shimmer />;

  if (!videos.length) return null;

  return (
    <div className="w-[360px] space-y-3 pl-4">
      {videos.map((item) => {
        const vid = item.id;              // ✅ direct id (string)
        const sn = item.snippet;
        if (!vid || !sn) return null;

        const thumb =
          sn.thumbnails?.medium?.url || sn.thumbnails?.default?.url;
        const title = sn.title;
        const channel = sn.channelTitle;
        const publishedAt = sn.publishedAt;
        const views = item.statistics?.viewCount;

        return (
          <Link
            key={vid}
            to={`/watch?v=${vid}`}
            className="flex gap-2 hover:bg-gray-100 rounded-lg p-1"
          >
            <img
              src={thumb}
              alt={title}
              className="w-40 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold line-clamp-2">{title}</p>
              <p className="text-xs text-gray-600 mt-1">{channel}</p>
              <p className="text-xs text-gray-500">
                {views ? `${formatViewCount(views)} • ` : ""}
                {formatPublishedDate(publishedAt)}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RecommendedVideos;
