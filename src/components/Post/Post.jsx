import React, {useState} from 'react';
import './Post.css'
import imgIcon from '../../assets/job3.svg'
import category2 from '../../assets/category-2.svg'
import user2 from '../../assets/user-2.svg'
import email2 from '../../assets/email-2.svg'
import search2 from '../../assets/search-2.svg'
import calender2 from '../../assets/calender2.svg'
import salary2 from '../../assets/salary-2.svg'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { Link } from 'react-router-dom';

const Post = () => {
    
    const [postJobdDisabled, setPostJobDisabled] = useState(false);

    function handleClickHome() {
        setPostJobDisabled(false);
    };

    function handleClickPost() {
        setPostJobDisabled(true);
    }


  return (
    <section className='post'>
        <div className='post_gig_container'>
            <div className='post_header'>
                <div className='post_header_okay'>
                    <div>
                      <span className='post_span'>Post A Gig</span>
                    </div>
                    <div className='underline'>
                        <div className='line'></div>
                        <div className='circle'></div>
                        <div className='line'></div>
                    </div>
                
                    <div className='home_post'>
                        <Link  to='/' style={{textDecoration:'none'}}><span className="home"onClick={handleClickHome} style={{color:'#000'}}>Home</span></Link>
                        <img src={imgIcon} alt="" />
                        <Link to='/post' style={{textDecoration:'none'}}><span className="post_a_gig" onClick={handleClickPost} disabled={postJobdDisabled === ''} style={{color:'#000'}}>Post A Gig</span></Link>
                    </div>
                </div>
            </div>
            <div className='post_container'>
                <form action="">
                    <div className='form_post'>
                        <div className='job_category_post'>
                            <label htmlFor="">Job Title*</label>
                            <div className='post_input'>
                                <img src={imgIcon} alt="" />
                                <input className='post_txt' type="text"  id="" 
                                placeholder='Senior UI/UX Designer'
                                />
                            </div>
                        </div>
                        <div className='job_category_post'>
                            <label htmlFor="">Job Category*</label>
                            <div className='post_input'>
                                <img src={category2} alt="" />
                                <select name="" id="" className='selectPost'>
                                    <option className="option" value="ui/ux designer">UI/UX Developer</option>
                                    <option className="option" value="frontenddeveloper">Frontend Developer</option>
                                    <option className="option" value="nextjs">Next Js</option>
                                    <option className="option" value="laraveldeveloper">Laravel Developer</option>
                                </select>
                            </div>
                        </div>
                        <div className='job_category_post'>
                            <label htmlFor="">Vacancies*</label>
                            <div className='post_input'>
                                <img src={user2} alt="" />
                                <input className='post_txt' type="text"  id="" 
                                placeholder='UI/UX Designer'
                                />
                            </div>
                        </div>
                        <div className='job_category_post'>
                            <label htmlFor="">Budget/Salary*</label>
                            <div className='post_input'>
                                <img src={salary2} alt="" />
                                <input className='post_txt' type="text"  id="" 
                                placeholder='Salary'
                                />
                            </div>
                        </div>
                        <div className='job_category_post'>
                            <label htmlFor="">Job Type*</label>
                            <div className='post_input'>
                                <img src={imgIcon} alt="" />
                                <select name="" id="" className='selectPost'>
                                    <option className="option" value="ui/ux designer">Full Time</option>
                                    <option className="option" value="frontenddeveloper">Part Time</option>
                                </select>
                            </div>
                        </div>
                        <div className='job_category_post'>
                            <label htmlFor="">Experience Level*</label>
                            <div className='post_input'>
                                <img src={email2} alt="" />
                                <input className='post_txt' type="text"  id="" 
                                placeholder='Type Experience'
                                />
                            </div>
                        </div>
                        <div className='job_category_post'>
                            <label htmlFor="">Job Tag*</label>
                            <div className='post_input'>
                                <img src={email2} alt="" />
                                <input className='post_txt' type="text"  id="" 
                                placeholder='Select an option'
                                />
                            </div>
                        </div>
                        <div className='job_category_post'>
                            <label htmlFor="">Deadline*</label>
                            <div className='post_input'>
                                <img src={calender2} alt="" />
                                <input className='post_txt' type="date"  id="" 
                                placeholder='MM/DD/YY'
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div className='text_desc_input'>
                        <FormGroup className='form_group'>
                            <Label for="exampleText">Job Description</Label>
                            <Input type="textarea" name="text" id="Text" />
                        </FormGroup>
                        <div className='input_check'>
                            <input type="checkbox" name="" id="check" />
                            <span>Here I accepted company terms and conditions</span>
                        </div>
                        <div className='post_now'>
                            <button type='post'>Post Now</button>
                        </div>
                    </div>

                </form>

            </div>

        </div>
      
    </section>
  );
}

export default Post;
