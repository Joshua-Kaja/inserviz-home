import React, {useState} from 'react'
import './Navbar.css'
import navImg from '../../assets/inserviz.png'
import SocialLinks from '../SocialLinks/SocialLinks'
import notifications from '../../assets/bell.svg'
import personIcon from '../../assets/signIn.svg'
import post from '../../assets/post.svg'
import { Link } from 'react-router-dom'

const Navbar = ({openSignInPopUp, openSignUpPopUp}) => {
    const [selectPost, setSelectedPost] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    function handlePostClick(e) {
        e.preventDefault();
        setSelectedPost(selectPost);
    };

    const  handleNotification = () => {
        setIsOpen(true);
    };

  return (
    <div className='navbar'>
        <div className='nav_container'>
            <div className='img_container'>
              <Link to='/'><img style={{width:'9rem', height:'2rem'}} className="logo_img" src={navImg} alt="" /></Link>
            </div>
           
              <div className='top_down_navbar'>
              <div className='nav_top'>
                   <div className='nav_top_details'>
                      <span>Welcome to Inserviz Inc!</span>
                   </div>
                    <div className='social_platform'>
                        <SocialLinks/>
                    </div>
            </div>
            {/* <div className='navbar_down'> */}
                <div className='navbar_down_container'>
                    <div className='Links'>
                        <Link style={{textDecoration:'0', color:'#000'}} to='/'><span>Home</span></Link>
                        <Link style={{textDecoration:'0', color:'#000'}} to='/aboutUs'><span style={{paddingLeft:'3rem'}}>About Us</span></Link>
                        <Link style={{textDecoration:'0', color:'#000'}} to='/faqs'><span style={{paddingLeft:'3rem'}}>FAQS</span></Link>
                        <Link style={{textDecoration:'0', color:'black'}} to="/blogPage"><span style={{paddingLeft:'3rem'}}>Blog</span></Link>
                        <button className='btn_inprov' type="button" onClick={ openSignUpPopUp }>Become an Inprov</button>
                    </div>
                    <div className='navbar_down_right'>
                        <img src={notifications} alt="" />
                        <div className='signIn' onClick={ openSignInPopUp }>
                            <img src={personIcon} alt="" />
                            <button type='button' >Sign In</button>
                        </div>
                        <Link className='postJob_btn' to='/post' style={{textDecoration:'none'}}>
                            <button type='button'>Post Job</button>
                            <span onClick={handleNotification}><img src={post}  alt="" /></span>
                            
                            {isOpen && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo optio modi ab mollitia, natus minima error molestiae rem fuga pariatur sequi impedit explicabo voluptatem maxime nihil provident facere quis excepturi. Illum quidem atque dolorem repellat doloremque quam cum cumque ullam iure! Quam tempora molestiae rem ipsum deserunt nostrum sit</p>}
                        </Link>
                    </div>
                </div>
              </div>
            {/* </div> */}
        </div>

    </div>
  )
}

export default Navbar