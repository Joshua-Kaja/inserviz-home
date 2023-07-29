import React from 'react'
import './WorkingProcess.css'
import { WorkingData } from '../../Data/WorkingProcess'
import { Link } from 'react-router-dom'

const WorkingProcess = () => {
  return (
    <div className='workingProcess'>
        <div className='working_container'>
            <div className='working_header'>
                <p>JOBES <span style={{color:'#00a7ac'}}>Working Process</span></p>
                <span>To choose your trending job dream & to make future bright.</span>
            </div>
            <div className='working_categories'>
                
                {WorkingData.map((workingData, index)=> (

                    <div className='working_category'>
                        <div></div>
                        
                          <div className='img_header'>
                            <img src={workingData.icon} alt="" />
                            <div className='working_details'>
                              <Link  style={{textDecoration:'0'}} to={`path.id`}><span className='h_tag' style={{color:'#000'}}>{workingData.title}</span></Link>
                              <div className='text'>
                                <span className='working'>{workingData.detail}</span>
                                <span >{workingData.detail1}</span>
                              </div>
                            </div>
                          </div>
                         {/* <div className='working_text'>
                          <span className='working'>{workingData.detail}</span>
                          <span >{workingData.detail1}</span>
                         </div> */}
                        
                    </div>
                ))}

            </div>

        </div>

    </div>

  )
}

export default WorkingProcess