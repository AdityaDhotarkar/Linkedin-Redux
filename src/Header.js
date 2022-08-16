import React from 'react'
import './Header.css'
import { useDispatch, useSelector } from "react-redux";
import {logout, selectUser} from './features/userSlice';
import { auth } from "./fb";
import SearchIcon from '@mui/icons-material/Search';
import linklogo from './linkedin.png'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () =>{
    //dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
        <div className='header_left'>
            <img src={linklogo} alt="" />

            <div className="header_search">
                {/* Search Icon @material-ui/icons */}
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>
        </div>
        
        <div className='header_right'>
            <HeaderOptions Icon={HomeIcon} title='Home' />
            <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOptions Icon={ChatIcon} title='Messaging' />
            <HeaderOptions Icon={NotificationsIcon} title='Notification' />
            <HeaderOptions avatar={true} title='Me' onClick={logoutOfApp} />
        </div>
    </div>
  )
}

export default Header