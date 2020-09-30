import React from 'react'


import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

import './StyleSidebarHeader.css'

export default function Sidebar() {
    return (
        <div className='Main_sidebar'>
            <div className='sidebar_header'>
                <div className='sidebar_info'>
                    <h2>Learn React With Desouky</h2>
                    <h4>
                        <FiberManualRecordIcon />
                        Mohamed Youssef
                    </h4>
                </div>
                <div className='create_icon'>

                 <CreateIcon />
                </div>
            </div>
        </div>
    )
}
