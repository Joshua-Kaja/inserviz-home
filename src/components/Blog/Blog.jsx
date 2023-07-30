import React from 'react'
import './Blog.css'
import blog from '../../assets/blog-img-02.png'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='blog'>
        <div className='blog_container'>
            <div className='blog_header_img'>
                <Link to='/blogSite'><img style={{borderRadius:'5px'}} src={blog} alt="" /></Link>
            </div>
            <div className='blog_header'>
                <Link to='/blogSite' style={{textDecoration:'none'}}>
                    <div>
                    <h3>Creating Opportunities for the youth in Gig Economy</h3>
                    </div>
                </Link>
                <div className='blog_team'>
                    <Link to='/blogSite' style={{textDecoration:'none'}}><span>By Inserviz team</span></Link>
                    <Link to='/blogSite' style={{textDecoration:'none'}}><div className='blog_empty'></div></Link>
                    <Link to='/blogSite' style={{textDecoration:'none'}}><span>Jul 16, 2023</span></Link>
                </div>


            </div>

        </div>

    </div>
  )
}

export default Blog