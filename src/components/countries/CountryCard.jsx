import React from 'react';
import { Link } from 'react-router-dom';
import { populationFormater } from '../../utils/formater';

export default function CountryCard({...props}) {
  const {theme, country } = props;
  const {name, flags, population, region, capital } = country;  

  return (
    <Link className={`country-card ${theme}`} to={`/country/${name.common}`} state={{country : country}}>        
    <li>
        <div className="top-part">
          <img src={flags.png} alt={flags.alt} />
        </div>
        <div className="bottom-part">
          <h3>{name.common}</h3>
          <ul>
            <li><span>Population : </span>{populationFormater(population)}</li>
            <li><span>Region : </span>{region}</li>
            <li><span>Capital : </span>{capital ? capital[0] : "capital not defined"}</li>
          </ul>
        </div>
    </li>
    </Link>
  )
}
