import React from 'react'
import './ExploreLeft.css'
import { Link } from 'react-router-dom'
import arrowRight from '../../assets/arrow-right (1).svg'
import circle from '../../assets/circle (1).svg'

const ExploreLeft = ({to}) => {
  return (
    <div className='explore_Left'>
        <div className='arrow_right'> 
          <img className='arrow_img_right' src={arrowRight} alt="" />
           <img className='circle_img_right' src={circle} alt="" />
        </div>
        <div className='explore_link'>
          <Link style={{textDecoration:'0', color:'#000'}} to={to}><span>Explore More</span></Link>
        </div>
    </div>
  )
}

export default ExploreLeft