import React from 'react'
import { useSelector } from 'react-redux'
import { countriesSelector } from '../../features/countries/countriesSlice'
import { selectTheme } from '../../features/theme/themeSlice';
import CountryCard from './CountryCard';

export default function CountriesListing() {
  const theme = useSelector(selectTheme);
  const countries = useSelector(countriesSelector);
  return (
   <ul className={`countries-container ${theme}`}>
      {countries.map((country, id )=> <CountryCard key={id} theme={theme} country={country} />)}
   </ul>
  )
}
