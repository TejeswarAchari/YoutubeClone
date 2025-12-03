import React from 'react'
import formatPublishedDate from '../utils/formatDate';
import formatViewCount from '../utils/formatViewCount';
const VideoCard = ({info}) => {
    
    const {snippet,statistics}= info;
    const {channelTitle,title,thumbnails,publishedAt}=snippet;
  

  return (
    <div className='p-2 m-3 w-72 shadow-lg rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-300'>
      <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url}/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
     <li>{formatViewCount(statistics.viewCount)} views • {formatPublishedDate(publishedAt)}</li>

      </ul>
    </div>
  )
}

export const AdVideoCard = (VideoCard)=>{
  return (
    <div>
  
    <div className='p-2 m-3 w-80 shadow-lg rounded-lg bg-yellow-100 border border-yellow-400 text-center'>
        <VideoCard />
      <h2 className='font-bold'>Ad Video</h2>
      <p>This is a sponsored video.</p>
    </div>
    </div>
  )
}



export default VideoCard;
