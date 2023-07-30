import React from 'react'
import SideBar from '../../components/SideBarDashBoard/SideBar'
import MyProfile from '../../components/MyProfile/MyProfile'
import Footer from '../../components/Footer/Footer'
import './MyProfileDashBoard.css'
import SocialNetwork from '../../components/SocialNetwork/SocialNetwork'

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
