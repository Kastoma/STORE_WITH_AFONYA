import React, { useState, useEffect } from 'react';
import Monobank from '../UseImages/monobank.png'


const PaymentPage = (props) => {
    const [colorsArray, setColorsArray] = useState([]);

    const handleInputChange = (event, i, indexColor, elementIndex) => {
            if(isNaN){
                //order obj
                console.log(
                    'props.orders: ', props.orders,
                    'i: ', i,
                    'indexColor: ', indexColor,
                    'elementIndex: ', elementIndex
                    )
                let orderObj = props.orders[elementIndex]
                orderObj.colors[indexColor].orderQuantity = event.target.value
                console.log(props.changeOrder(orderObj))

                //_________

                const value = parseInt(event.target.value);
                console.log(value)
                const updatedColorsArray = [...colorsArray];
                updatedColorsArray[i] = value;
                setColorsArray(updatedColorsArray);
            }
           
        };
  
  return (
    <main id="payment-page-block">
        <div className='payment-page-items-list'>

            <div className='div-center'>
                <div id="payment-page-head">
                    <button>Изменить кол-во группе товаров</button>
                    <button >Перейти к оплате</button>
                </div>
            </div>

            <div className='div-center'>
                <div id='table-head'>
                    <div className="ppb-column" style={{ width: '110px' }}></div>
                    <div className="ppb-column" style={{ width: '530px' }}>Description</div>
                    <div className="ppb-column" style={{ width: '165px' }}>Ammount</div>
                    <div className="ppb-column" style={{ width: '165px' }}>Price</div>
                    <div className="ppb-column" style={{ width: '165px' }}>Total</div>
                    <div className="ppb-column" style={{ width: '74px' }}></div>
                </div>
            </div>
      
            {props.orders.map((el, elementIndex)=>{
                        let ImageSrc = ''
                        try {
                            ImageSrc = require(`../images/${el.img}`);
                        } catch (error) {
                            
                        }
                        return(
                            <div className='div-center'>
                                <div id="table-body">
                                    <div className="ppb-body-column" style={{ width: '100px',background: `url(${ImageSrc})`}}></div>
                                    <div className="ppb-body-column" style={{ width: '530px', display: 'flex',justifyContent:'center' }}><p style={{ width: '450px' }}>{el.desc}</p></div>
                                    <div className="ppb-body-column" style={{ width: '165px',display: 'flex',justifyContent:'center',flexWrap:'wrap' }}>
                                        {el.colors.map((c, indexColor)=>{
                                    
                                        return(
                                            <div id="iw-color" style={{width: '40px',height: '56px', marginLeft:'6.5px',marginRight:'6.5px'}}>
                                                <div id="ppd-ca-block" style={{backgroundColor: c.color, height: '31px', width: '100%'}}>

                                                </div>
                                                <input id="color-input" defaultValue={c.orderQuantity == undefined ? 0: c.orderQuantity} 
                                                style={{width:'100%',textAlign:'center'}} 
                                                onChange={(event,i)=>{
                                                    if(event.target.value >= 0 && event.target.value <= el.quantity){
                                                        handleInputChange(event, i, indexColor, elementIndex)}
                                                    else{
                                                        event.target.value = ''}
                                                    }}
                                                
                                                type='number' min="0" max={c.quantity}/>
                                                
                                            </div>
                                        )
                                    })}</div>
                                    <div className="ppb-body-column" style={{ width: '165px',display: 'flex',justifyContent:'center',alignContent: 'center' }}>
                                        <span id="price-text-table">{el.price}</span>
                                    </div>
                                    <div className="ppb-body-column" style={{ width: '165px',display:'flex', justifyContent:'center',alignItems:'center' }}>
                                        <span id="price-text-table">{el.colors.reduce((q,index)=>{return index.orderQuantity != undefined && index.orderQuantity !=0 ? (Math.ceil(100*(q + (index.orderQuantity * el.price))))/100: q},0)}</span>
                                    </div>
                                    <div className="ppb-body-column" style={{ width: '64px',display:'flex', justifyContent:'center',alignItems:'center' }}>
                                                 <button id="delete-order" onClick={()=>{
                                                    let deleteOrder = props.orders[elementIndex]
                                                    
                                                    return props.remove(deleteOrder)}}></button>
                                    </div>
                                </div>
                            </div>
            )})} 
        
            
        
        </div>
        <div className='div-center'>
            <div id='delivery-form'>
                <div>
                    <div id="df-block-1">
                        <p id="d-f-head-text">Контактнi даннi</p> 
                        <input placeholder='Фамилия:'/>
                        <input placeholder='Имя:'/>
                        <input placeholder='Email:'/> <br></br>
                        <textarea className="comment-form" placeholder='Комментарий:'/>
                    </div>
                   

                </div>
                <div>
                    <div id="df-block-2">
                        <p id="d-f-head-text">Доставка</p>
                        <button style={{marginTop:'34px'}}>Нова Пошта</button>
                        <button style={{border: '2px solid #0B53DE'}}></button>
                        <button style={{border: '2px solid #0B53DE'}}></button>
                        <input placeholder='Выберите город:'/>
                        <div id="cities-block" style={{width:'236px',display:'flex'}}>
                            <button>Київ</button>
                            <button>Харків</button>
                            <button>Одеса</button>
                            <button>Дніпро</button>
                            <button>Львів</button>
                            <button>Полтава</button>
                            <button>Вінниця</button>
                            <button>Миколаїв</button>
                            <button>Запоріжжя</button>
                            <button>Кривий Ріг</button>
                        </div>
                        <input placeholder='Выберите отделение:'/>
                    </div>
                </div>
                <div style={{width:'100%'}}  className='div-center'>
                    <div id="monobank-pay">
                        <img src={Monobank} id="monobank-img"/>
                        <button id="monobank-button">monobank pay</button>
                    </div>

                </div>

            </div>
        </div>
    </main>
  )
}

export default PaymentPage