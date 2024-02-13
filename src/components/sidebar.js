import React, { useState, useEffect } from 'react';

import Slider from 'react-slider'

let MIN = 100
let MAX = 1000
const Sidebar = (props) => {
  const [minMaxSlider, setMinMaxSlider] = useState([MIN, MAX])
  const [valueSlider, setValuesSlider] = useState([0, 15000])
  const [checkboxBrands, setCheckboxBrands] = useState(Array(props.returnBrands(1).length).fill(false))

  const setCheckboxBrandsFunc = (index => {
    setCheckboxBrands(prevState => {
        const newState = [...prevState];
        newState[index] = !prevState[index];
        return newState;
      });
    });
  
    const handleInputChange = (event, index) => {
        const newValue = parseInt(event.target.value);
        
        if (!isNaN(newValue) && newValue >= MIN && newValue <= MAX ) {
        if((index == 0 && newValue <= minMaxSlider[1]) || 
        (index == 1 && newValue >= minMaxSlider[0])){
          const updatedMinMaxSlider = [...minMaxSlider];
          updatedMinMaxSlider[index] = newValue;
          setMinMaxSlider(updatedMinMaxSlider);
        }
        }
      };
  const handleSliderChange = (newValue) => {
      
        setMinMaxSlider(newValue);
        setMinMaxSlider(oldValue => {
            let price_block = document.getElementById('price-inputs-block').children
            price_block[0].value = oldValue[0]
            price_block[1].value = oldValue[1]
            return oldValue
        })
  };
  const [range, setRange] = useState([5, 30]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  const [additionalRange, setAdditionalRange] = useState([10, 50]);
  function handleAdditionalRange(event, newValue) {
    setAdditionalRange(newValue);
  }
  
  
  return (
   
      <div id='filters-sidebar'>
        <div id="price-input-slider">
          <span>Цена:</span><br />
          <div id="price-inputs-block" style={{ display: 'flex' }}>
            <input
                placeholder={minMaxSlider[0]}
                onChange={(event) => handleInputChange(event, 0)}
                type="number"
               
            />
            <input
                style={{ marginLeft: '17px' }}
                placeholder={minMaxSlider[1]}
                onChange={(event) => handleInputChange(event, 1)}
                type="number"
               
                
            />

          </div>
         

      <Slider
        className="slider"
        onChange={handleSliderChange}
        value={minMaxSlider}
        min={MIN}
        max={MAX}
      />
          
        </div>
        <div className='categories-list-sidebar'>
          <span> Цвета:</span><br/>
          {props.items.map(el=>{
            let colorsArray = []
            el.colors.map(value=>{
                if(!colorsArray.includes(value)){colorsArray.push(value)}
            })
          })}
          <div id="categories_list_block" style={{ display: 'flex' }}>
                
          </div>
        <span>Бренды:</span><br />
          <div id="categories_list_block" style={{ display: 'flex' }}>
                {props.returnBrands(0).map((el,i) =>{
             
                  return(
                    <div onClick={()=>{
                      setCheckboxBrandsFunc(i)
                      let filterObj = props.sliderPosition
                      console.log(filterObj)
                      if(checkboxBrands){

                      }
                    }}>
                    <input type="checkbox" id={'checkbox_' + el.name} />
                    <label for={'checkbox_' + el.name}>{el.name}</label>                    
                    </div>

                    )
                })}

            </div>
          </div>
      </div>

  )
}

export default Sidebar