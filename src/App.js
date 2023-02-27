import {useState} from 'react'
import { Card } from './components/Card'
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';

const items = [
  {
    imgURL: "/img/sneakersImg.jpg",
    name:"Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12678,
    id:1
  },
  {
    imgURL: "/img/sneakersImg1.jpg",
    name:"Мужские Кроссовки Nike Air Max 270",
    price: 12678,
    id:2

  },
  {
    imgURL: "/img/sneakersImg2.jpg",
    name:"Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12678,
    id:3

  },
  {
    imgURL: "/img/sneakersImg3.jpg",
    name:"Кроссовки Puma X Aka Boku Future Rider",
    price: 12678,
    id:4

  }
]

function App() {

  const [isOpenDrawer, setIsOpenDrawer]=useState(false)
  
  const openDrawer = () => {
    setIsOpenDrawer(true)
  }

  const closeDrawer = () => {
    setIsOpenDrawer(false)
  }

  return (
    <div className="wrapper">
      {isOpenDrawer && <Drawer onCloseDrawer={closeDrawer} />}
      <Header
        onOpenDrawer={openDrawer} />
      <div className='content p-40'>
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search__box">
            <img src='/img/search-icon.svg' alt="search" width={14} height={14}/>
            <input/>
          </div>
          </div>
        <ul className="sneakers__list">
          {items.map((item)=>{
            return (<Card
              key={item.id}
              img={item.imgURL}
              name={item.name}
              price={item.price}
              id={item.id} />)
          })}
            </ul>
          </div>
    </div>
  );
}

export default App;
