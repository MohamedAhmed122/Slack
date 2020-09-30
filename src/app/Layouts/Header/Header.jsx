import { Avatar } from '@material-ui/core';
import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import './StyleHeader.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <Avatar src='https://www.theplace2.ru/cache/archive/rihanna/img/rihanna_(1)1-gthumb-ghdata300.jpg'/>
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
