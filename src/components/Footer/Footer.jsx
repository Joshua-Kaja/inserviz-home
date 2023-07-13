import React from 'react'
import './Footer.css'
import apple from '../Pages/assets/apple-app.svg'
import google from '../Pages/assets/google-play.svg'
import { Link } from 'react-router-dom'
import footerIcon from '../Pages/assets/footer-support-icon.svg'
import inserviz from '../Pages/assets/inserviz.png'
import SocialLinks from '../SocialLinks/SocialLinks'
import facebook from '../Pages/assets/facebook-2.svg'
import twitter from '../Pages/assets/twiter-2.svg'
import linkedin from '../Pages/assets/linkedin-2.svg'
import instagram from '../Pages/assets/instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer_container'>
        <div className='footer_categories'>
           <div className='about_container'>
               <h4>About Company</h4>
               <div className='link'>
                  <Link style={{textDecoration:'0'}} to='/contact'><span className='link_text'>Contact Us</span></Link>
                   <Link style={{textDecoration:'0'}} to='/terms' ><span className='link_text'>Terms And Conditions</span></Link>
                  <Link style={{textDecoration:'0'}} to='/privacy'><span className='link_text'>Privacy Policy</span></Link>
                  <Link style={{textDecoration:'0'}} to='/listings'><span className='link_text'>Candidate Listings</span></Link>
                </div>
            </div>
            <div className='for_candidates'>
               <h4>For Candidates</h4>
                <div className='link'>
                  <Link style={{textDecoration:'0'}} to='/resume'><span className='link_text'>Create Resume</span></Link>
                  <Link style={{textDecoration:'0'}} to='/browse'><span className='link_text'>Browse Categories</span></Link>
                  <Link style={{textDecoration:'0'}} to='/save'><span className='link_text'>Save Jobs List</span></Link>
                  <Link style={{textDecoration:'0'}} to='/candidate'><span className='link_text'>Candidate Dashboard</span></Link>
                </div>
            </div>
            <div className='for_Employer'>
              <h4>For Employer's</h4>
                <div className='link'>
                  <Link style={{textDecoration:'0'}} to='/post'><span className='link_text'>Post A Job</span></Link>
                  <Link style={{textDecoration:'0'}} to='/candidates'><span className='link_text'>Browse Candidates</span></Link>
                  <Link style={{textDecoration:'0'}} to='/jobs'><span className='link_text'>Jobs Packages</span></Link>
                  <Link style={{textDecoration:'0'}} to='/features'><span className='link_text'>Jobs Features</span></Link>
                </div>
            </div>
            <div className='app_download'>
               <h4>Download App</h4>
               <div className='app_down'>
                   <div>
                     <Link to='/apple'><img src={apple} alt="" /></Link>
                    </div>
                    <div>
                      <Link to='/google'><img src={google} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='footer_bottom_container'>
        <div className='fotter_bottom_left'>
            <div className='footer_contact'>
              {/* <div> */}
                <img src={footerIcon} alt="" />
              {/* </div> */}
              <div className='support_line'>
                <span style={{fontSize:'1.2rem'}}>Support Line:</span>
                <span style={{paddingLeft:'2rem', color:'#00a7ac', fontSize:'1.2rem', fontWeight:'500'}}>+233 599678566</span>
              </div>
            </div>
            <div className='empty' style={{marginBottom:'1.5rem'}}></div>
            <div className='copyright_footer'>
              <span>©Copyright 2023 <span style={{color:'#00a7ac', fontWeight:'500'}}>Inserviz Inc</span>{" "}</span>
              <span>Design By <span style={{color:'#00a7ac', fontWeight:'500'}}>Inserviz Team</span></span>
            </div>
          </div>
          <div className='footer_middle'>
            <div className='footer_logo'>
              <img src={inserviz} alt="" />
            </div>
          </div>

          <div className='footer_right'>
            <div className='footer_right_top'>
              <Link style={{textDecoration:'0'}}><span style={{color:'#fff'}}>Privacy Policy</span></Link>
              <Link style={{textDecoration:'0'}}><span style={{paddingLeft:'2rem', color:'#fff'}}>Terms Of Service</span></Link>
              <Link style={{textDecoration:'0'}}><span style={{paddingLeft:'2rem', color:'#fff'}}>Our Sitemap</span></Link>
            </div>
            <div className='empty_right' style={{marginBottom:'1.5rem'}}></div>
            <div className='footer_right_bottom'>
               <span>Follow Inserviz: </span>
                <div className='footer_links'>
                  {/* <SocialLinks/> */}
                  <Link to='/facebook'><img src={facebook} alt=""/></Link>
                  <Link to='/twitter'><img src={twitter} alt="" /></Link>
                  <Link to='/linkedIn'><img src={linkedin} alt="" /></Link>
                  <Link to='/instagram'><img src={instagram} alt="" /></Link>
                </div>
              
            </div>

          </div>

        </div>

    </div>
    </div>
  )
}

export default Footer