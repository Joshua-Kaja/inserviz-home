import React from 'react'
import './Explore.css'
import { Link } from 'react-router-dom'
import arrowRight from '../../assets/arrow-right (1).svg'
import circle from '../../assets/circle (1).svg'


const Explore = () => {
  return (
    <div className='explore'>
        <Link style={{textDecoration:'0', color:'#000'}} to='/'><span style={{fontSize:'1.1rem'}}>Explore More</span></Link>
        <div className='arrow_right'> 
          <img className='arrow_img_right' src={arrowRight} alt="" />
           <img className='circle_img_right' src={circle} alt="" />
        </div>
    </div>
  )
}

export default Explore