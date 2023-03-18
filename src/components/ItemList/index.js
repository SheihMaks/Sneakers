import styles from './ItemList.module.scss';
import { Card } from 'components/Card';

// const items=[
//  {
//   "id": "1",
//   "img": "/img/sneakersImg.jpg",
//   "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//   "price": 12220
//  },
//  {
//   "id": "2",
//   "img": "/img/sneakersImg1.jpg",
//   "title": "Мужские Кроссовки Nike Air Max 270",
//   "price": 12840
//  },
//  {
//   "id": "3",
//   "img": "/img/sneakersImg2.jpg",
//   "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//   "price": 11530
//  },
//  {
//   "id": "4",
//   "img": "/img/sneakersImg3.jpg",
//   "title": "Кроссовки Puma X Aka Boku Future Rider",
//   "price": 13200
//  },
//  {
//   "id": "5",
//   "img": "/img/sneakersImg4.jpg",
//   "title": "Мужские Кроссовки Under Armour Curry 8",
//   "price": 14200
//  },
//  {
//   "id": "6",
//   "img": "/img/sneakersImg5.jpg",
//   "title": "Мужские Кроссовки Nike Kyrie 7",
//   "price": 14300
//  },
//  {
//   "id": "7",
//   "img": "/img/sneakersImg6.jpg",
//   "title": "Мужские Кроссовки Jordan Air Jordan 11",
//   "price": 14200
//  },
//  {
//   "id": "8",
//   "img": "/img/sneakersImg7.jpg",
//   "title": "Мужские Кроссовки Nike LeBron XVIII",
//   "price": 14300
//  },
//  {
//   "id": "9",
//   "img": "/img/sneakersImg8.jpg",
//   "title": "Мужские Кроссовки Nike Lebron XVIII Low",
//   "price": 15600
//  },
//  {
//   "id": "10",
//   "img": "/img/sneakersImg9.jpg",
//   "title": "Мужские Кроссовки Nike Blazer Mid Suede",
//   "price": 13850
//  },
//  {
//   "id": "11",
//   "img": "/img/sneakersImg10.jpg",
//   "title": "Кроссовки Puma X Aka Boku Future Rider",
//   "price": 12110
//  },
//  {
//   "id": "12",
//   "img": "/img/sneakersImg11.jpg",
//   "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
//   "price": 12320
//  }
// ]
// const items=[
//  {
//   id: 1,
//   img: "/img/sneakersImg.jpg",
//   title: "Мужские Кроссовки Nike Blazer Mid Suede",
//   price: 12220
//  },
//  {
//   id: 2,
//   img: "/img/sneakersImg1.jpg",
//   title: "Мужские Кроссовки Nike Air Max 270",
//   price: 12840
//  }]
export const ItemList = ({ items, itemsUser, onPlus, onRemove, onAddFavorites, searchValue, favorites, isLoading }) => {
  const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  
  console.log(isLoading)
    return(<ul className={styles.sneakers__list}>
          {isLoading ? [...Array(10)] : filteredItems.map((item)=>
            (<Card
              key={item.id}
              items={items}
              favorites={favorites}
              itemsUser={itemsUser}
              img={item.img}
              title={item.title}
              price={item.price}
              onPlus={onPlus}
              onRemove={onRemove}
              onAddFavorites={onAddFavorites}
              isLoading={isLoading}
              id={item.id.toString()} />)
          )}
            </ul>)
}