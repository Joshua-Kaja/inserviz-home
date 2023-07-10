import React, { useState } from 'react'
import './SignUp.css'
import closeIcon from '../Pages/assets/x.svg'
import verifyIcon from '../Pages/assets/captcha.png'
import google from '../Pages/assets/google.png'
import { Link } from 'react-router-dom'

const SignUp = ({closePopUp, openSignInPopUp}) => {
  const [initialEmail, setInitialEmail] = useState('');
  const [inipassword, setIniPassword] = useState('');

  return (
    <div className='signUp'>
        <div className='signUp_container'>
           <div className='close_btn'>
             <button type='button' onClick={closePopUp}><img src={closeIcon} alt="" /></button>
             <span>IT'S FREE! View job postings easily with Inserviz</span>
           </div>

            <div className='terms_of_service'>
              <p style={{fontSize:'14px'}}>By continuing, you agree to inserviz <Link style={{textDecoration:'0', color:'#00a7ac'}} to='/termsOfService'>Terms of Service</Link> and acknowledge you've read our <Link style={{textDecoration:'0', color:'#00a7ac'}} to='/privacy_policy'>Privacy Policy</Link></p>
            </div>
            <div className='google_btn'>
              <img width='20' height='20' src={google} alt="" />
              <button>Continue With Google</button>
            </div>
            <div className='or_tag'>
              <div className='line_Or'></div>
              <span>Or</span>
              <div className='line_Or'></div>
            </div>
            <form action="">
               <div className='email_signUp'>
                  <label htmlFor="input_email" >
                    Email
                   </label>
                  <input style={{fontSize:'16px'}} type="text" name='' id='input_email' value={initialEmail} onChange={(e) => setInitialEmail(e.target.value)}/>
                </div>
                <div className='password_signUp'>
                  <label htmlFor="input_password">
                    Password
                  </label>
                   {/* <div className='password_icon'> */}
                     <input style={{fontSize:'16px'}} type="password" name='' id='input_password' value={inipassword} onChange={(e) => setIniPassword(e.target.value)}/>
                     {/* <img src="" alt="" /> */}
                   {/* </div> */}
                </div>
                <div className='password_req'>
                   <p style={{fontSize:'14px', color:'#595959'}}>Password must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character</p>
               </div>
              
               {/* <div className='verify_human'>
                    <input type="checkbox" name="" id="verify" />
                    <span>I am human</span>
                    <div className='recapture'>
                      <img width='30px' height='30px' src={verifyIcon} alt="" />
                    </div>
                
               </div> */}
               <div className='signUp_btn'>
                  <button type='button'>Sign Up</button>
                </div>
                <div className=''></div>
                <div className='login'>
                  <span>Already have an account?</span>
                  <span onClick={openSignInPopUp} style={{paddingLeft:'8px', color:'#00a7ac'}}>Login</span>
                </div>

            </form>
            


        </div>


    </div>
  )
}

export default SignUp