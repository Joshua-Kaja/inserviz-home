import React, {useState} from 'react'
import './Location.css'
import { LocationData } from '../Data/Location'
import { Link } from 'react-router-dom'
import circle from '../Pages/assets/circle (1).svg'
import arrowRight from '../Pages/assets/arrow-right (1).svg'
import arrowLeft from '../Pages/assets/arrow-left.svg'

const Location = () => {
  const [images, setImages] = useState();
    
  return (
    <div className='location_container'>
    <div className='location_header_container'>
      <div className='location_header'>
        <p>Get Dream With <span style={{color:'#00a7ac'}}>Location</span></p>
        <span>To choose your trending job dream & to make future bright.</span>
      </div>
      {/* <div className='icon'> */}
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
        {/* <ArrowIcon/> */}
      </div>
    {/* </div> */}
    <div className='location_categories'>
        {LocationData.map((location, index)=> (
            <div className='location_category' key={location.id}>
                <div className='img'>
                  <img src={location.img} alt="" />
                </div>
                <div className='location_details'>
                    <div className='icon_details_loc'>
                       <div className='img_icon'>
                         <img className='img_location' src={location.smallicon} alt="" />
                        
                       </div>
                       <div className='country_location'>
                         <Link style={{textDecoration:'0'}} to='/country'><span className='country'>{location.country}</span></Link>
                       </div>
                    </div>
                    <div className='available'>
                        <span><span style={{fontSize:'1.1rem', color:'#595959'}}>Job Available: </span>{location.available}</span>
                    </div>

                </div>

            </div>
        ))}

    </div>
</div>
    
  )
}

export default Location