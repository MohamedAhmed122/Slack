import React from 'react'

import './StyleChatMessages.css'

export default function ChatMessages({message :{message, timestamp, displayName , photoURL}}) {
    return (
        <div className='messages'>
            <img src={photoURL} alt ="" />
            <div className='img_info'>
                <h3>{displayName} 
                    <span>
                        {new Date (timestamp?.toDate()).toUTCString()}
                    </span> 
                </h3>
                <p>{message}</p>
            </div>
        </div>
    )
}
