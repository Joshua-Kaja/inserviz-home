import React, { useState } from 'react'
import './Faq.css'
import { FaqData } from '../Data/Faq'

const Faq = () => {
    const [activeKey, setActiveKey] = useState(null);

    const toggleAnswer = (index) => {
        if(activeKey === index) {
            return setActiveKey(null);
        }
        setActiveKey(index)
    }
  return (
    <div className='faq'>
        <div className='faq_container'>
            <div className='faq_header'>
                <h2>FAQS</h2>
            </div>
            <div className='faq_categories'>
                {FaqData.map((item, index) => (
                    <div className='faq_category' onClick={() => toggleAnswer(index)} key={index}>
                        <div className='faq_title' >
                            <span>{item.question}</span>
                            <span>{activeKey === index ? '-' : '+'}</span>
                        </div>
                        {activeKey === index ? (
                            <div className='faq_answer show'>
                            <p>{item.answer}</p>
                           </div>
                        ) : null}  
                    </div>
                ))}

            </div>

        </div>

    </div>
  )
}

export default Faq