import styles from 'components/Buttons/BackBtn/ButtonBack.module.scss'

export const ButtonBack = ({ onHandleClick }) => {
    console.log(styles)
    return(<button className={styles.greenBtnBack} type='button' onClick={onHandleClick}><img className={styles.arrowBack} src='/img/arrowBack.svg' alt='back'/> Вернуться назад</button>)
}