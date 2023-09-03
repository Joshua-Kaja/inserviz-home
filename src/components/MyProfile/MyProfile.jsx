import React, {useState} from 'react'
import './MyProfile.css'
import user2 from '../../assets/user-2.svg'
import clock2 from '../../assets/clock-2.svg'
import map2 from '../../assets/map-2.svg'
import phone2 from '../../assets/phone-2.svg'
import email2 from '../../assets/email-2.svg'
import website2 from '../../assets/website-2.svg'
import company2 from '../../assets/company-2.svg'
import designation2 from '../../assets/designation-2.svg'
import qualification2 from '../../assets/qualification-2.svg'
import language2 from '../../assets/language-2.svg'

const MyProfile = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [web, setWeb] = useState('');
    const [job, setJob] = useState('');
    const [designated, setDesignated] = useState('');
    const [qualified, setQualified] = useState('');
    const [lang, setLang] = useState('');
    const [desc, setDesc] = useState('');
   
    
  return (
    <div className='my_profile'>
       <div className='my_profile_container'>
           <div className='my_profile_header'>
              <span>My Profile</span>
           </div>
           <div className='form_container'> 
              <form action="">
              <div className='input_name'>
              <div className='first_name'>
                    <label htmlFor="">First Name*</label>
                    <div className='img_input'>
                        <img src={user2} alt="" />
                        <input className='input_txt' type="text"  id="" 
                        placeholder='Mr.Daniel' value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className='age'>
                    <label htmlFor="">Your Age*</label>
                    <div className='img_input'>
                        <img src={clock2} alt="" />
                        <input className='input_txt' type="text" 
                         id="" placeholder='21 Years' value={age} onChange={(e) => setAge(e.target.value)}
                         />
                    </div>
                </div>
                <div className='current_location'>
                    <label htmlFor="">Current Location*</label>
                    <div className='img_input'>
                        <img src={map2} alt="" />
                        <input className='input_txt' type="text" 
                        id="" placeholder='Acccra, Ghana' value={location} onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>
                <div className='phone_number'>
                    <label htmlFor="">Phone Number*</label>
                     <div className='img_input'>
                        <img src={phone2} alt="" />
                        <input className='input_txt' type="text"
                         id="" placeholder='+233 *** *** ***' value={number} onChange={(e) => setNumber(e.target.value)}
                         />
                     </div>
                </div>
                <div className='email'>
                    <label htmlFor="">Email*</label>
                    <div className='img_input'>
                        <img src={email2} alt="" />
                        <input className='input_txt' 
                        type="text" id="" placeholder='info@example.com' value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className='website_Link'>
                    <label htmlFor="">Website Link*</label>
                    <div className='img_input'>
                        <img src={website2} alt="" />
                        <input className='input_txt' type="text" 
                        id="" placeholder='https://example.com' value={web} onChange={(e) => setWeb(e.target.web)}
                        />
                    </div>
                </div>
                <div className='curent_jobs'>
                    <label htmlFor="">Current Job Place*</label>
                    <div className='img_input'>
                        <img src={company2} alt="" />
                        <input className='input_txt' type="text"
                         id="" placeholder='Company Name' value={job} onChange={(e) => setJob(e.target.value)}
                        />
                    </div>
                </div>
                <div className='designation'>
                    <label htmlFor="">Designation*</label>
                    <div className='img_input'>
                        <img src={designation2} alt="" />
                        <input className='input_txt' type="text"
                         id="" placeholder='UI/UX Engineer' value={designated} onChange={(e) => setDesignated(e.target.value)}
                        />
                    </div>
                </div>
                <div className='qualification'>
                    <label htmlFor="">Qualification*</label>
                    <div className='qualification_input'>
                        <img src={qualification2} alt="" />
                        <select name="" id=""  className='selectOption' value={qualified} onChange={(e) =>  setQualified(e.target.value)}>
                           <option className='option'value="ui/ux">UI/UX Designer</option>
                            <option className='option' value="graphic">Graphic Designer</option>
                            <option className='option' value="frontend">Frontend Engineer</option>
                            <option className='option' value="backend">Backend Engineer</option>
                            <option className='option' value="mobile">Mobile App Developer</option>
                        </select>
                    </div>
                    
                    
                </div>
                <div className='language'>
                    <label htmlFor="">Language*</label>
                    <div className='language_input'>
                        <img src={language2} alt="" />
                        <select name="" id=""  className='selectOption' value={lang} onChange={(e) => setLang(e.target.value)}>
                            <option className='option' value="mobile">English</option>
                            <option className='option' value="game">Spanish</option>
                            <option className='option' value="sotware">Italian</option>
                        </select>
                    </div>
                    
                    
                </div>
              </div>
              <div className='text_area_btn'>
                <label htmlFor="">Description</label>
                <div className='text_button'>
                   <textarea name="" id="" placeholder='Write something about yourself........' 
                   className='textarea_placeholder' value={desc} onChange={(e) => setDesc(e.target.value)}
                   />
                   <div className='btn_update'>
                     <button type='button' >Update Profile</button>
                   </div>
                </div>
              </div>
              
              </form>              

           </div>

       </div>

    </div>
  )
}

export default MyProfile

