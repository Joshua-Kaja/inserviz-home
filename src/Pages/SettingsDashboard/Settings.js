import React from 'react'
import SideBar from '../../components/SideBarDashBoard/SideBar'
import ProfileSettings from '../../components/ProfileSettings/ProfileSettings'
import Footer from '../../components/Footer/Footer'
import './Settings.css'

function Settings() {
  return (
    <div className='settings'>
        <div className='settings_container'>
            <SideBar/>
           <div className='container'>
             <ProfileSettings/>
           </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Settings
