import React from 'react'
import StarsIcon from '@material-ui/icons/Stars';
import InfoIcon from '@material-ui/icons/Info';

import './StylesChatHeader.css'

export default function ChatHeader() {
    return (
        <div className='chat_header'>
            <div className='chat_headerLeft'>  
                <h4>
                    <strong># general</strong>
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
    )
}
