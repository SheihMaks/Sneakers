import {useState} from 'react';
import {SearchBox} from 'components/SearchBox'

const FavoritePage=()=>{
    const [favoritesList, setFavorites]=useState(()=>{
        return JSON.parse(localStorage.getItem('favoritesList')) ?? []
    })

    const [searchFavorites,setSearchFavorites]=useState('')

    const onSearchFavorites=(event)=>{
    setSearchFavorites(event.target.value)
    }

    return(<div className="d-flex justify-between align-center mb-40">
        <h1>{searchFavorites ? `Идет поиск по запросу: "${searchValue}"` : Мои закладки}</h1>
        <SearchBox
        searchValue={searchFavorites}
        onSearchValue={onSearchFavorites}/></div>)
}