import React from 'react'
import SideBar from '../../SideBarDashBoard/SideBar'
import ProfileSettings from '../../ProfileSettings/ProfileSettings'
import Footer from '../../Footer/Footer'
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
