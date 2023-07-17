import React from 'react'
import './BlogSite.css'
import imgBlog2 from '../Pages/assets/blog-img-st-02.png'
import { BlogSiteData } from '../Data/BlogSite'

const BlogSite = () => {
  return (
    <div className='blogSite'>
        <div className='blogSite_container'>
            <div className='blogSite_header'>
                <span>Breaking Barriers to Employment</span>
                <p>Inserviz Paves the Way for Ghanaian Youth to Monetize Their Skills in the Gig Economy.</p>
                <img src={imgBlog2} alt="" />
            </div>
            <div className='blogSite_categories'>
                {BlogSiteData.map((blogSite, i) => (
                    <div className='blogSite_category' key={i}>
                        <h3>{blogSite.title}</h3>
                        <span>{blogSite.content}</span>

                    </div>
                ))}
                

            </div>
        </div>

    </div>
  )
}

export default BlogSite