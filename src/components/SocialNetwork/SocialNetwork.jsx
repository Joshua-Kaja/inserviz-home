import React, { useState } from 'react'
import './SocialNetwork.css'
import facebook2 from '../../assets/facebook-2.svg'
import twitter2 from '../../assets/twiter-2.svg'
import linkedin2 from '../../assets/linkedin-2.svg'
import pininterest2 from '../../assets/pinterest-2.svg'
import dribble2 from '../../assets/dribble-2.svg'
import behance2 from '../../assets/behance-2.svg'

const SocialNetwork = () => {
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [linkedin, setLinkedIn] = useState('');
    const [pin, setPin] = useState('');
    const [dribble, setDribble] = useState('');
    const [behance, setBehance] = useState('');
    const [editMode , setEditMode] = useState(false);

    function handleEditClick() {
        setEditMode(true);
    };

   

  return (
    <div className='socialNetwork'>
        <div className='socialNetwork_container'>
            <div className='socialNetwork_header'>
                <span className='span' style={{padding:'1rem'}}>Social Network</span>
            </div>
            <div className='form_social_container'>
                
                    <form action="">
                    <div className='social_input'>
                        <div className='first_name'>
                            <label htmlFor="">facebook</label>
                            <div className='img_input'>
                                <img src={facebook2} alt="" />
                                <input className='input_txt' type="text"  id="" 
                                placeholder='https//example-facebook.com/' value={facebook} onChange={(e) => setFacebook(e.target.value)}
                                />
                            </div>
                       </div>
                       <div className='twitter'>
                            <label htmlFor="">Twitter</label>
                            <div className='img_input'>
                                <img src={twitter2} alt="" />
                                <input className='input_txt' type="text" 
                                id="" placeholder='https//example-twitter.com/' value={twitter} onChange={(e) => setTwitter(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='linkedin'>
                            <label htmlFor="">Linkedin</label>
                            <div className='img_input'>
                                <img src={linkedin2} alt="" />
                                <input className='input_txt' type="text" 
                                id="" placeholder='https//example-linkedin.com/' value={linkedin} onChange={(e) => setLinkedIn(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='pinterest'>
                            <label htmlFor="">Pinterest</label>
                            <div className='img_input'>
                                <img src={pininterest2} alt="" />
                                <input className='input_txt' type="text" 
                                id="" placeholder='https//example-pinterest.com/' value={pin} onChange={(e) => setPin(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='dribble'>
                            <label htmlFor="">Dribble</label>
                            <div className='img_input'>
                                <img src={dribble2} alt="" />
                                <input className='input_txt' type="text" 
                                id="" placeholder='https//example-dribble.com/' value={dribble} onChange={(e) => setDribble(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='behance'>
                            <label htmlFor="">Behance</label>
                            <div className='img_input'>
                                <img src={behance2} alt="" />
                                <input className='input_txt' type="text" 
                                 id="" placeholder='https//example-behance.com/' value={behance} onChange={(e) => setBehance(e.target.value)}
                                />
                            </div>
                        </div>

                    </div>
                    <div className='edit_social'>
                        <button type='button' onClick={handleEditClick}>Edit Social</button>
                    </div>
                </form>

            
                

            </div>

        </div>

    </div>
  )
}

export default SocialNetwork