import React from 'react'
import ViewTranscript from '../components/ViewTranscript/ViewTranscript'
import Footer from '../components/Footer/Footer'
import SideBar from '../components/SideBarDashBoard/SideBar'
import './Transcript.css'

const Transcript = () => {
  return (
    <div className='transcript'>
        <div className='transcript-container'>
          <SideBar/>
        <ViewTranscript/>

        </div>

        <Footer/>
    </div>
     
  )
}

export default Transcript
