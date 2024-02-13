import React, { useState, useEffect } from 'react';
import Item from './Item'
import Slider from 'react-slider'
import Sidebar from './sidebar'


const Items = (props) => {
  
  
  return (
    <div id='store-main'>
      <div className='store-items-block'>

        {props.items.map(el => {

          return (
            <Item onShowItem={props.onShowItem} key={el.id} item={el} onAdd={props.onAddToCart} />
          )

        })}
      </div>
      <Sidebar returnBrands={props.returnBrands} items={props.items}></Sidebar>
    </div>
  )
}

export default Items