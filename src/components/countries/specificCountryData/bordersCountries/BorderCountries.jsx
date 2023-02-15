import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCountries } from '../../../../features/countries/countriesSlice';
import CountryBadge from './CountryBadge';

export default function BorderCountries({...props}) {
    const {theme, borders } = props;
    const countries = useSelector(selectCountries)
    const [bordersCountries, setBordersCountries] = useState([])

    useEffect(() => {
        setBordersCountries(countries.filter(country => borders.includes(country.fifa)));
    }, [countries, borders])

    
  return (
    <ul className={`border-countries-container ${theme}` }>
        {bordersCountries && bordersCountries.map(borderCountry => <CountryBadge key={borderCountry.fifa} country={borderCountry} />)}
    </ul>
  )
}
 