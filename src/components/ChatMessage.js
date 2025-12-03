import React from 'react'

const ChatMessage = ({name,message}) => {

  return (
    <div className='flex gap-2 mb-2'>
       
      <img
          className="h-5 mt-1 rounded-full"
          alt="user-logo"
          src="https://www.pngfind.com/pngs/m/93-938050_png-file-transparent-white-user-icon-png-download.png"
        />
        <span>
            <b>{name}  </b>  
        </span>
        <span>{message}</span>

    </div>
  )
}

export default ChatMessage
