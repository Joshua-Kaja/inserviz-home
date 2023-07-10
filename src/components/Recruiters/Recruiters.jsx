import React from 'react'
import './Recruiters.css'
import ArrowIcon from '../ArrowIcon/ArrowIcon'
import { RecuitersData } from '../Data/Recruiters'
import { Link } from 'react-router-dom'
import arrowRight from '../Pages/assets/arrow-right (1).svg'
import circle from '../Pages/assets/circle (1).svg'

const Recruiters = () => {
  return (
    <div className='recruiters_container'>
        <div className='recruiters_header'>
            <div className='recruiters_header_text'>
              <h3>Our Top <span style={{color:'#00a7ac'}}>Recruiters</span></h3>
              <span>To choose your trending job dream & to make future bright.</span>
            </div>
            <div className='recruiters_arrow'>
                <ArrowIcon/>
            </div>
        </div>
        <div className='recuiters_categories'>
            {RecuitersData.map((recruiters, index)=> (
                <div className='recruiters_category' key={recruiters.id}>
                    <div className='recruiters_category_header'>
                        <div className='recruiters_img'>
                          <img src={recruiters.image} alt="" />
                        </div>
                        <div className='recuiters_details'>
                          <Link style={{textDecoration:'0'}} to='/company'><span>{recruiters.title}</span></Link>
                           <div className='icon_details'>
                              <img src={recruiters.icon} alt="" />
                              <span className='country_text'>{recruiters.country}</span>
                            </div>
                            <div className='people_details'>
                               <img src={recruiters.peopleIcon} alt="" />
                               <span>{recruiters.number}</span>
                            </div>
                        </div>
                    </div>
                    <div className='recuiters_link'>
                      <div className='link_details'>
                          <div className='arrow_right_recruiters'> 
                            <img className='arrow_right' src={arrowRight} alt="" />
                           <img className='circle_right' src={circle} alt="" />
                          </div>
                         
                        <Link style={{textDecoration:'0'}} to='/details'><span>{recruiters.link}</span></Link>
                      </div>
                      <div className='vacancies'>
                        <span>Vacancies:{recruiters.vacancies}</span>
                      </div>
                    </div>
                </div>
            ))}

        </div>

    </div>
    
  )
}

export default Recruiters