import React from 'react'


import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

import './StyleSidebarHeader.css'
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const {currentUser} = useSelector(state => state.auth)
    
    return (
        <div className='Main_sidebar'>
            <div className='sidebar_header'>
                <div className='sidebar_info'>
                    <h2>Learn React With Desouky</h2>
                    <h4>
                        <FiberManualRecordIcon />
                        {currentUser?.displayName}
                    </h4>
                </div>
                <div className='create_icon'>
                 <CreateIcon />
                </div>
            </div>
        </div>
    )
}
