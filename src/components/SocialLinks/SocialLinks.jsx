import React from 'react'
import './SocialLinks.css'
import facebook from '../Pages/assets/facebook-2.svg'
import twitter from '../Pages/assets/twiter-2.svg'
import linkedIn from '../Pages/assets/linkedin-2.svg'
import instagram from '../Pages/assets/instagram.svg'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
    
const SocialData = [
    {img: facebook ,url:''},
    {img: twitter,url:''},
    {img: linkedIn, url:''},
    {img:instagram,url:''},
];
  return (
    <div className='social_links'>
    {SocialData.map((link, index)=>(
        <div className='social_link'>
            <Link to={'link.url'}><img src={link.img} alt=""/></Link>
        </div>
    ))}


</div>

    
    
  )
}

export default SocialLinks