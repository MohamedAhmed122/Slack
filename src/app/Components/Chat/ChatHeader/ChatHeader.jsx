import React, { Fragment, useEffect, useState } from 'react'
import StarsIcon from '@material-ui/icons/Stars';
import InfoIcon from '@material-ui/icons/Info';
import { db } from '../../../Firebase/firebaseConfig'
import './StylesChatHeader.css'
import { useParams } from 'react-router-dom';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatInput from '../ChatInput/ChatInput';

export default function ChatHeader() {
    const {roomId} = useParams()
    const [roomMessages,setRoomMessages] = useState([])
    const [roomName, setRoomName] = useState(null)

    useEffect(()=>{
        db.collection('Rooms').doc(roomId).onSnapshot(snapshot=>(
            setRoomName(snapshot.data())
        ))
        db.collection('Rooms').doc(roomId).collection('messages').orderBy('timestamp' , 'asc').onSnapshot(snapshot=>(
            setRoomMessages(snapshot.docs.map(doc =>(
                doc.data()
            )))
        ))
    },[roomId])
    return (
        <Fragment>

            <div className='chat_header'>
                <div className='chat_headerLeft'>  
                    <h4>
                        <strong># {roomName?.name}</strong>
                        <StarsIcon />
                    </h4>
                </div>
                <div />
                <div className='chat_headerRight'>  
                    <p>
                        <InfoIcon/><strong>Details</strong>  
                    </p>
                </div>
            </div>
            <div className='chat_messages'>
                {
                    roomMessages.map(message =>(
                        <ChatMessages key={message.message} message={message}  />
                    ))
                }
            </div>
            <ChatInput  channelName={roomName?.name} channelId={roomId}/>
        </Fragment>
    )
}
