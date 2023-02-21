import styles from './Drawer.module.scss'

export const Drawer = () => {
    return (<div
        style={{ display: "none" }}
      className={styles.wrapper__overlay}><div className={styles.overlay__drawer}>
            <h2>Корзина  <img  className={styles.item__removeBtn} src="/img/deleteButton.svg" alt="delete" width={32} height={32}/></h2>
            <ul className={styles.drawer__list}>
            <li className={styles.drawer__item}>
              <img className={styles.item__img} src="/img/Sneakersimg.jpg" alt="sneakers" width={70} height={70} />
              <div className={styles.sneakers__info}>
                <p className="mb-10">Мужские Кроссовки Nike Air Max 270</p>
                <b>8499 грн.</b>
              </div>
              <img  className={styles.item__removeBtn} src="/img/deleteButton.svg" alt="delete" width={32} height={32}/>
              </li>
              <li className={styles.drawer__item}>
              <img className={styles.item__img} src="/img/Sneakersimg.jpg" alt="sneakers" width={70} height={70} />
              <div className={styles.sneakers__info}>
                <p className="mb-10">Мужские Кроссовки Nike Air Max 270</p>
                <b>8499 грн.</b>
              </div>
            <img className={styles.item__removeBtn} src="/img/deleteButton.svg" alt="delete" width={32} height={32}/>
            </li>
          </ul>
          <ul className={styles.drawer__totalBlock}>
      <li className={styles.totalBlock__item}>
                <p>Итого:</p>
                <div></div>
                <b>15789 грн.</b>
              </li>
              <li className={styles.totalBlock__item}>
                <p>Налог 5%:</p>
                <div></div>
                <b>2789 грн.</b>
                </li>
          </ul>
          <button className={styles.greenBtn} type="button">Оформить заказ <img src="/img/Arrow.svg" alt="arrow"/></button>
        </div>
    </div>)
}