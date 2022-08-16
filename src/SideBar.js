import { Avatar } from '@mui/material'
import React from 'react'
import './SideBar.css'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'

function SideBar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) =>{
    <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
    </div>
  }

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src="https://images.unsplash.com/photo-1660318740550-5eeea3b03e0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <Avatar src={user.photoUrl} className='sidebar_avatar'>
          {user?.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2543</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views on Post</p>
          <p className="sidebar_statNumber">2421</p>
        </div>
        <div/>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("#react")}
        {recentItem("#programming")}
        {recentItem("#javascript")}
        {recentItem("#angular")}
        {recentItem("#vue.js")}
      </div>
    </div>
  )
}

export default SideBar