import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryBadge({country}) {
    const {name} = country
  return (
    <Link to={`/country/${name.common}`} state={{country : country}}>
    <li>{name.common}</li>
    </Link>
  )
}
