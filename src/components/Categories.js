import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props){
    super(props)
    this.state = {
        categories:[
            { key: "cases", name: "Чехлы", categories:[
              {
                key: "prints",
                name: "ПРИНТЫ",
                categories: [
                  { key: "customDesign", name: "Свой дизайн чехлов", count: 0 },
                  { key: "creatives", name: "Креативы", count: 394 },
                  { key: "modelRange", name: "Модельный ряд", count: 228 }
                ]
              },
              {
                key: "brand",
                name: "БРЕНД ГАДЖЕТА",
                categories: [
                  { key: "apple", name: "Apple", count: 1187 },
                  { key: "samsung", name: "Samsung", count: 967 },
                  { key: "xiaomi", name: "Xiaomi", count: 715 },
                  { key: "huawei", name: "Huawei / Honor", count: 75 },
                  { key: "realme", name: "Realme", count: 100 },
                  { key: "oneplus", name: "OnePlus", count: 44 },
                  { key: "vivo", name: "Vivo", count: 32 },
                  { key: "oppo", name: "Oppo", count: 203 },
                  { key: "zte", name: "ZTE", count: 65 },
                  { key: "motorola", name: "Motorola", count: 80 },
                  { key: "infinix", name: "Infinix", count: 30 },
                  { key: "tecno", name: "TECNO", count: 108 },
                  { key: "blackview", name: "Blackview", count: 1 },
                  { key: "umidigi", name: "Umidigi", count: 2 }
                ]
              },
              {
                key: "accessoryType",
                name: "ТИП АКСЕССУАРА",
                categories: [
                  { key: "ultrathin", name: "Ультратонкий", count: 472 },
                  { key: "siliconeCase", name: "Silicone case", count: 414 },
                  { key: "bookCase", name: "Книжка", count: 450 },
                  { key: "shockproof", name: "Противоударный", count: 585 },
                  { key: "print", name: "Принт", count: 101 },
                  { key: "glitter", name: "Блестки / Стразы", count: 146 },
                  { key: "360Degrees", name: "360 градусов", count: 18 }
                ]
              },
              {
                key: "material",
                name: "МАТЕРИАЛ АКСЕССУАРА",
                categories: [
                  { key: "silicone", name: "Силикон", count: 526 },
                  { key: "tpu", name: "TPU", count: 2915 },
                  { key: "tpuPc", name: "TPU+PC", count: 823 },
                  { key: "tpuGlass", name: "TPU+Glass", count: 55 },
                  { key: "plastic", name: "Пластик", count: 658 },
                  { key: "artificialLeather", name: "Искусственная кожа", count: 615 },
                  { key: "fabric", name: "Ткань", count: 14 },
                  { key: "aluminum", name: "Алюминий", count: 8 },
                  { key: "alcantara", name: "Алькантара", count: 3 }
                ]
              },
              {
                key: "general",
                name: "ОБЩИЕ ТОВАРЫ",
                categories: [
                  { key: "casePackaging", name: "Упаковка для чехлов", count: 3 },
                  { key: "universalCases", name: "Универсальные чехлы", count: 19 }
                ]
              }
            ]}
            
          ],
          phones:[
            { key: "apple", name: "Apple" },
            { key: "samsung", name: "Samsung" },
            { key: "xiaomi", name: "Xiaomi" },
            { key: "zte", name: "ZTE" },
            { key: "tecno", name: "TECNO" },
            { key: "oppo", name: "Oppo" },
            { key: "other", name: "Другие" }
          ]
          
    }
  }

  render() {
    return (
        <div className='div-center'>
           <div className="categories-block">
                {this.state.categories.map(el =>(
                    el.categories.map(el1 => 
                    (<div onClick={el => {
                        this.props.chooseCategory(el1.key)
                        }}>{el1.name}</div>)
                        
                        ))
                        )}
            </div>  
            
        </div>
     
    )
  }
}

export default Categories
