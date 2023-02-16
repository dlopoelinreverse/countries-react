import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountryNameFilter } from '../../features/countries/countriesSlice';
import { selectTheme } from '../../features/theme/themeSlice'

export default function SearchBar() {
    const theme = useSelector(selectTheme);

    const dispatch = useDispatch()

    const handleSearch = (event) => {
      const {value} = event.target;
      dispatch(setCountryNameFilter(value.toLowerCase()))
    }
  return (
    <div className={`search-bar-container ${theme}`}>
    <span>loupe</span>
    <input type="text" placeholder='Search for a country...' onChange={handleSearch}/>
    </div>
  )
}
