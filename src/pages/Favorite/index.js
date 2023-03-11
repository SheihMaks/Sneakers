import {useState} from 'react';
import {ItemList} from 'components/ItemList';
import {SearchBox} from 'components/SearchBox'

const PageFavorites=({itemsUser, onPlus, onRemove, onAddFavorites})=>{

    const [favoritesList, setFavorites]=useState(()=>{
        return JSON.parse(localStorage.getItem('favoritesList')) ?? []
    })

    const [searchFavorites,setSearchFavorites]=useState('')

    const onSearchFavorites=(event)=>{
        setSearchFavorites(event.target.value)}
    

    return(<div className="p-40"><div className="d-flex justify-between align-center mb-40">
        <h1>{searchFavorites ? `Идет поиск по запросу: "${searchFavorites}"` : "Мои закладки"}</h1>
        <SearchBox
        searchValue={searchFavorites}
        onSearchValue={onSearchFavorites}/>
        </div>
        <ItemList
        items={favoritesList}
          itemsUser={itemsUser}
          searchValue={searchFavorites}
          onPlus={onPlus}
          onRemove={onRemove}
          onAddFavorites={onAddFavorites}/></div>)
}

export default PageFavorites; 