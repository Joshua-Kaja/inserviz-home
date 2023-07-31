import React from 'react'
import './SocialLinks.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'



const SocialLinks = () => {

  return (
         <div className='social_links'>        
            <div className='social_link'>
              <Link to='/'><FaFacebookF style={{color:'#1e90ff'}}/></Link>
              <Link to='/'><FaTwitter style={{color:'#1e90ff', paddingLeft:'20px'}}/></Link>
              <Link to='/'><FaLinkedinIn style={{color:'#1e70ff', paddingLeft:'20px'}}/></Link>
              <Link to='/'><BsInstagram style={{color:'#1e90ff', paddingLeft:'20px'}}/></Link>
            </div>
        </div>
    
  )
}

export default SocialLinks

