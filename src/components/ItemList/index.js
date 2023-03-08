import styles from './ItemList.module.scss';
import { Card } from 'components/Card';

export const ItemList=({items,itemsUser,onPlus,onRemove,onAddFavorites, searchValue})=>{
    return(<ul className={styles.sneakers__list}>
          {items && items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item)=>{
            return (<Card
              key={item.id}
              itemsUser={itemsUser}
              img={item.imgURL}
              title={item.title}
              price={item.price}
              onPlus={onPlus}
              onRemove={onRemove}
              onAddFavorites={onAddFavorites}
              id={item.id.toString()} />)
          })}
            </ul>)
}