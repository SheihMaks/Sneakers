import { useState } from 'react'
import styles from './Card.module.scss'

export const Card = ({img,title,price,onPlus}) => {
  const [added, setAdded] = useState(false)
  
  const onHandleClick = ({ img, title, price,id }) => {
    setAdded(!added)
    onPlus({img,title,price,id})
  }

  return (<li className={styles.card__item}>
            <div className="d-flex flex-column">
      <div className={styles.favorite}>
                <img src="/img/unlikedButton.svg" alt="Add to favorite"/>
              </div>
              <img className={styles.card__img} src={img} alt="SneakersImg" width={133} height={112} />
      <h5 className="mb-15">{title}</h5>
      <div className={styles.card__order}>
                <div className="d-flex flex-column align-start">
                  <span>Цена:</span>
                  <b>{price} грн</b>
                </div>
        <button className={styles.button__add} onClick={onHandleClick} type="button"><img src={ !added ? "/img/addButton.svg" : "/img/addButtonChecked.svg" } alt="add" width={32} height={32} /></button>
              </div>
            </div>
          </li>)
}