import React from 'react'
import './BookmarkJob.css'
import Bookmark from '../../components/Bookmark/Bookmark'
import Footer from '../../components/Footer/Footer'
import SideBar from '../../components/SideBarDashBoard/SideBar'

function BookmarkJob() {
  return (
    <div className='bookmarkJob'>
      <div className='bookmarkJob_container'>
        <SideBar/>
       <div className='bookmark_mark'>
        <Bookmark/>
       </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default BookmarkJob
