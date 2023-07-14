import React from 'react'
import SideBar from '../SideBarDashBoard/SideBar'
import './Dashboard.css'
import Footer from '../Footer/Footer'
import ProfileJobs from '../ProfileJobs/ProfileJobs'
import MyProfile from '../MyProfile/MyProfile'
import AppliedJob from '../AppliedJobsTable/AppliedJob'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard_container'>
        <SideBar/>
          <div className='end_dashboard_container'>
            <ProfileJobs/>
            <AppliedJob/>
          </div>
      </div>  
    <Footer/>
    </div>
    
  )
}

export default Dashboard