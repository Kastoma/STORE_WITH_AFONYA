import React, { Component } from 'react'

const Order = (props) => { 
    let imageSrc = ''
    try {
        imageSrc = require(`../images/${props.item.id}.jpg`);
    } catch (error) {
        
    }finally{
    return (
        <div className='div-center'>
            <div className='item'>
                <div id="order-img" style={{backgroundImage: `url(${imageSrc}) `}}></div>
                <div id='order-main-block'>
                    
                    <span id="b2-order-title">{props.item.desc}</span> <br/>
                    <span id="b2-order-price">{props.item.price}</span>
                    <div id="omb-block">
                        <div id="omb-b" style={{display:'flex', justifyContent: 'left',width: '50%'}}></div>
                    <div id="omb-b" style={{display:'flex', justifyContent: 'right',width: '50%'}}>
                        <button id="delete-order" onClick={()=>{return props.remove(props.item)}}></button>
                    </div>
                    </div>
                </div>
            </div>  
        </div>
       
    )}
  }


export default Order
