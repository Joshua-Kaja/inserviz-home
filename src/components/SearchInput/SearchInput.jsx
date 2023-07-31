import React, {useState} from 'react'
import './SearchInput.css'
import imgIcon from '../Pages/assets/job3.svg'
import category from '../Pages/assets/category.svg'
import search from '../Pages/assets/search-2.svg'

const SearchInput = () => {
    const [input, setInput] = useState('');
    const [selectOption, setSelectOption] = useState();
    const [selectSearch, setSelectSearch ] = useState(null);

    function handleChangeInput(event) {
        setInput(event.target.value);
    };

    function handleClickSearch(e) {
        e.preventDefault();
        setSelectSearch(selectSearch);
    };

    function handleSelect(e) {
      setSelectOption(e.target.value);
    };

  return (
    <div className='searchInput'>
    <div className='searchInput_container'>
        <form action="" className='search_form'>
          <div className='input_form'>
            <img src={imgIcon} alt="" />
            <input type="text" placeholder='Job Title' onChange={handleChangeInput} value={input}/>
          </div>
          <div className='dropdown_form'>
            <img src={category} alt="" />
              <select name="" id="" onChange={handleSelect} value={selectOption} className='selectOption'>
               <option className='option' value="ui/ux">UI/UX Designer</option>
                <option className='option' value="graphic">Graphic Designer</option>
                <option className='option' value="frontend">Frontend Engineer</option>
                <option className='option' value="backend">Backend Engineer</option>
                <option className='option' value="mobile">Mobile App Developer</option>
                <option className='option' value="game">Game Developer</option>
                <option className='option' value="sotware">Software Developer</option>
              </select>
             
          </div>
          <div className='btn_search'>
            <img src={search} alt="" />
            <button type="Submit" onClick={handleClickSearch}>Search</button>
          </div>
        </form>



    </div>

  </div>
    
  )
}

export default SearchInput