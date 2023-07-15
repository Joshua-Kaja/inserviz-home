import React from 'react'
import SideBar from '../../SideBarDashBoard/SideBar'
import MyProfile from '../../MyProfile/MyProfile'
import Footer from '../../Footer/Footer'
import './MyProfileDashBoard.css'
import SocialNetwork from '../../SocialNetwork/SocialNetwork'

function MyProfileDashBoard() {
  return (
    <div className='my_profile_dashboard'>
        <div className='profile_dash_container'>
          <SideBar/>
          <div className='input_container'>
            <MyProfile/>
            <SocialNetwork/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MyProfileDashBoard
