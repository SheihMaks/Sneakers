import styles from 'components/Drawer/Drawer.module.scss'

export const ButtonBack=({onCloseDrawer})=>{
    return(<button className={styles.greenBtn} type='button' onClick={onCloseDrawer}><img className={styles.arrowBack} src='/img/arrowBack.svg' alt='back'/> Вернуться назад</button>)
}