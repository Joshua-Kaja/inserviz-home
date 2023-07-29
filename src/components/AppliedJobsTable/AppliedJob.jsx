import React from 'react';
import './AppliedJob.css'
import company from '../../assets/company-06.png'
import company2 from '../../assets/company-02.png'
import company3 from '../../assets/company-03.png'
import company4 from '../../assets/company-04.png'
import company5 from '../../assets/company-05.png'
import location from '../../assets/location.svg';
import calander from '../../assets/calender2.svg';
import arrowRight from '../../assets/arrow2.svg'

const AppliedJob = () => {

    return(
        <>
        <div style={{display:'flex', position:'relative', justifyContent:'center', flexDirection:'column', maxwidth:'70%', marginLeft: "0rem"}}>
          <div className='currently_applied'>
            <span> Current Applied Jobs:</span>
          </div>
            <div className='scrollable-table'>
               <table className="table">

                <thead>
                    <tr className='tr1'>
                    <th>Job Title</th>
                    <th className='th'>Applied Data</th>
                    <th className='th'>Company</th>
                    <th className='th'>Status</th>
                    </tr>
                </thead>
                
                <tbody>
                <tr className='tr'>
                    
                    <td className='tr-td1'>
                        <div className='job-title-col-fscrn' >

                            <img className='img1' src={company} alt="" />
                            
                            <div className='job-detail-fscrn'>
                                <div className='job-position-fscrn'>
                                    <a style={{fontSize:'14px', fontWeight:'bold', textDecoration:'none', marginBottom:'0px'}} href="">
                                        <div>
                                            Senior UI/UX Designer
                                        </div> 
                                    </a>
                                    <div>
                                        <img className='img-calander2' src={calander} alt="" />
                                       <div> 1 day ago</div> 
                                    </div>
                                    
                                </div>
                            
                                <div className='job-location-fscrn'>
                                    <div>
                                        <img className='img-location' src={location} alt="" />
                                        New-York, USA
                                    </div>
                                   
                                   <div>
                                    <img className='img-arrow' src={arrowRight} alt="" />
                                    <div style={{color:'#595959'}}>Salary:  <span>$60-$90</span> /Hour</div>   
                                   </div>
                                </div>
                                                          
                            </div>

                        </div>
                    </td>

                    <td className='tr-td'>
                        03/07/2022
                    </td>
                    <td className='tr-td'>
                    <a href="">Tech.Bath Company</a>
                    </td>

                    <td className='td-last1'>
                        <div>
                        <input type="submit" name='viewed' value={'Viewed'} />
                        </div> 
                    </td>
                </tr>

                <tr className='tr'>
                <td className='tr-td1'>
                        <div className='job-title-col-fscrn'>

                            <img className='img1' src={company2} alt="" />
                            
                            <div className='job-detail-fscrn'>
                                <div className='job-position-fscrn'>
                                    <a style={{fontSize:'14px', fontWeight:'bold', textDecoration:'none', marginBottom:'0px'}} href="">
                                        <div>
                                        React JS Developer
                                        </div> 
                                    </a>
                                    <div>
                                        <img className='img-calander2' src={calander} alt="" />
                                       <div> 1 day ago</div> 
                                    </div>
                                    
                                </div>
                            
                                <div className='job-location-fscrn'>
                                    <div>
                                        <img className='img-location' src={location} alt="" />
                                        Dhaka, Bangladesh
                                    </div>
                                   
                                   <div>
                                    <img className='img-arrow' src={arrowRight} alt="" />
                                    <div style={{color:'#595959'}}>Salary:  <span>$80-$100</span> /Hour</div>   
                                   </div>
                                </div>
                                                          
                            </div>

                        </div>
                    </td>

                    <td className='tr-td'>
                        07/07/2022
                    </td>
                    <td className='tr-td'>
                    <a href="">Gangster Group</a>
                    </td>

                    <td className='td-last2'>
                    <input type="submit" name='Success' value={'Interview'} />
                    </td>
                </tr>
                

                <tr className='tr'>
                    <td className='tr-td1'>
                        <div className='job-title-col-fscrn'>

                            <img className='img1' src={company3} alt="" />
                            
                            <div className='job-detail-fscrn'>
                                <div className='job-position-fscrn'>
                                    <a style={{fontSize:'14px', fontWeight:'bold', textDecoration:'none', marginBottom:'0px'}} href="">
                                        <div>
                                        WordPress Developer
                                        </div> 
                                    </a>
                                    <div>
                                        <img className='img-calander2' src={calander} alt="" />
                                       <div> 2 day2 ago</div> 
                                    </div>
                                    
                                </div>
                            
                                <div className='job-location-fscrn'>
                                    <div className=''>
                                        <img className='img-location' src={location} alt="" />
                                        <div>West London, UK</div>
                                    </div>
                                   
                                   <div>
                                    <img className='img-arrow' src={arrowRight} alt="" />
                                    <div style={{color:'#595959'}}>Salary:  <span>$30K-$40K</span> /Month</div>   
                                   </div>
                                </div>
                                                          
                            </div>

                        </div>
                    </td>

                    <td className='tr-td'>
                        10/07/2022
                    </td>
                    <td className='tr-td'>
                    <a href="">Zoomly.Co Ltd</a>
                    </td>

                    <td className='td-last3'>
                    <input type="submit" name='Canceled' value={'Canceled'} />
                    </td>
                </tr>
                
                <tr className='tr'>
                <td className='tr-td1'>
                        <div className='job-title-col-fscrn'>

                            <img className='img1' src={company4} alt="" />
                            
                            <div className='job-detail-fscrn'>
                                <div className='job-position-fscrn'>
                                    <a style={{fontSize:'14px', fontWeight:'bold', textDecoration:'none', marginBottom:'0px'}} href="">
                                        <div>
                                        Mern-Stack Developer
                                        </div> 
                                    </a>
                                    <div>
                                        <img className='img-calander2' src={calander} alt="" />
                                       <div> 1 week ago</div> 
                                    </div>
                                    
                                </div>
                            
                                <div className='job-location-fscrn'>
                                    <div className=''>
                                        <img className='img-location' src={location} alt="" />
                                        <div>New-York, USA</div>
                                    </div>
                                   
                                   <div>
                                    <img className='img-arrow' src={arrowRight} alt="" />
                                    <div style={{color:'#595959'}}>Salary:  <span>$20-$50</span> /Hour</div>   
                                   </div>
                                </div>
                                                          
                            </div>

                        </div>
                    </td>

                    <td className='tr-td'>
                        13/07/2022
                    </td>
                    <td className='tr-td'>
                    <a href="">Marko-Land Ltd</a>
                    </td>

                    <td className='td-last4'>
                    <input type="submit" name='Viewed' value={'Viewed'} />
                    </td>
                </tr>

                <tr className='tr'>
                <td className='tr-td1'>
                        <div className='job-title-col-fscrn'>

                            <img className='img1' src={company5} alt="" />
                            
                            <div className='job-detail-fscrn'>
                                <div className='job-position-fscrn'>
                                    <a style={{fontSize:'14px', fontWeight:'bold', textDecoration:'none', marginBottom:'0px'}} href="">
                                        <div>
                                        PHP Developer
                                        </div> 
                                    </a>
                                    <div>
                                        <img className='img-calander2' src={calander} alt="" />
                                        <div>1 week ago</div>
                                    </div>
                                    
                                </div>
                            
                                <div className='job-location-fscrn'>
                                    <div className=''>
                                        <img className='img-location' src={location} alt="" />
                                        <div>New-York, USA</div>
                                    </div>
                                   
                                   <div>
                                    <img className='img-arrow' src={arrowRight} alt="" />
                                    <div style={{color:'#595959'}}>Salary:  <span>$40-$60k</span> /Month</div>   
                                   </div>
                                </div>
                                                          
                            </div>

                        </div>
                    </td>

                    <td className='tr-td'>
                        07/07/2022
                    </td>
                    <td className='tr-td'>
                    <a href="">Bistro.Tech Group</a>
                    </td>

                    <td className='td-last5'>
                        <input type="submit" name='Success' value={'Success'} />
                    </td>
                </tr>
                </tbody>
                
            </table>   

            {/* medium screen */}
        

            {/* <table className='table2'>
               
                <tbody className='tbody1'>
                    <tr className='tr-md1'>
                        <td className='td1'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Job Title
                            </div>

                        </td>
                        <td className='td2'>
                            <div className='job-position-box'>
                                <div>
                        
                                <div className='job-position'>
                                    <img className='img1' src={company} alt="" />
                                    <div >
                                        <a style={{fontSize:'14px', fontWeight:'bold'}} href="">Senior UI/UX Designer</a>
                                        <div className='div-calander'>
                                            <img className='img2' src={calander} alt="" />
                                            1 Day ago
                                        </div> 
                                    </div>
                                     
                                </div>
                                <div className='job-details'>
                                    <div className='job-detail-location'>
                                        <img src={location} alt="" />
                                        New-York, USA
                                    </div>
                                    <div>
                                        <img src={arrowRight} alt="" />
                                        Salary: <span>$60-$90</span>/Hour
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr className='tr-md2'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Apply Job
                                
                            </div>
                        </td>
                        <td>
                            <div>
                                03/07/2022
                            </div>
                        </td>
                        
                    </tr>

                    <tr className='tr-md3'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Company 
                                
                            </div>
                        </td>
                        <td>
                            <div>
                            <a href="">Tech.Bath Company</a>
                            </div>
                        </td>
                    </tr>
                    <tr className='tr-md4'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Status 
                                
                            </div>
                        </td>
                        <td>
                            <div className='td-last4'>
                                <input type="submit" name='Viewed' value={'Viewed'} />
                            </div>
                        </td>                        
                    </tr>
        
                </tbody>


                
                <tbody className='tbody2'>
                    <tr className='tr-md1'>
                        <td className='td1'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Job Title
                            </div>

                        </td>
                        <td className='td2'>
                            <div className='job-position-box'>
                                <div>
                                
                                <div className='job-position'>
                                    <img className='img1' src={company2} alt="" />
                                    <div >
                                        <a style={{fontSize:'14px', fontWeight:'bold'}} href="">React JS Developer</a>
                                        <div className='div-calander'>
                                            <img className='img2' src={calander} alt="" />
                                            1 Day ago
                                        </div> 
                                    </div>
                                     
                                </div>
                                <div className='job-details'>
                                    <div className='job-detail-location'>
                                        <img src={location} alt="" />
                                        Dhaka, Bangladesh
                                    </div>
                                    <div>
                                        <img src={arrowRight} alt="" />
                                        Salary: <span>$80-$100 </span>/Hour
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr className='tr-md2'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Apply Job
                                
                            </div>
                        </td>
                        <td>
                            <div>
                            07/07/2022
                            </div>
                        </td>
                        
                    </tr>

                    <tr className='tr-md3'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Company 
                                
                            </div>
                        </td>
                        <td>
                            <div>
                            <a href="">Gangster Group</a>
                            </div>
                        </td>
                    </tr>
                    <tr className='tr-md4'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Status 
                                
                            </div>
                        </td>
                        <td>
                            <div className='td-last4'>
                                <input type="submit" name='Viewed' value={'interview'} />
                            </div>
                        </td>                        
                    </tr>
        
                </tbody>

                
                <tbody className='tbody3'>
                    <tr className='tr-md1'>
                        <td className='td1'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Job Title
                            </div>

                        </td>
                        <td className='td2'>
                            <div className='job-position-box'>
                                <div>
                                
                                <div className='job-position'>
                                    <img className='img1' src={company3} alt="" />
                                    <div >
                                        <a style={{fontSize:'14px', fontWeight:'bold'}} href="">WordPress Developer</a>
                                        <div className='div-calander'>
                                            <img className='img2' src={calander} alt="" />
                                            2 Day ago
                                        </div> 
                                    </div>
                                     
                                </div>
                                <div className='job-details'>
                                    <div className='job-detail-location'>
                                        <img src={location} alt="" />
                                        West London, UK
                                    </div>
                                    <div>
                                        <img src={arrowRight} alt="" />
                                        Salary: <span>$30K-$40K</span>/Month
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr className='tr-md2'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Apply Job
                                
                            </div>
                        </td>
                        <td>
                            <div>
                                10/07/2022
                            </div>
                        </td>
                        
                    </tr>

                    <tr className='tr-md3'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Company 
                                
                            </div>
                        </td>
                        <td>
                            <div>
                            <a href="">Zoomly.Co Ltd</a>
                            </div>
                        </td>
                    </tr>
                    <tr className='tr-md4'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Status 
                                
                            </div>
                        </td>
                        <td>
                            <div className='td-last4'>
                                <input type="submit" name='Viewed' value={'Canceled'} />
                            </div>
                        </td>                        
                    </tr>
        
                </tbody>

                
                <tbody className='tbody4'>
                    <tr className='tr-md1'>
                        <td className='td1'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Job Title
                            </div>

                        </td>
                        <td className='td2'>
                            <div className='job-position-box'>
                                <div>
                                
                                <div className='job-position'>
                                    <img className='img1' src={company4} alt="" />
                                    <div >
                                        <a style={{fontSize:'14px', fontWeight:'bold'}} href="">Mern-Stack Developer</a>
                                        <div className='div-calander'>
                                            <img className='img2' src={calander} alt="" />
                                            1 week ago
                                        </div> 
                                    </div>
                                     
                                </div>
                                <div className='job-details'>
                                    <div className='job-detail-location'>
                                        <img src={location} alt="" />
                                        New-York, USA
                                    </div>
                                    <div>
                                        <img src={arrowRight} alt="" />
                                        Salary: <span>$20-50</span>/Hour
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr className='tr-md2'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Apply Job
                                
                            </div>
                        </td>
                        <td>
                            <div>
                                03/07/2022
                            </div>
                        </td>
                        
                    </tr>

                    <tr className='tr-md3'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Company 
                                
                            </div>
                        </td>
                        <td>
                            <div>
                            <a href="">Marko-land Ltd</a>
                            </div>
                        </td>
                    </tr>
                    <tr className='tr-md4'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Status 
                                
                            </div>
                        </td>
                        <td>
                            <div className='td-last4'>
                                <input type="submit" name='Viewed' value={'Viewed'} />
                            </div>
                        </td>                        
                    </tr>
        
                </tbody>

                <tbody className='tbody5'>
                    <tr className='tr-md1'>
                        <td className='td1'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Job Title
                            </div>

                        </td>
                        <td className='td2'>
                            <div className='job-position-box'>
                                <div>
                                
                                <div className='job-position'>
                                    <img className='img1' src={company5} alt="" />
                                    <div >
                                        <a style={{fontSize:'14px', fontWeight:'bold'}} href="">PHP Developer</a>
                                        <div className='div-calander'>
                                            <img className='img2' src={calander} alt="" />
                                            2 week ago
                                        </div> 
                                    </div>
                                     
                                </div>
                                <div className='job-details'>
                                    <div className='job-detail-location'>
                                        <img src={location} alt="" />
                                        New-York, USA
                                    </div>
                                    <div>
                                        <img src={arrowRight} alt="" />
                                        Salary: <span>$40K-$60K </span>/Month
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            
                        </td>
                    </tr>
                    <tr className='tr-md2'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Apply Job
                                
                            </div>
                        </td>
                        <td>
                            <div>
                                18/07/2022
                            </div>
                        </td>
                        
                    </tr>

                    <tr className='tr-md3'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Company 
                                
                            </div>
                        </td>
                        <td>
                            <div>
                            <a href="">Bistro.Tech Group</a>
                            </div>
                        </td>
                    </tr>
                    <tr className='tr-md4'>
                        <td className='td'>
                            <div style={{fontSize:'15px', fontWeight:'bold'}}>
                                Status 
                                
                            </div>
                        </td>
                        <td>
                            <div className='td-last4'>
                                <input type="submit" name='Viewed' value={'Viewed'} />
                            </div>
                        </td>                        
                    </tr>
        
                </tbody>
            </table> */}
            </div>
            
        </div>
        </>
    )

}

export default AppliedJob;