import {useState,useEffect} from 'react'
import { Card } from './components/Card'
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';

// const items = [
//   {
//     "imgURL": "/img/sneakersImg.jpg",
//     "title":"Мужские Кроссовки Nike Blazer Mid Suede",
//     "price": 12678,
//     "id":1
//   },
//   {
//     "imgURL": "/img/sneakersImg1.jpg",
//     "title":"Мужские Кроссовки Nike Air Max 270",
//     "price": 12840,
//     "id":2

//   },
//   {
//     "imgURL": "/img/sneakersImg2.jpg",
//     "title":"Мужские Кроссовки Nike Blazer Mid Suede",
//     "price": 12530,
//     'id':3

//   },
//   {
//     "imgURL": "/img/sneakersImg3.jpg",
//     "title":"Кроссовки Puma X Aka Boku Future Rider",
//     "price": 12900,
//     "id":4

//   },
//   {
//     "imgURL": "/img/sneakersImg4.jpg",
//     "title":"Мужские Кроссовки Under Armour Curry 8",
//     "price": 13600,
//     "id":5

//   },
//   {
//     "imgURL": "/img/sneakersImg5.jpg",
//     "title":"Мужские Кроссовки Nike Kyrie 7",
//     "price": 12900,
//     "id":6

//   },
//   {
//     "imgURL": "/img/sneakersImg6.jpg",
//     "title":"Мужские Кроссовки Jordan Air Jordan 11",
//     "price": 12250,
//     "id":7

//   },
//   {
//     "imgURL": "/img/sneakersImg7.jpg",
//     "title":"Мужские Кроссовки Nike LeBron XVIII",
//     "price": 11350,
//     "id":8

//   },
//   {
//     "imgURL": "/img/sneakersImg8.jpg",
//     "title":"Мужские Кроссовки Nike Lebron XVIII Low",
//     "price": 12650,
//     "id":9

//   },
//   {
//     "imgURL": "/img/sneakersImg9.jpg",
//     "title":"Мужские Кроссовки Nike Blazer Mid Suede",
//     "price": 10690,
//     "id":10

//   },
//   {
//     "imgURL": "/img/sneakersImg10.jpg",
//     "title":"Кроссовки Puma X Aka Boku Future Rider",
//     "price": 11570,
//     "id":11

//   },
//   {
//     "imgURL": "/img/sneakersImg11.jpg",
//     "title":"Мужские Кроссовки Nike Kyrie Flytrap IV",
//     "price": 13680,
//     "id":12

//   }
// ]

function App() {
  const [items, setItems] = useState([])
  const [itemsUser,setItemsUser]=useState([])
  const [isOpenDrawer, setIsOpenDrawer]=useState(false)
  
  useEffect(() => {
    fetch('https://63fd1397677c415873196c8d.mockapi.io/items').then(res => { return res.json() }).then(res => setItems(res))
  },[])


  const openDrawer = () => {
    setIsOpenDrawer(true)
  }

  const closeDrawer = () => {
    setIsOpenDrawer(false)
  }

  const onAddCard = (data) => {
    setItemsUser(prev=>[...prev,data])
  }
  
  return (
    <div className="wrapper">
      {isOpenDrawer && <Drawer items={itemsUser} onCloseDrawer={closeDrawer} />}
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
          {items && items.map((item)=>{
            return (<Card
              key={item.id}
              img={item.imgURL}
              title={item.title}
              price={item.price}
              onPlus={onAddCard}
              id={item.id} />)
          })}
            </ul>
          </div>
    </div>
  );
}

export default App;
