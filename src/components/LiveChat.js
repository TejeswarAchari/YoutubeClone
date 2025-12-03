import React, { use, useEffect,useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { useSelector } from 'react-redux';
import { generate, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
const dispatch = useDispatch();

const chatMessages = useSelector(store => store.chat.messages);
useEffect(() => {
 const i =  setInterval(() => {
    //Api Polling
    console.log("Polling Api...");
    dispatch(addMessage({name:generate(), message:makeRandomMessage(15)}))
  }, 1500);
  return () => clearInterval(i);
}, [])



  return (
    <div>
    <div className='border border-gray-400 p-2 w-96 h-[500px] ml-2 bg-gray-100 rounded-lg overflow-y-scroll  flex-col-reverse flex '>
<div>
 {chatMessages.map((c,i)=><ChatMessage key={i} name={c.name} message={c.message}/>)}
    </div>
  
    </div>

     <form className='flex' onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({name:"You", message:liveMessage}));
      setLiveMessage("");
     }}>
      <input value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} className='w-80 border border-gray-400 p-2 m-2 mt-2 rounded-lg' type="text" placeholder='Type your message...' />
      <button className='m-2  p-2 w-13 h-10 bg-green-500 text-white rounded-lg'>Send</button>
      
    </form>
    </div>
  )
}

export default LiveChat
