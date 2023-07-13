import React from 'react'
import SideBar from '../SideBarDashBoard/SideBar'
import './Dashboard.css'
import Footer from '../Footer/Footer'
import ProfileJobs from '../ProfileJobs/ProfileJobs'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard_container'>
        <SideBar/>
        <ProfileJobs style={{backgroundColor:'none'}}/>
      </div>  
        <Footer/>
    </div>
    
  )
}

export default Dashboard