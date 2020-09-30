import React, { useEffect, useState } from 'react'

import SidebarOptions from '../SidebarOptions/SidebarOptions';
import SidebarHeader from '../SidebarHeader/SidebarHeader'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import options from './options'
import { db } from '../../../Firebase/firebaseConfig';

import './StyleSidebarContainer.css'


export default function SidebarContainer() {
    
    const [channels, setChannels] = useState([]);

    useEffect(()=>{
      db.collection('Rooms').onSnapshot(snapshot =>(
          setChannels(
              snapshot.docs.map((doc) =>({
                id : doc.id,
                name: doc.data().name
              }))
          )
      ))
    },[])

    return (
        <div className='sidebar'>
            <SidebarHeader />
            {
                options.map(option =>(
                    <SidebarOptions Icon={option.icon} key={option.title} title={option.title}/>
                ))
            }
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title='Channel'/>
            <hr />
            <SidebarOptions addChannelOption Icon={AddIcon} title='Add Channel'/>
            {
                channels.map(channel =>(
                    <SidebarOptions title={channel.name} id={channel.id} key={channel.id}/>
                ))
            }
        </div>
    )
}
