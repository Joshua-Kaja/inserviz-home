import React from 'react'
import './BookmarkJob.css'
import Bookmark from '../../Bookmark/Bookmark'
import Footer from '../../Footer/Footer'
import SideBar from '../../SideBarDashBoard/SideBar'

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
