import React from 'react'
import './ArrowIcon.css'
import arrowRight from '../Pages/assets/arrow-right (1).svg'
import arrowLeft from '../Pages/assets/arrow-left.svg'
import circle from '../Pages/assets/circle (1).svg'
const ArrowIcon = () => {
  return (
    <div className='arrowIcon'>
        <div className='arrow_left'> 
          <img className="arrow_img_left" src={arrowLeft} alt="" />
          <img className='circle_img_left' src={circle} alt="" />
        </div>
      <div className='arrow_right'> 
        <img className='arrow_img_right' src={arrowRight} alt="" />
        <img className='circle_img_right' src={circle} alt="" />
      </div>

    </div>
  )
}

export default ArrowIcon