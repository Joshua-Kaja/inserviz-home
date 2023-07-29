import React, { useState } from 'react'
import './Review.css'
import { Link } from 'react-router-dom'
import { ReviewData } from '../../Data/Reviews'
import circle from '../../assets/circle (1).svg'
import arrowRight from '../../assets/arrow-right (1).svg'
import arrowLeft from '../../assets/arrow-left.svg'

const Reviews = () => {
  const [reviewSelect, setReviewSelect] = useState(false);

  const revLength = ReviewData.length;
  return (
    <div className='reviews_container'>
        <div className='reviews_header'>
            <div className='reviews_header_text'>
                <p>Trusted User <span style={{color:'#00a7ac'}}>Reviews</span></p>
                <span>To choose your trending job dream & to make future bright.</span>
            </div>
            <div className='reviews_arrow'>
              <div className='arrowIcon'>
                <div className='arrow_left'> 
                  <img className="arrow_img_left"
                  onClick={()=> {
                  reviewSelect === 0 ? setReviewSelect(revLength - 1) : setReviewSelect((prev)=> prev - 1);
                  }} 
                  src={arrowLeft} alt="" />
                  <img className='circle_img_left' src={circle} alt="" />
                </div>
                <div className='arrow_right'> 
                  <img className='arrow_img_right'
                  onClick={()=> {
                  reviewSelect === revLength - 1 ? setReviewSelect(0) : setReviewSelect((prev) => prev + 1);
                 }}  
                 src={arrowRight} alt="" />
                 <img className='circle_img_right' src={circle} alt="" />
                </div>
              </div>
            {/* <ArrowIcon/> */}
          </div>
        </div>
        <div className='reviews_categories'>
            {ReviewData.map((review, index)=> (
                <div className='review_data'>
                    <div className='review_img'>
                      <img src={review.img} alt="" />
                     <div className='comma_id'>
                       <img className='comma_icon' src={review.icon} alt="" />
                     </div>
                    </div>
                    <div className='review_header_text'>
                        <div className='reviews_flex'>
                          <div className='review_name'>
                            <span className='name'>{review.fullname}</span>
                            <span className='role'>{review.role}</span>
                          </div>
                           <div className='review_rate'>
                               <img src={review.reviewFill} alt="" />
                               <img src={review.reviewFill} alt="" />
                               <img src={review.reviewFill} alt="" />
                               <img src={review.reviewFill} alt="" />
                               <img src={review.reviewhalf} alt="" />
                            </div>
                        </div>
                        <div className='review_text'>
                           <span>{review.text}</span>
                        </div>
                    </div>
                    

                </div>
            ))}

        </div>

    </div>
    
  )
}

export default Reviews