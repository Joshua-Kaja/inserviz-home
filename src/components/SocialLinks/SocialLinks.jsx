import React from 'react'
import './SocialLinks.css'
import facebook from '../../assets/facebook-2.svg'
import twitter from '../../assets/twiter-2.svg'
import linkedIn from '../../assets/linkedin-2.svg'
import instagram from '../../assets/instagram.svg'
import { Link } from 'react-router-dom'


const SocialData = [
  {img: facebook ,url:'', id:1},
  {img: twitter,url:'', id:2},
  {img: linkedIn, url:'', id:3},
  {img:instagram,url:'', id:4},
];

const SocialLinks = () => {

  return (
         <div className='social_links'>
          {SocialData.map((link, index)=>(
              <div className='social_link' key={link.id}>
                  <Link to={`path ${link.url}`}><img src={link.img} alt=""/></Link>
              </div>
          ))}
        </div>
    
  )
}

export default SocialLinks

