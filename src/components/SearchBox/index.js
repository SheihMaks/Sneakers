import styles from "./SearchBox.module.scss"

export const SearchBox=({searchValue,onSearchValue})=>{
    return(<div className={styles.search__box}>
            <img src='/img/search-icon.svg' alt="search" width={14} height={14}/>
            <input type="text" value={searchValue} onChange={onSearchValue} placeholder='Поиск...'/>
          </div>)
}