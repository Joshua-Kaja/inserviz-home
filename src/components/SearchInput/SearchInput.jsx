import React, {useState} from 'react'
import './SearchInput.css'
import imgIcon from '../../assets/job3.svg'
import category from '../../assets/category.svg'
import search from '../../assets/search-2.svg'

const SearchInput = () => {
    const [formInput, setFormInput] = useState({
      input:'',
      selectOption:'',
    });
    // const [selectOption, setSelectOption] = useState();
    const [selectSearch, setSelectSearch ] = useState(null);

    function handleChangeInput(e) {
        // setInput(event.target.value);
        const {name, value} = e.target;
        setFormInput({
          ...formInput,
          [name]:value
        });

    };

    function handleClickSearch(e) {
        e.preventDefault();
        setSelectSearch(selectSearch);
    };

    function handleSelect(e) {
      const {name, value} = e.target;
      setFormInput({
        ...formInput,
        [name]:value
      });
    }

  return (
    <div className='searchInput'>
    <div className='searchInput_container'>
        <form action="" className='search_form'>
          <div className='input_form'>
            <img src={imgIcon} alt="" />
            <input 
            type="text" 
            placeholder='Job Title' 
            onChange={handleChangeInput} 
            name='input'
            value={formInput.input}/>
          </div>
          <div className='dropdown_form'>
            <img src={category} alt="" />
              <select name="" id=""
               onChange={handleSelect}
                value={formInput.selectOption}
                className='selectOption'>
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