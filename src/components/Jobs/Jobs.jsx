import React from 'react'
import './Jobs.css'
import AppliedJob from '../AppliedJobsTable/AppliedJob'

function Jobs() {
  return (
    <div className='jobs'>
        <div className='jobs_container'>
            <div className='jobs_header'>
                <span>Applied Jobs</span>
            </div>
            <AppliedJob/>

        </div>
      
    </div>
  )
}

export default Jobs
