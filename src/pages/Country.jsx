import React from 'react'
import {useSelector } from 'react-redux';
import { Link, useLocation} from 'react-router-dom'
import SpecifcCountryData from '../components/countries/specificCountryData/SpecifcCountryData';
import { selectTheme } from '../features/theme/themeSlice';

export default function Country() {
  const theme = useSelector(selectTheme)
  const location = useLocation();
  const {country} = location.state;

  return (
    <div className={`specific-country ${theme}`}>
      <Link to="../../">Back</Link>
      <div className={`left-part ${theme}`}>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div className={`right-part ${theme}`}>
        <SpecifcCountryData country={country} theme={theme} />
      </div>
    </div>
  )
}
