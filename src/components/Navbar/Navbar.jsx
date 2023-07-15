import React, {useState} from 'react'
import './Navbar.css'
import navImg from '../Pages/assets/inserviz.png'
import SocialLinks from '../SocialLinks/SocialLinks'
import notifications from '../Pages/assets/bell.svg'
import personIcon from '../Pages/assets/signIn.svg'
import post from '../Pages/assets/post.svg'
import { Link } from 'react-router-dom'

const Navbar = ({openSignInPopUp, openSignUpPopUp}) => {
    const [selectPost, setSelectedPost] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    

    function handlePostClick(e) {
        e.preventDefault();
        setSelectedPost(selectPost);
    };

  return (
    <div className='navbar'>
        <div className='nav_container'>
            <div className='img_container'>
              <Link to='/'><img style={{width:'9rem', height:'2rem'}} className="logo_img" src={navImg} alt="" /></Link>
            
              {/* <img style={{width:'9rem', height:'2rem'}} className="logo_img" src={navImg} alt="" /> */}
            </div>
            {/* <div className='navbar_body'> */}
              <div className='top_down_navbar'>
              <div className='nav_top'>
                   <div className='nav_top_details'>
                      <span>Welcome Our Job Portal!</span>
                      <Link style={{textDecoration:0, color:'#00a7ac'}} to='/'><span style={{paddingLeft:'15px'}}>Save Jobs</span></Link>
                      {/* <span style={{paddingLeft:'15px'}}>Save Jobs</span> */}
                   </div>
                    <div className='social_platform'>
                        <SocialLinks/>
                    </div>
                {/* </div> */}
            </div>
            {/* <div className='navbar_down'> */}
                <div className='navbar_down_container'>
                    <div className='Links'>
                        <Link style={{textDecoration:'0', color:'#000'}} to='/'><span>Home</span></Link>
                        <Link style={{textDecoration:'0', color:'#000'}} to='/aboutUs'><span style={{paddingLeft:'3rem'}}>About Us</span></Link>
                        <Link style={{textDecoration:'0', color:'#000'}} to='/faqs'><span style={{paddingLeft:'3rem'}}>FAQS</span></Link>
                        <Link style={{textDecoration:'0', color:'black'}} to="/blog"><span style={{paddingLeft:'3rem'}}>Blog</span></Link>
                        <button className='btn_inprov' type="button" onClick={ openSignUpPopUp }>Become an Inprov</button>
                    </div>
                    <div className='navbar_down_right'>
                        <Link to='/notifications'><img src={notifications} alt="" /></Link>
                        <div className='signIn' onClick={ openSignInPopUp }>
                            <img src={personIcon} alt="" />
                            <button type='button' >Sign In</button>
                        </div>
                        <div className='postJob_btn'>
                            <button type='button' onClick={handlePostClick}>Post Job</button>
                            <img src={post} alt="" />
                        </div>
                    </div>
                </div>
              </div>
            {/* </div> */}
        </div>

    </div>
  )
}

export default Navbar