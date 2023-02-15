import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CountryCard({...props}) {
  const {theme, country} = props;
  const {name} = country;  
  
  return (
    <li className={`country-card ${theme}`}>
      <Link to={`/country/${name.common}`} state={{country : country}}>        
        <h2>{name.common}</h2>
      </Link>
    </li>
  )
}
