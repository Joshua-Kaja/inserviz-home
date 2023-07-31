import React from 'react'
import './SocialLinks.css'
import facebook from '../Pages/assets/facebook-2.svg'
import twitter from '../Pages/assets/twiter-2.svg'
import linkedIn from '../Pages/assets/linkedin-2.svg'
import instagram from '../Pages/assets/instagram.svg'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
    
const SocialData = [
    {img: facebook ,url:'', id:1},
    {img: twitter,url:'', id:2},
    {img: linkedIn, url:'', id:3},
    {img:instagram,url:'', id:4},
];
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