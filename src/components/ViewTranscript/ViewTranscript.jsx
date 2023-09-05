import React from 'react';
import './ViewTranscript.css'
import { transcriptData } from '../../Data/ViewTranscript';
import { Link } from 'react-router-dom';

const ViewTranscript = () => {
    const buttons = [
        {
            btn1:'facebook', 
            btn2:'Twitter',
            btn3:'LinkedIn',
            btn4:'Pininterest',
            btn5:'Dribble',
            btn6:'Behance',
        }
    ]
    
  return (
    <section className='view_transcript'>
        <div className='transcript_container'>
            
            {transcriptData.map((transcript, i)=> {
                return(
                    <div className='transcript_category' key={i}>
                        {/* Displaying profile */}
                       <div className='profile_contact'>
                        {transcript.profile.map((profileItem, profileIndex) => (
                                
                                <div className='profile_item' key={profileIndex}>
                                    
                                    <div className='img_trans'>
                                      <img src={profileItem.image} alt="" />
                                    </div>
                                    <div className='tra_name'>
                                        <div className='transcript_name'>
                                            <span className='trans_name'>{profileItem.name}</span>
                                            <span className='trans_job'>{profileItem.job}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Displaying contact_profile */}
                            {transcript.contact.map((contactItem, contactIndex) => (
                                <div className='contact_item' key={contactIndex}>
                                    <div className='edit_resume'>
                                        <Link style={{textDecoration:'none'}} to='/edit'><span style={{color:'#00a7ac'}} className='edit'>{contactItem.edit}</span></Link>
                                        <Link to='/edit'><img src={contactItem.icon} alt="" /></Link>
                                    </div>
                                    <div className='contact_info'>
                                        <div className='conInfo'>
                                            <span className='contactInfo'>{contactItem.info}</span>
                                        </div>
                                        <div className='cont_Line'>
                                            <span>{contactItem.line}</span>
                                            <img src={contactItem.lineIcon} alt="" />
                                        </div>
                                        <div className='email_line'>
                                           <Link style={{textDecoration:'0'}} to='/email'><span style={{color:'#595959'}}>{contactItem.email}</span></Link>
                                           <Link to='/email'><img src={contactItem.emailIcon} alt="" /></Link>
                                        </div>
                                        <div className='web_line'>
                                            <Link to='/web' style={{textDecoration:'0'}}><span style={{color:'#595959'}}>{contactItem.web}</span></Link>
                                            <Link t0='/web'><img src={contactItem.webIcon} alt="" /></Link>
                                        </div>
                                    </div>

                                </div>
                            ))}
                       </div>
                        {/* Displaying professionalInfo */}
                        {transcript.professionalsInfo.map((profInfo, profIndex) => (
                            <div className='profInfo_category' key={profIndex}>
                                <div className='profInfo_name_cat'>
                                  <span className='profInfo_name'>{profInfo.name}</span>
                                  <div className='dotted_'>..............................................................................................................................................................................</div>
                                </div>     
                                <div className='professional_item'>
                                    {/* <div className='num_profile'> */}
                                    <div className='num_date'>
                                        <span>{profInfo.num}</span>
                                        <span className='date'>{profInfo.date}</span>
                                    </div>
                                        
                                    {/* <div className='undline'>
                                        <div className='line'></div>
                                        <div className='circle'></div>
                                        <div className='line'></div>
                                    </div> */}
                                    <div className='comp_name'>
                                       <span className='comp'>{profInfo.comp}</span>
                                    </div>
                                    
                                </div>
                                <div className='text_profile_name'>  
                                    <span className='job_info_prof'>{profInfo.job}</span>
                                    <span className='duty_info'>{profInfo.duty}</span>
                                    <div className='role'>
                                        <span>{profInfo.role1}</span>
                                        <span>{profInfo.role2}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/*  */}
                        {transcript.professionalsInfo2.map((profInfo, profIndex) => (
                            <div className='profInfo_category' key={profIndex}>
                                
                                <div className='professional_'>
                                    <div className='num_profile'>
                                        <div className='num_date'>
                                          <span>{profInfo.num}</span>
                                          <span className='date'>{profInfo.date}</span>
                                        </div>
                                        {/* <div className='undeline'>
                                            <div className='line_'></div>
                                            <div className='circle_'></div>
                                            <div className='line_'></div>
                                        </div> */}
                                        <div className='comp_name'>
                                          <span className='comp'>{profInfo.comp}</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='text_profile'>                                   
                                    <span className='job_info_prof'>{profInfo.job}</span>
                                    <span className='duty_info'>{profInfo.duty}</span>
                                    <div className='role'>
                                        <span>{profInfo.role1}</span>
                                        <span>{profInfo.role2}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                )
            })}
            <section className='special_skills'>
               
                <div className='special_dev'>
                   <div className='skills'>
                        <span className='special_name'>Special Skills</span>
                        <div className='dotted_line'>.........................................................................................................................................................................................</div>
                   </div>
                    <span className='job_dev'>Web Development,{" "} UI/UX Designer,{" "}React Development. </span>
                </div>
            </section>
            <div className=''>   
                <div className='skills'>
                    <span className='special_name'>Social Network</span>
                    <div className='dotted_line'>......................................................................................................................................................................................</div>
                </div>
                {buttons.map((button, btnIndex) => {
                    const {btn1,btn2,btn3,btn4,btn5, btn6} = button;

                    return <main className='btn-category' key={btnIndex}>
                        <div className='btn'>
                          <button>{btn1}</button>
                        </div>
                        <div className='btn'>
                          <button>{btn2}</button>
                        </div>
                        <div className='btn'>
                         <button>{btn3}</button>
                        </div>
                        <div className='btn'>
                          <button>{btn4}</button>
                        </div>
                        <div className='btn'>
                          <button>{btn5}</button>
                        </div>
                       <div className='btn'>
                         <button>{btn6}</button>
                       </div>
                    </main>
                })}

            </div>
            <div className='authentication'>
                <span className='declare'>Declaring And Authentication</span>
                <span className='text_auth'>I do hereby declare that the information given above is true of my knowledge.</span>
                <div className='yours_info'>
                    <span style={{color:'#595959'}}>Yours Faithful{','}</span>
                    <span className='auth_name'>Jacoline Frankly</span>
                </div>
            </div>
        </div>
        <div className='download_transcript'>
            <button>Download Transcript</button>
        </div>
    </section>
  );
}

export default ViewTranscript;
