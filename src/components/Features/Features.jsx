import React from 'react'
import './Features.css'
import { Link } from 'react-router-dom'
import { FeaturesData } from '../Data/Features'
import Explore from '../ExploreMore/Explore'

const Features = () => {
  return (
    // <div className='features'>
        <div className='features_container'>
            <div className='features_header'>
               <div className='job_header_details'>
                  <p>Trending Jobs <span style={{color:'#00a7ac'}}>Category</span></p>
                  <span>To choose your trending job dream & to make future bright.</span>
                </div>
                <div className='job_link'>
                  <Explore to='path-1'/>
                </div>
            </div>
            <div className='features_categories'>
                {FeaturesData.map((feature, index) => (
                    <div className='features_category' key={feature.id}>
                        <div className='features_img'>
                            <img src={feature.img} alt="" />
                            <div className='num'>
                                <div className='line_img'></div>
                                <span style={{color:'#00a7ac'}}>{feature.number}</span>
                            </div>
                        </div>
                        <div className='features_details'>
                           <Link to="/"><span className='features_text' style={{fontSize:'1.3rem'}}>{feature.title}</span></Link>
                           <div className='job_available'>
                              <span style={{fontSize:'1.1rem'}}>{feature.detail}:</span>
                              <span style={{color:'#00a7ac', fontWeight:'bold'}}>{feature.jobNumber}</span>
                           </div>
                        </div>


                    </div>
                ))}

            </div>

        </div>

    // </div>
  )
}

export default Features