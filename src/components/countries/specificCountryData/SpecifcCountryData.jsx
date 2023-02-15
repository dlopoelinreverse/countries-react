import React from 'react'
import { populationFormater } from '../../../utils/formater';
import BorderCountries from './bordersCountries/BorderCountries';
import CountryCurrencies from './CountryCurrencies';

export default function SpecifcCountryData({...props}) {
    const {country, theme} = props;
    const {name, population, region, subregion, capital, tld, currencies, languages, borders} = country;

    

  return (
    <>
        <h2 className='title'>{name.common}</h2>
        <ul className='data-container'>
        <li><span className='bold'>Native Name :</span> {Object.values(name.nativeName)[0].official}</li>
        <li><span className='bold'>Population : </span>{populationFormater(population)}</li>
        <li><span className='bold'>Region : </span>{region}</li>
        <li><span className='bold'>Sub Region : </span>{subregion}</li>
        <li><span className='bold'>Capital: </span>{capital[0]}</li>
        <li><span className='bold'>Top Level Domain : </span>{tld[0]}</li>
        <CountryCurrencies countryCurrencies={currencies} />
        <li><span className='bold'>Languages : </span>{Object.values(languages).join(', ')}</li>                
        </ul>
        {borders &&
        <BorderCountries theme={theme} borders={borders}  />
        }
    </>
  )
}
