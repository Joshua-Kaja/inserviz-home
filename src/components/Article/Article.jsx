import React from 'react'
import './Article.css'
import { Link } from 'react-router-dom'
import ExploreLeft from '../Explore/ExploreLeft'
import { ArticleData } from '../Data/Article'

const Article = () => {
  return (
    <div className='article_container'>
        <div className='article_header'>
            <span>Portal Recent <span style={{color:'#00a7ac'}}>Article</span></span>
            <p>To choose your trending job dream & to make future bright.</p>
        </div>
        <div className='article_categories'>
            {ArticleData.map((article, index)=> (
                <div className='article_category'>
                    <div className='img_article'>
                      <img src={article.img} alt="" />
                    </div>
                    <div className='comment_person_article'>
                       <div className='date_article'>
                         <Link to='/date'><span className='date_text'>{article.date}</span></Link>
                       </div>
                       
                       <div className='comment_article'>
                          <img src={article.iconComment} alt="" />
                          <Link style={{textDecoration:'0'}} to='/'><span className='comment'style={{color:'#595959'}}>{article.comment}</span></Link>
                        </div>
                        <div className='person_article'>
                          <img src={article.icon} alt="" />
                          <span>{article.name}</span>
                        </div>
                    </div>
                    <div className='article_link'>
                        <Link className='article_l' style={{textDecoration:'0', color:'#000'}} to='/article'><span>{article.heading}</span></Link>
                    </div>
                    <div className='explore'>
                        <ExploreLeft/>
                    </div>
                </div>
                
            ))}

        </div>

    </div>
  )
}

export default Article