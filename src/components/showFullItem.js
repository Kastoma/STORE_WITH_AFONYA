import React, { Component, useState } from 'react'
    

let sliderStep = 134.5
let sliderUnderLine = 0
let MAX = 1000

const ShowFullItem = (props) => { 



    const [colorsArray, setColorsArray] = useState([]);
    let imageSrc = ''
    let imagesArr = []
    function importAll(r) {
  
        let images = {};
        r.keys().forEach((item, index) => {

          images[item.replace('./', '')] = r(item);
        });
        return images;
      }
      const handleInputChange = (event, i) => {
        const value = event.target.value;
        const updatedColorsArray = [...colorsArray];
        updatedColorsArray[i] = value;
        setColorsArray(updatedColorsArray);
      };
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
    try {
        imageSrc = require(`../images/${props.item.img}`);
    } catch (error) {
        
    }finally{
    return (
      
      <div className='item-window'> 
            <div className='iw-block'>
                <div style={{width:'440px', height:'100%'}} id="iwb-b1">
                    
                    <img id="iw-img" src={imageSrc}/>
                    

                    <div id='iw-other-img'>
                    <img src={require(`../images/${props.item.id}.jpg`)} onMouseEnter={()=> props.onShownPicture(`${props.item.id}.jpg`, props.item.id)}  className='img-slides'id="first-item-slider" style={{marginLeft:props.sliderPosition}}></img>    
                     
                    {props.item.colors && props.item.colors.map(el => (
                        el.pictures.map((pic,i) => {
                            let shownImage = images[`${pic}.jpg`]
                            imagesArr.push(`${pic}.jpg`)
                            return (<img src={shownImage} onMouseEnter={()=>props.onShownPicture(`${pic}.jpg`, props.item.id)} className='img-slides'></img>)
                        })
                        ))}
                    </div>



                    <div id="slider-buttons">
                        
                            <svg onClick={()=>{if(!(props.sliderPosition >= 0)){
                               
                                return props.changePosition(sliderStep)
                                }}}xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                <path d="M2.01014 17.6516C-0.118792 16.5248 -0.118791 13.4752 2.01014 12.3484L23.6876 0.875911C25.6856 -0.181499 28.0909 1.26692 28.0909 3.52747L28.0909 26.4725C28.0909 28.7331 25.6856 30.1815 23.6876 29.1241L2.01014 17.6516Z" fill="#282828"/>
                            </svg>
                            
   
                            <div style={{width:'150%',paddingTop: '15px', display:'flex', justifyContent:'center'}}> <hr style={{width: '80%', height: '1px',borderColor: "#ececec54"}}/></div>

                       
                            <svg onClick={()=>{if(!(props.sliderPosition  <= -1883)){
                                return props.changePosition(-sliderStep)
                            }}} xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                            <path d="M26.4444 12.3484C28.5733 13.4752 28.5733 16.5248 26.4444 17.6516L4.76692 29.1241C2.76894 30.1815 0.363621 28.7331 0.363621 26.4725L0.363621 3.52747C0.363621 1.26693 2.76894 -0.181499 4.76692 0.875911L26.4444 12.3484Z" fill="#282828"/>
                            </svg>
                        
                    </div>

                    
                    
                    
                </div>

                   
                <div style={{width:'560px', height:'100%'}} id="iwb-b2">    
                   
                <svg  id="close-block" onClick={() => props.closeFullItem({})}  xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                <path d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM37 16.5L3 16.5L3 21.5L37 21.5L37 16.5Z" fill="#A1A1A1"/>
                </svg>
                    <div id="iwb2-status-block">
                            <div id="b2-status"></div>
                            <div id="b2-id"></div>
                            <div id="b2-wehave"></div>

                        </div>   
                        <div id="b2-info-block">
                            <p id="b2-title">{props.item.title}</p>
                        </div>
                        <div id='b2-price-info-block'>
                            <div id="b2-pib1">
                                <p id="b2-price-text">
                                    <span id="b2-price-head">{props.item.price}</span><br/>
                                    {props.item.deliveryPrice}
                                </p>
                                <hr id="b2p-hr"></hr>
                                <div id="buy-button-div">
                                    <button id="b2-button-buy">Купить</button> <div id="quant-items"></div>
                                </div>
                                <button id="b2-sc" onClick={()=>{
                                    let orderObj = props.item
                                    orderObj.colors.map((el,i) => el.orderQuantity = colorsArray[i])
                                    console.log(
                                    'show Full Item: ', orderObj,
                                    'show orders list: ', props.orders
                                    )
                                    if(colorsArray.filter(cA => cA != 0).length > 0){
                                        props.onAdd(orderObj)
                                    }
                                    }}>В корзину</button>
                                <div id="iw-colors">
                       
                                {props.item.colors && props.item.colors.map((el,i)=>(
                                    <div id='iw-color' onMouseEnter={()=>props.onShownPicture(`${el.pictures[0]}.jpg`, props.item.id)}>
                                        <div style={{width: '50px',height:'50px', background: el.color}}></div>
                                        <div className='div-center'><input defaultValue={0} 
                                        onChange={(event) => {

                                            if(event.target.value >= 0 && event.target.value <= el.quantity){
                                                handleInputChange(event, i)}
                                            else{
                                                event.target.value = ''}}}
                                        
                                        id="color-input" type="number" min='0' max={el.quantity}/></div>
                                    </div>
                                ))}
                    </div>
                            </div>
                            <div id="b2-pib2">
                                <div id="b2-review-swap-block">
                                    <span id="b2-rsb-title">ОТЗЫВЫ / ПОЖЕЛАНИЯ?</span><br/>
                                    <div className='div-center'>
                                        <span id="b2-rsb-main">Мы стремимся стать лучшими для Вас!</span>
                                    </div>
                                    <div className='div-center'>
                                        <button id="b2-rsb-button">Оправить</button>
                                    </div>
                                </div>
                                <div id="b2-review-swap-block" style={{marginTop:'48px',height:'100px'}}>
                                    <span id="b2-rsb-title">ОБМЕНЯЕМ ТОВАР</span><br/>
                                    <div className='div-center'>
                                        <span id="b2-rsb-main">Мы стремимся стать лучшими для Вас!</span>
                                    </div>
                                    <div className='div-center'>
                                        <span id="<div className='div-center'>">правила обмена</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div id='b2-descriptions'>
                            {props.item.info.map(el=>
                                (<div id="b2-d-block">
                                    
                                    <div id="b2-db-title" >
                                        {el[0]}
                                    </div>

                                     <div id="b2-db-main">
                                    <span id="b2-db-m-text">{el[1].split('\n').map((line, index) => (
                                        
                                        <>{line}
                                        <br /></>
                                       
                                    ))}</span>
                                    </div>
                                </div>)
                            )}
                            <div id="b2-d-block" style={{marginTop: '35px'}}>
                                    
                                    <div id="b2-db-title" >
                                        Отправка
                                    </div>

                                     <div id="b2-db-main">
                                    <span id="b2-db-m-text">Шото-там</span>
                                    </div>
                                </div>
                            <div id="b2-d-block">
                                    
                                    <div id="b2-db-title" >
                                        Оплата
                                    </div>

                                     <div id="b2-db-main">
                                    <span id="b2-db-m-text">Шото-там</span>
                                    </div>
                                </div>
                    </div>
                </div>
                
            </div>
      </div>
    )}
  }


export default ShowFullItem
