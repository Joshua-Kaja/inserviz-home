import React from 'react'
import './JobFeature.css'
import { Link } from 'react-router-dom'
import { JobFeatureData } from '../../Data/JobFeature'
import arrow2 from '../../assets/arrow2.svg'
import Explore from '../ExploreMore/Explore'

const JobFeature = () => {
  return (
      <div className='jobfeature_container'>
          <div className='jobfeature_header'>
              <div className='features_text'>
                <p>Latest <span style={{color:'#00a7ac'}}>Featured</span> Jobs</p>
                <span>To choose your trending job dream & to make future bright.</span>
              </div>
              <div className='explore_links'>
                <Explore to='/path-2'/>
              </div>
          </div>
         <div className='latestJob_categories'>
           {JobFeatureData.map((JobFeature, index)=> (
            <div className='latestJob_category' key={JobFeature.id}>
          {/* <div className='empty_job'></div> */}
               <div className='latest_header'>
                 <img style={{borderRadius:'50%', height:'3rem',}} src={JobFeature.img} alt="" />
                <div className='header'>
                <div className='header_links'>
                   <Link style={{textDecoration:'0', color:'#000'}} to='/description'><span className='role'style={{fontSize:'1.2rem'}}>{JobFeature.description}</span></Link>
                   <Link style={{textDecoration:'0', color:'#000', }} to='/name'><span className='time'style={{fontSize:'14px'}}>{JobFeature.name}</span></Link>
                   <div className='border'></div>
                </div>
                
              {/* <div className="img_container">
                <img  src={JobFeature.icon} alt="" />
              </div> */}
              </div>
            </div>
          <div className='latest_body'>
            <div className='middle_feature'>
              <div>
                <img style={{height:'12px', width:'12px'}} src={arrow2} alt="" />
                <span>Salary: {JobFeature.Salary}</span>
              </div>
              <div>
                <img style={{height:'12px', width:'12px'}}src={arrow2} alt="" />
                <span>Job Type: {JobFeature.JobType}</span>
              </div>
              <div>
                <img style={{height:'12px', width:'12px'}}src={arrow2} alt="" />
                <span>Deadline: {JobFeature.Deadline}</span>
              </div>
            </div>
          </div>
          <div className='apply_btn'>
            <div className='img_icons'>
              <Link to='/apply'><img className='circle_img' src={JobFeature.circleIcon} alt="" /></Link>
              <Link to='/apply'><img className='second_img' src={JobFeature.arrow} alt="" /></Link>
            </div>
            <div className='apply_link'>
              <Link style={{textDecoration:'0', fontWeight:'450', color:'#00a7ac'}} to='/apply'><span>{JobFeature.text}</span></Link>
            </div>
          </div>
        
        </div>
     ))}

     </div>

    </div>
  )
}

export default JobFeature