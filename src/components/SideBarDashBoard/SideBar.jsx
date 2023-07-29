import React, {useState} from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import { SideBarData } from '../../Data/SideBar'

const SideBar = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };

  return (
    <div className='sideBar'>
       <div className='sideBar_container'>
       <div className='sideBar_categories'>
       {SideBarData.map((sideBar, index)=> (
            <Link to={sideBar.path} style={{textDecoration:'none'}} className='sideBar_category'
             key={sideBar.id} onClick={() => handleElementClick('sideBar')}>
                <div>
                   <img src={sideBar.icon} alt=""/>
                   <span style={{color:'#595959', paddingLeft:'1rem'}}>{sideBar.name}</span>
                </div>
            </Link>
           ))}

       </div>

       </div>

    </div>
  )
}

export default SideBar