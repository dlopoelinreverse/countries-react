import React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../features/theme/themeSlice'
import SearchBar from './SearchBar';
import SelectInput from './SelectInput';

export default function InputsContainer() {
    const theme = useSelector(selectTheme);
    console.log(theme);
  return (
    <div className={`inputs-container ${theme}`}>
        <SearchBar />
        <SelectInput />
    </div>
  )
}
