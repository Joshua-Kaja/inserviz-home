import React from 'react'
import SideBar from '../../components/SideBarDashBoard/SideBar'
// import './Dashboard.css'
import Footer from '../../components/Footer/Footer'
import './Wrapper.css'
import ProfileJobs from '../../components/ProfileJobs/ProfileJobs'
import MyProfile from '../../components/MyProfile/MyProfile'
import AppliedJob from '../../components/AppliedJobsTable/AppliedJob'

const Wrapper = ({children}) => {
  return (
    <div className='dashboard'>
      <div className='dashboard_container'>
        <SideBar/>
          <div className='end_dashboard_container'>
           {children}
          </div>
      </div>  
    <Footer/>
    </div>
    
  )
}

export default Wrapper