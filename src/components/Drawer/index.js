import styles from './Drawer.module.scss'

export const Drawer = ({onCloseDrawer,items,onDeleteCard}) => {
    return (<div
        // style={{ display: "none" }}
      className={styles.wrapper__overlay} ><div className={styles.overlay__drawer}>
            <h2>Корзина  <img onClick={onCloseDrawer} className={styles.item__removeBtn} src="/img/deleteButton.svg" alt="delete" width={32} height={32}/></h2>
            <ul className={styles.drawer__list}>
          {items.map(({img,title,price,id}) => {
            return (<li className={styles.drawer__item}
            key={id}>
              <img className={styles.item__img} src={img} alt="sneakers" width={70} height={70} />
              <div className={styles.sneakers__info}>
                <p className="mb-10">{title}</p>
                <b>{price} грн.</b>
              </div>
              <img className={styles.item__removeBtn} onClick={()=>onDeleteCard(id)} src="/img/deleteButton.svg" alt="delete" width={32} height={32}/>
              </li>)})}
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