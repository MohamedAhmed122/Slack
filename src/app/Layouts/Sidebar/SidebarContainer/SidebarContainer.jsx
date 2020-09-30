import React from 'react'
import SidebarHeader from '../SidebarHeader/SidebarHeader'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';


import './StyleSidebarContainer.css'


export default function SidebarContainer() {
    return (
        <div className='sidebar'>
            <SidebarHeader />
            <SidebarOptions Icon={InsertCommentIcon} title='Threads'/>
            <SidebarOptions Icon={InboxIcon} title='Mentions & reactions'/>
            <SidebarOptions Icon={DraftsIcon} title='Saved Items'/>
            <SidebarOptions Icon={BookmarkBorderIcon} title='Channel browsers '/>
            <SidebarOptions Icon={PeopleAltIcon} title='People & user groups'/>
            <SidebarOptions Icon={AppsIcon} title='Apps'/>
            <SidebarOptions Icon={FileCopyIcon} title='File browsers '/>
            <SidebarOptions Icon={ExpandLessIcon} title='Show Less'/>
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title='Channel'/>
            <hr />
            <SidebarOptions Icon={AddIcon} title='Add Channel'/>
        </div>
    )
}
