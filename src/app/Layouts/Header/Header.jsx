import { Avatar } from '@material-ui/core';
import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import './StyleHeader.css';
import { useSelector } from 'react-redux';

export default function Header() {
    const {currentUser} = useSelector(state => state.auth)
    return (
        <div className='header'>
            <div className='header-left'>
                <Avatar src={currentUser?.photoURL}/>
                <AccessTimeIcon fontSize='large'/>
            </div>
            <div className='header-middle'>
                <SearchIcon />
                <input type='text' placeholder='Search for Rooms'/>
            </div>
            <div className='header-right'>
                <HelpOutlineIcon fontSize='large'/>
            </div>
        </div>
    )
}
