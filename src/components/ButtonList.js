import React from 'react'
import Button from './Button'
const ButtonList = () => {
const list = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Movies",
  "News",
  "Technology",
  "Comedy",
  "Cooking",
  "Travel",
  "Education",
  "Podcasts",
  "Trending"
];
  return (
    <div className='flex'>
      {list.map((item)=>(
        <Button name={item} key={item}/>
      ))}
    </div>
  )
}

export default ButtonList
