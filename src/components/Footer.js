import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='div-center' style={{width: '100%', marginBottom: '70px'}}>
      <div id='in-footer'>
          <div className="footer-column" style={{ minWidth: '29.7%'}}>
          <div id="footer-img"></div>
          <div id="txt-15">
          <p >+38 (063) 433-91-52</p>
          <p>Звоните нам c 09:00 до 17:00</p>
          <p >Сб-Вс - выходные</p>
          <p >partner@itsellopt.com.ua</p>
          <p >Пишите нам в любое время.</p>
          <p >Мы ответим вам в кратчайшие сроки.</p>
          </div>
        </div>
        <div className="footer-column">
          КАТАЛОГ ТОВАРОВ
          <div>
            <p>Зарядные Устройства</p>
            <p>Аудио</p>
            <p>Автоаксессуары</p>
            <p>Кабели / Переходники</p>
            <p>Для дома / Офиса</p>
          </div>

        </div>
        <div className="footer-column">ITSELL OPT
          <div>
            <p>О компании</p>
            <p>Миссия и ценности</p>
            <p>Наши бренды</p>
            <p>Контакты</p>
          </div>
        </div>
        <div className="footer-column">КЛИЕНТАМ
          <div>
            <p>Сервисы</p>
            <p>Доставка и оплата</p>
            <p>Гарантия и возврат</p>
            <p>FAQ Дропшиппинг</p>
            <p>FAQ</p>
          </div>
        </div>
        
      </div></div>
      <div className='div-center' style={{background: '#1b2130', width: '100%'}}>
        <p>Copyright © 2024. ITsell. All rights reserved.</p>
      </div>
    </footer>
  )
}
