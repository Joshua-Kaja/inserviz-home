import React, {useState} from 'react';
import './Forgot.css'
import closeIcon from '../../assets/x.svg'

const Forgot = ({closePopUp}) => {
    const [email, setEmail] = useState('');
  return (
    <div className='forgot_'>
        <div className='forgot_container_'>
            {/* <div className='btn_reset'> */}
                <img className='close_img' onClick={closePopUp} src={closeIcon} alt="" />
              <div className='reset_password'>
                <span>Reset your password</span>
              </div>
            {/* </div> */}
            <div className='email_pass'>
                <label htmlFor="">
                    Email
                </label>
                <input type="text" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder='example@gmail.com'
                    />
            </div>
            <div className='btn_verify'>
                <button>Verify</button>
            </div>
        </div>
      
    </div>
  );
}

export default Forgot;
