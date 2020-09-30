import React from 'react'
import './StyleChatContainer.css'
import {useParams} from 'react-router-dom'
import ChatHeader from '../ChatHeader/ChatHeader'

export default function ChatContainer() {
    const {roomId} = useParams()
    return (
        <div className='chat'>
            <ChatHeader />

        </div>
    )
}
