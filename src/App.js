import { useState, useEffect } from 'react'
import axios from 'axios';
import { Card } from './components/Card'
import { Drawer } from './components/Drawer';
import { Header } from './components/Header';


function App() {
  const [items, setItems] = useState([])
  const [itemsUser, setItemsUser] = useState([])
  const [searchValue,setSearchValue]=useState('')
  const [isOpenDrawer, setIsOpenDrawer]=useState(false)
  
  useEffect(() => {
    // fetch('https://63fd1397677c415873196c8d.mockapi.io/items').then(res => { return res.json() }).then(res => setItems(res))
    axios.get('https://63fd1397677c415873196c8d.mockapi.io/items').then(res => setItems(res.data))
    axios.get('https://63fd1397677c415873196c8d.mockapi.io/cart').then(res=> setItemsUser(res.data))
  },[])


  const openDrawer = () => {
    setIsOpenDrawer(true)
  }

  const onSearchValue = (event) => {
    setSearchValue(event.target.value)
    console.log(searchValue)
}

  const closeDrawer = () => {
    setIsOpenDrawer(false)
  }

  const onAddCard = (data) => {
    axios.post('https://63fd1397677c415873196c8d.mockapi.io/cart', data)
    setItemsUser(prev=>[...prev,data])
  }
  
  const onDeleteCard = (id) => {
    // setItemsUser(itemsUser.filter(item=> item.id!==id))
    axios.delete(`https://63fd1397677c415873196c8d.mockapi.io/cart/${id}`, id)
    
  }
  return (
    <div className="wrapper">
      {isOpenDrawer && <Drawer items={itemsUser} onCloseDrawer={closeDrawer} onDeleteCard={onDeleteCard} />}
      <Header
        onOpenDrawer={openDrawer} />
      <div className='content p-40'>
        <div className="d-flex justify-between align-center mb-40">
          <h1>{searchValue ? `Идет поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search__box">
            <img src='/img/search-icon.svg' alt="search" width={14} height={14}/>
            <input type="text" value={searchValue} onChange={onSearchValue} placeholder='Поиск...'/>
          </div>
          </div>
        <ul className="sneakers__list">
          {items && items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item)=>{
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
