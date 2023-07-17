import React from 'react'
import './Bookmark.css'
import { Link } from 'react-router-dom'
import { BookmarkData } from '../Data/Bookmark'



const Bookmark = () => {
 
  return (
   <section className='bookmark'>
    <div className='bookmark_container'>
        <div className='bookmark_jobs'>
          <span>Bookmark Jobs</span>
        </div>
        <div className='table'>
            <div className='bookmark_title'>
                <span>Job Title</span>
                <div className='title'>
                    <span>Deadline</span>
                    <span className='t1'>Company</span>
                    <span className='t1'>Action</span>
                </div>
            </div>
            <div className='bookmark_categories'>
                {BookmarkData.map((bookmark, i) => (
                    <div className='bookmark_category' key={i}>
                        <div className='bookmark_til'>
                            <div className='img_bookmark'>
                                <img src={bookmark.img} alt="" />
                            </div>
                            <div className='bookmark_header'>
                                <div className='bookmark_header_details'>
                                    <div className='role_bookmark'>
                                        <Link style={{textDecoration:'none'}} to='/role'><span>{bookmark.title}</span></Link>
                                    </div>
                                    <div className='bookmark_calender'>
                                        <img src={bookmark.icon} alt="" />
                                        <span>{bookmark.day}</span>
                                    </div>
                                </div>
                                <div className='bookmark_down_details'>
                                    <div className='img_loc_bookmark'>
                                        <img src={bookmark.iconloc} alt="" />
                                        <span>{bookmark.country}</span>
                                    </div>
                                    <div className='job_loc_icon'>
                                        <img src={bookmark.salaryIcon} alt="" />
                                        <span>{bookmark.text}</span>
                                    </div>


                                </div>


                            </div>
                         </div>
                        <div className='bookmark_okay'>
                            <div className='bookmark_deadline'>
                                <span>{bookmark.deadline}</span>
                            </div>
                            <div className='bookmark_company'>
                                <span>{bookmark.company}</span>
                            </div>
                            <div className='bookmark_action'>
                                <Link style={{textDecoration:'none'}} to={`path ${bookmark.id}` }><span>{bookmark.action}</span></Link>
                            </div>
                        </div>

                    </div>
                ))}


            </div>
       </div>
       


    </div>

   </section>
  )
}

export default Bookmark