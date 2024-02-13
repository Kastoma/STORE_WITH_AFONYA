import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/showFullItem';
import phones from './phones.json'
import categories from './categories.json';
import PaymentPage from './components/PaymentPage';
import Items1 from './Items.json';


class App extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        orders: [],
        items: [
          {
            id: 13425,
            price: "$ 1.85 - $ 2.05",
            deliveryPrice: "₴ 0",
            title: "Updated Item 1",
            img: "13425.jpg",
            desc: "Чехол TPU+PC Army Collection для Apple iPhone XS Max (6.5\") (Зеленый)",
            category: "material",
            colors: [
              {
                color: "#FF0000",
                quantity: 3,
                pictures: ["", ""]
              },
              {
                color: "#00FF00",
                quantity: 3,
                pictures: ["", ""]
              },
              {
                color: "#0000FF",
                quantity: 3,
                pictures: ["", ""]
              }
            ],
            info:[['Хакактеристики', 'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'],
                  ['Описание', 'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'],

          ],
            publicationDate: "Sat Jan 13 2024",
            quantity: 3
          },
          {
            id: 12345,
            price: 19.99,
            deliveryPrice: 4.99,
            title: "Updated Item 2",
            img: "12345.jpg",
            desc: "Updated Description 2",
            category: "accessoryType",
            info:[['Хакактеристики', 'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'],
            ['Описание', 'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'],

    ],
            colors: [
              {
                color: "#FFFF00",
                quantity: 2,
                pictures: ["", ""]
              },
              {
                color: "#FF00FF",
                quantity: 2,
                pictures: ["", ""]
              },
              {
                color: "#00FFFF",
                quantity: 2,
                pictures: ["", ""]
              }
            ],
            publicationDate: "Fri Jan 12 2024",
            quantity: 2
          },
          {
            id: 67890,
            price: 15.49,
            deliveryPrice: 2.99,
            title: "Updated Item 3",
            img: "67890.jpg",
            desc: "Updated Description 3",
            category: "brand",
            info:[['Хакактеристики', 'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'],
            ['Описание', 'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'],

    ],
            colors: [
              {
                color: "#FFFFFF",
                quantity: 5,
                pictures: ["", ""]
              }
            ],
            publicationDate: "Sun Jan 14 2024",
            quantity: 5
          },
          {
            id: 24680,
            price: 7.99,
            deliveryPrice: 1.99,
            title: "Updated Item 4",
            img: "24680.jpg",
            desc: "Updated Description 4",
            category: "prints",
            colors: [],
            publicationDate: "Thu Jan 11 2024",
            info:[['Хакактеристики', 'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'],
            ['Описание', 'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'],

    ],
            quantity: 1
            
          },
          {
            id: 13579,
            price: 12.99,
            deliveryPrice: 3.49,
            title: "Updated Item 5",
            img: "13579.jpg",
            desc: "Updated Description 5",
            info:[['Хакактеристики', 'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'],
            ['Описание', 'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'],

    ],
            category: "general",
            colors: [
              {
                color: "#000000",
                quantity: 4,
                pictures: ["", ""]
              }
            ],
            publicationDate: "Mon Jan 15 2024",
            quantity: 4
          },
          {
            id: 98765,
            price: 8.49,
            deliveryPrice: 2.49,
            title: "Updated Item 6",
            img: "98765.jpg",
            info:[['Хакактеристики', 'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'],
            ['Описание', 'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'],

    ],
            desc: "Updated Description 6",
            category: "material",
            colors: [
              {
                color: "#FF8000",
                quantity: 2,
                pictures: ["", ""]
              },
              {
                color: "#0080FF",
                quantity: 2,
                pictures: ["", ""]
              }
            ],
            publicationDate: "Wed Jan 17 2024",
            quantity: 2
          },
          {
            id: 54321,
            price: 14.99,
            deliveryPrice: 3.99,
            title: "Чехол Denim with MagSafe для Apple iPhone 15 Pro (6.1)",
            img: "54321.jpg",
            info:[['Хакактеристики', 'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'],
            ['Описание', 'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'],

    ],
            desc: "Updated Description 7",
            category: "accessoryType",
            colors: [
              {
                color: "#494542",
                quantity: 3,
                pictures: ["54321(1)", "54321(2)", "54321(3)", "54321(4)"]
              },{
                color: "#e54d4c",
                quantity: 3,
                pictures: ["54321(8)", "54321(9)", "54321(10)"]
              },{
                color: "#ea694a",
                quantity: 3,
                pictures: ["54321(11)", "54321(12)", "54321(13)"]
              },{
                color: "#383f37",
                quantity: 3,
                pictures: ["54321(5)", "54321(6)", "54321(7)"]
              },{
                color: "#63b8f1",
                quantity: 3,
                pictures: ["54321(14)", "54321(15)", "54321(16)"]
              },
            ],
            publicationDate: "Tue Jan 16 2024",
            quantity: 3
          }],
        currentItems: [],
        showFullItem: false,
        fullItem: {},
        shownPicture: '',
        sliderPosition: 0,
        showPaymentPage: false,
        filterSearch: {
          price:{
            from:0,
            to: 1000
          },
          categories:[]
          ,colors:[],
          brands:[],
        }


      }
      this.state.currentItems = this.state.items
      this.addToOrder= this.addToOrder.bind(this)
      this.removeOrder= this.removeOrder.bind(this)
      this.chooseCategory= this.chooseCategory.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
      this.changePosition = this.changePosition.bind(this)
      this.returnPhones = this.returnPhones.bind(this)
      this.onShownPicture = this.onShownPicture.bind(this)
      this.closePaymentPage = this.closePaymentPage.bind(this)
      this.changeOrder = this.changeOrder.bind(this)

    
  }


  changeOrder(obj){
    let orderArr = this.state.orders;
    let index = orderArr.findIndex(el=> obj.id == el.id)
    orderArr[index] = obj;
    this.setState({orders: orderArr})
    console.log("App.js orders: ",this.state.orders, obj, orderArr)
    return this.state.orders
  }

  closePaymentPage(){
    const jsonData = JSON.stringify(this.state.items);
    console.log(jsonData)

   
    this.setState({showPaymentPage: !this.state.showPaymentPage})
  }

  changeFilters(obj){
    this.setState({filterSearch: obj})
  }
  returnPhones(n){
    return [phones.brands, categories.categories][n]
  }
  changePosition(step){
    this.setState({sliderPosition: this.state.sliderPosition + step})
  
  }
  onShownPicture(picture, id) {
    const itemsArray = this.state.items;
    
    const index = itemsArray.findIndex(el => el.id === id);

    if (index !== -1) {
      itemsArray[index].img = picture;
      this.setState({ items: itemsArray });
    }

  }
  onShowItem(item){ 
    this.setState({fullItem: item})
    this.setState({ showFullItem: !this.state.showFullItem})
  }
  addToOrder(item) {
    let ordersArray = [...this.state.orders].filter(el=> el.id != item.id)
    this.setState({ orders: [...ordersArray, item]})
  }
  removeOrder(item){
    this.setState({ orders: [...this.state.orders].filter(el=> el.id != item.id)})
  }
  chooseCategory(category){
    if(category == 'all'){
      this.setState({ currentItems:this.state.items})
    }else{
    this.setState({ currentItems: this.state.items.filter(el => el.category === category)})
    }}
  choosePhoneCategory(phone){
    this.setState({currentItems: this.state.items.filte(el=>el.categoryPhone == phone)})
  }
  render(){return (
    <div className='wrapper'>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      <Header showPaymentPage={this.closePaymentPage} returnPhones={this.returnPhones} orders={this.state.orders} remove={this.removeOrder}></Header>
      {this.state.showPaymentPage? <PaymentPage remove={this.removeOrder} changeOrder={this.changeOrder} orders={this.state.orders}/> :
      <>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items changeFilters={this.changeFilters} returnBrands={this.returnPhones} onShowItem={this.onShowItem} items={this.state.currentItems} onAddToCart={this.addToOrder}></Items>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShownPicture={this.onShownPicture} sliderPosition={this.state.sliderPosition} changePosition={this.changePosition} closeFullItem={this.onShowItem} item={this.state.fullItem}/>}
       </>
       }
      
      <Footer></Footer>
    </div>
  );
}}

export default App;
