import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import jobs2 from '../assets/job2.svg'
import candidates from '../assets/candidates.svg'
import newJobs from '../assets/new-jobs.svg'
import companies from '../assets/companies.svg'
import Features from '../../Features/Features'
import JobFeature from '../../JobFeature/JobFeature'
import WorkingProcess from '../../WorkingProcess/WorkingProcess'
import Location from '../../Location/Location'
import Reviews from '../../Reviews/Reviews'
import Recruiters from '../../Recruiters/Recruiters'
import Article from '../../Article/Article'
import Footer from '../../Footer/Footer'
import SearchInput from '../../SearchInput/SearchInput'
import Settings from 'C:/Users/Donkor James/OneDrive/Documents/inserviz-home/src/components/ProfileSettings/ProfileSettings.jsx'

function Home() {
    const HomeData = [
        {icon:jobs2, title:'Live Jobs', number:'20223'},
        {icon:companies, title:'Companies',number:'803 +'},
        {icon:candidates, title:'Candidates',number:'500 +'},
        {icon:newJobs, title:'New Jobs',number:'102 +'},
    ]    
  
  return (
    <div className='home'>
        <div className='home_body'>
           <div className='home_container'>
                <div className='home_text'>
                 <h2>Your Career's <span style={{color:'#00a7ac'}}>Opportunity</span></h2>
                 <p>2400 people are daily search on this portal, 100 user added job portal</p>
                </div>
                <div className='home_categories'>
                   {HomeData.map((homedata, index)=> (
                       <div className='home_category' key={index}>
                           <div className='home_img'>
                               <img src={homedata.icon} alt=""/>
                             {/* <div></div> */}
                            </div>
                            <div className='home_details'>
                               <span>{homedata.title}</span>
                               <span>{homedata.number}</span>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='body_container'>
                  <SearchInput/>
                </div>

            
            </div>
        </div>
        <div className='features'>
          <Features/>
        </div>
        <div className='jobFeature_body'>
          <JobFeature/>
        </div>
        <div className='working_body'>
            <WorkingProcess/>
        </div>
        <div className='location'>
            <Location/>
        </div>
        <div className='reviews'>
            <Reviews/>

        </div>
        <div className='recruiters'>
            <Recruiters/>
        </div>
        <div className='article'>
            <Article/>
        </div>
        <>
        <Footer/>
        </>
        {/* <div className='footer'>
            <Footer/>

        </div> */}
      <Settings />
    </div>
  )
}

export default Home