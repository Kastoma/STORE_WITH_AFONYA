import React from 'react'

import { FaCartShopping } from "react-icons/fa6";


const Item = (props) => { 
    let imageSrc = ''
    try {
        imageSrc = require(`../images/${props.item.id}.jpg`);
    } catch (error) {
        
    }finally{
       return (
      <div className='store-item product-block block'>
        
        <div id='si-header'>
            <div id='si-header-block'>
                <div id='si-hb-bl'>
                    <button id='si-hb-status'>status</button>
                   

                </div> 
                <div id="quabtity-id-block">
                        <div style={{width: '50%', float: 'left'}}>
                            <button id='si-quantity'>{props.item.quantity} left</button>
                            
                        </div>
                        <div style={{width: '50%', float: 'right',textAlign: 'right'}}>
                            <span id='item-id'>#{props.item.id}</span>
                        </div>
                      <hr id='item-hr' /> 
                      </div>
                 
               
            </div>
            <div className='div-center' style={{paddingTop: '26px'}}>
                 <div id="si-header-img"  style={{backgroundImage: `url(${imageSrc})`,width:'139px',height:'139px',backgroundSize: 'cover',backgroundPosition: 'center center'}}>
                    
                    </div>   
            </div>
        
        
        </div>
        <div id='si-main'>
            <div className='div-center'>
                <span id="item-description">{props.item.desc}</span>                
            </div>
            <p id="item-price-text" className='text-black text-base font-semibold leading-4 max-w-[106px]'>{props.item.price}<br/>
            {props.item.deliveryPrice}</p>
            <div className='div-center' style={{paddingLeft:'19px',paddingRight:'19px'}}>
                <hr  style={{width:'231px',marginTop:'14px',borderColor:  '#fff'}}/>
            </div>
        </div>
        <div id='si-footer'>
            <div id="si-f-div">
                <button id="item-more-info" onClick={()=>props.onShowItem(props.item)}>Подробнее
                    <svg style={{marginLeft: '5px'}} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M1.67027 11L0 9.3308L7.05147 2.27683H1.75413L1.7681 0L11 0V9.23302H8.70776L8.72173 3.94603L1.67027 11Z" fill="white"/>
                    </svg>
                </button>
                <button id="item-put-shopping-cart-button" onClick={()=>{
                    
                    props.onAdd(props.item)}}>
                    <FaCartShopping  color="#18A661" />
                </button>
            </div>
      </div>
    </div>
    ) 
    }
    

    
  
}

export default Item
