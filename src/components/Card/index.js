import styles from './Card.module.scss'

export const Card = () => {
  return (<li className={styles.card__item}>
            <div className="d-flex flex-column">
      <div className={styles.favorite}>
                <img src="/img/unlikedButton.svg" alt="Add to favorite"/>
              </div>
              <img className={styles.card__img} src="/img/SneakersImg.jpg" alt="SneakersImg" width={133} height={112} />
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className={styles.card__order}>
                <div className="d-flex flex-column align-start">
                  <span>Цена:</span>
                  <b>12 678 грн</b>
                </div>
        <button className={styles.button__add} type="button"><img src="/img/addButton.svg" alt="add" width={32} height={32} /></button>
              </div>
            </div>
          </li>)
}