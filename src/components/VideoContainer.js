import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  useEffect(() => {
    
    getVideos();
  }, [])
  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API); 
      const json = await data.json();
      setVideos(json.items);
    
    } catch (error) {
      console.error('Error fetching videos:', error);
    }

  }
  return videos.length === 0 ? <Shimmer/> : (
    <div>
   
    <div className='flex flex-wrap'>
      {videos.map((video) => 
     <Link key={video.id} to={"/watch/?v="+video.id}> <VideoCard  info={video}/></Link>
      )}
      </div>
     
    </div>
  )
}

export default VideoContainer
