import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../../Firebase/firebaseConfig'
import './StyleChatInput.css'
import firebase from '../../../Firebase/firebaseConfig'

export default function ChatInput({channelName , channelId}) {
    const [input,setInput] =useState('')
    const {currentUser} = useSelector(state => state.auth)

    const handleSubmit =(e)=>{
        e.preventDefault()

        if( channelId ){
            db.collection('Rooms').doc(channelId).collection('messages').add({
                message: input,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        }

        setInput('')
    }

    return (
        <div className='chat_input'>
            <form>
                <input 
                placeholder={`Message #${channelName}`} 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                />
                <button type='submit' onClick={(e)=>handleSubmit(e)}>HiddenButton</button>
            </form>
        </div>
    )
}
