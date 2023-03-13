import styles from 'components/Buttons/BackBtn/ButtonBack.module.scss'

export const ButtonBack = ({ onCloseDrawer }) => {
    console.log(styles)
    return(<button className={styles.greenBtnBack} type='button' onClick={onCloseDrawer}><img className={styles.arrowBack} src='/img/arrowBack.svg' alt='back'/> Вернуться назад</button>)
}