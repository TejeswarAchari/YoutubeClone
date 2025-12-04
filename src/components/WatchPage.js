import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import RecommendedVideos from "./RecommendedVideos";
// import { clearMessages } from "../utils/chatSlice"; // only if you added this

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    // dispatch(clearMessages()); // optional: reset chat per video
  }, [videoId, dispatch]);

  return (
    <div className="flex w-full mt-2 px-5 gap-4">
      {/* LEFT: video + comments */}
      <div className="flex-1">
        {/* Video player */}
        <div className="w-full">
          <iframe
            className="w-full aspect-video rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Comments directly under video */}
        <div className="mt-6 max-w-[1100px]">
          <CommentsContainer />
        </div>
      </div>

      {/* RIGHT: live chat + recommended videos */}
      <div className="w-[360px] flex flex-col gap-4">
        <LiveChat />
        <RecommendedVideos videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
