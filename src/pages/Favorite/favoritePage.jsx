import {useState} from 'react';
import {SearchBox} from 'components/SearchBox'

const FavoritePage=()=>{
    const [favoritesList, setFavorites]=useState(()=>{
        return JSON.parse(localStorage.getItem('favoritesList')) ?? []
    })
    return(<div className="d-flex justify-between align-center mb-40">><h1>{Мои закладки}</h1><SearchBox/></div>)
}