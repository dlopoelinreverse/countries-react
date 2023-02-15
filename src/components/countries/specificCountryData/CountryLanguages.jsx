import React, { useEffect, useState } from 'react'

export default function CountryLanguages({countryLanguages}) {
    const [languages, setLanguages] = useState("");

    console.log(Object.values(countryLanguages).join(', '));

    useEffect(() => {
        
    }, [])
  return (
    <li><span className='bold'>Languages : </span></li>
  )
}
