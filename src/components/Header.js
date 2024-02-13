import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { useState } from 'react';
import Order from './Order'
import { FaAlignJustify } from "react-icons/fa";

export default function Header(props) {
  let [openCart,setCartOpen] = useState('');
  let [isClicked, setIsClicked] = useState(0);
  let [showList, setListShown] = useState([false,false])
  let [isCategoryShown, setCategoryShown] = useState(true)
  const setList = (index) => {
    setListShown(prevState => {
      console.log(prevState)
      const newState = [...prevState];
      newState[index] = !newState[index];
      console.log(newState, index)
      return newState;
    });
  };
  const handleClick = (index) => {
    setIsClicked(index);
  };

  function getListPodcategories(n){
    let el = props.returnPhones(1)[n]
    
      return (
          <div id="podclass-block">
          
                  {Object.entries(el).slice(1).map((val, i) => {
                   
                              return(
                                  <div id="pb-b">
                                      <span id="podclass-head-text">{val[0]}</span>
                                    <div>
                                        {val[1].map((podclass, index)=>{
                                          return (<span id="podclass-text">{podclass}<br/></span>)
                                        })}              
                                    </div>
                                  </div>
                                )
                                  })}

          </div>
           

             )}
         

      

  return (
    <div> 
          <div className='header'>
            <div className='div-100'>
              <div id="header-picture"></div>
              <input  placeholder='поиск' className='header-input'/>
              <div id="h-cc-block">
                <span id='h-currency'>Курс: </span>
                <br></br>
                <span id='h-currency' style={{textDecorationLine: 'underline'}}>Для клиентов</span>
              </div>
              
              <div>
                
                <div id="swap-lang">
                  <button style={{background: '#47588C'}}>ua</button>
                  <button>ru</button>

                </div>
                
              </div>
              <div id='h-ne'>
                <span id="h-ne-txt" style={{fontSize:'22px'}}>+38 (063) 433-91-52</span><br/>
                <span id="h-ne-txt" style={{fontSize:'15px'}}>partner@itsellopt.com.ua</span>
              </div>
              
              {openCart &&( <div>
                    <div className='shopping-cart'>
                        {props.orders.length == 0? <button id='sc-button'>Корзина пуста</button>:props.orders.map(el=>(
                            <Order ket={el.id} item={el} remove={props.remove}/>
                        ))}
                        
                    </div>
                </div>)}
              
              
        </div> 
          <div style={{display: 'flex'}}>
            
            <div className='div-100' style={{justifyContent: 'right'}}>
            
              <button onClick={()=>setCartOpen(openCart = !openCart) } id='shopping-cart'>
                <span id='h-currency' style={{fontSize: '19px'}}>Корзина</span>
                  
              </button>
              <button onClick={()=>props.showPaymentPage()} id='shopping-cart' style={{border: '3px solid #96e58e'}}>
                <span id='h-currency' style={{fontSize: '19px'}}>Оформить заказ</span>
                  
              </button>
              <div id='close-category-block'>
                            <FaAlignJustify  onClick={()=>setCategoryShown(!isCategoryShown)}/></div>
              
            </div>
          </div>
          
          </div>
         
          <div className={isCategoryShown? 'catalog-list' : 'catalog-list catalog-list-closed'} style={{minHeight: `${props.returnPhones(1).length * 45}px`}}>
                <div id="cl-list" style={{maxHeight: `${props.returnPhones(1).length * 45}px`}}>
                    {props.returnPhones(1).map((el,i) => {
                      return(
                            <button style={{background: isClicked == i? '#FFFDEE':'#EEFBFF'}} onClick={() => handleClick(i)}
                             key={el.name} id="categories-list">{el.name}</button>
                          )})}
                  </div>
              
          <div id="podcategories">
                        
                        {getListPodcategories(isClicked)}
                    
          </div> 
          
                
          </div>        
         
    </div>

  )
}
