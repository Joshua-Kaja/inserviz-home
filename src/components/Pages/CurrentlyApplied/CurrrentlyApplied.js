import React from 'react'
import SideBar from '../../SideBarDashBoard/SideBar'
import Footer from '../../Footer/Footer'
import './CurrentlyApplied.css'
import Jobs from '../../Jobs/Jobs'

function CurrrentlyApplied() {
  return (
    <div className='currently_applied'> 
        <div className='currently_applied_container'>
            <SideBar/>
           <div className='jobs'>
             <Jobs/>
           </div>
        </div>

        <Footer/>
      
    </div>
  )
}

export default CurrrentlyApplied
