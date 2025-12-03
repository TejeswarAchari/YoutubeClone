import React from 'react'
const commentsData = [
  {
    name: "Tejeswar Achari",
    text: "Bro this video gave full goosebumps 🔥🔥",
    replies: [
      {
        name: "Ananya Sharma",
        text: "Same here! That edit timing was just perfect 👏",
        replies: [],
      },
    ],
  },
  {
    name: "Vikram Raj",
    text: "Every time I watch your videos, I end up learning something new 💯",
    replies: [
      {
        name: "Priya Nair",
        text: "Exactly! So much clarity and effort in every detail 👌",
        replies: [],
      },
    ],
  },
  {
    name: "Sai Charan",
    text: "No words bro… pure class 👑",
    replies: [
      {
        name: "Keerthi Reddy",
        text: "True! This creator never misses 😍🔥",
        replies: [],
      },
    ],
  },
  {
    name: "Harika Goud",
    text: "Simple, clean, and just beautiful ❤️",
    replies: [],
  },
  {
    name: "Rahul Varma",
    text: "The background score hit different da 😎",
    replies: [
      {
        name: "Sneha Patil",
        text: "Yesss! That beat drop gave chills 🔥🔥",
        replies: [],
      },
    ],
  },
  {
    name: "Anil Kumar",
    text: "This deserves a million views bro 🙌",
    replies: [
      {
        name: "Divya Muppa",
        text: "People sleeping on this channel fr 😭",
        replies: [],
      },
    ],
  },
  {
    name: "Manasa Reddy",
    text: "Every frame looked like a movie scene 🎬",
    replies: [
      {
        name: "Rohit Rao",
        text: "Editing and lighting on another level 💥",
        replies: [],
      },
    ],
  },
  {
    name: "Kiran Sai",
    text: "So informative and still entertaining! Great balance 👏",
    replies: [
      {
        name: "Lavanya Dasari",
        text: "Exactly! Makes learning feel fun 😊",
        replies: [],
      },
    ],
  },
  {
    name: "Aarav Patel",
    text: "I’ve watched this at least 5 times already 😂",
    replies: [
      {
        name: "Pooja Iyer",
        text: "Haha same! Can’t get enough of this 😅🔥",
        replies: [],
      },
    ],
  },
  {
    name: "Raviteja K",
    text: "Subscribed instantly! Waiting for the next upload 💫",
    replies: [
      {
        name: "Meghana L",
        text: "Welcome to the fam! You’ll love the next one too 😄",
        replies: [],
      },
    ],
  },
  {
    name: "Sanjana B",
    text: "How can someone make it look this easy? Respect 🙏",
    replies: [],
  },
  {
    name: "Aditya Goud",
    text: "That moment at 2:40 was pure goosebumps 🔥🔥",
    replies: [
      {
        name: "Lakshmi Priya",
        text: "Yes!! I replayed that part like 10 times 😂",
        replies: [],
      },
    ],
  },
  {
    name: "Bhavana Reddy",
    text: "This kind of positivity is rare these days 💖",
    replies: [],
  },
  {
    name: "Deepak Chowdary",
    text: "Can’t believe this is free content! You deserve more recognition 💯",
    replies: [],
  },
  {
    name: "Srinivas Rao",
    text: "Mass + Class = This video 🔥",
    replies: [
      {
        name: "Haritha Devi",
        text: "Perfect combo anna 😎",
        replies: [],
      },
    ],
  },
];

 


const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
<div className='flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg'>
  <img alt='user-img' className='h-4 m-1' src='https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png'/>
  <div >
  <p>{name}</p>
  <p>{text}</p>
  </div>
</div>
    
  )
}

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className='ml-5'>
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className='border-l-2 border-gray-300 ml-5 pl-2'>  
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
}


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
