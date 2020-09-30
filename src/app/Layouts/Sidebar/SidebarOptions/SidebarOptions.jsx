import React from 'react'
import { useHistory } from 'react-router-dom'
import { db } from '../../../Firebase/firebaseConfig'

import './StyleSidebarOptions.css'

export default function SidebarOptions({Icon ,title ,id , addChannelOption }) {

    const history = useHistory()

    const addChannel =()=>{
        const channelName =prompt('Please Enter The Channel Name')
        if(channelName){
            db.collection("Rooms").add({
                name: channelName
            })
        }
    }
    const selectChannel = () =>{
        if(id){
            history.push(`/room/${id}`)
        }else return;
    }
    return (
        <div className='sidebar_options' onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon  className='options_icon' />}
            { Icon ? 
                    (<h4 className='title'>{title} </h4>)
                : 
                    (<h4 > <span className='hash'>#</span> {title}</h4>)
            }
        </div>
    )
}
