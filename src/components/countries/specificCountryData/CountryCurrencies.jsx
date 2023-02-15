import React, { useEffect, useState } from 'react'

export default function CountryCurrencies({countryCurrencies}) {
    const [currencies, setCurrencies] = useState("")

    const formatCurrencies = () => {
        const currenciesArray = Object.values(countryCurrencies);
        const currenciesNamesArray = []
        for(const currency of currenciesArray) {
            currenciesNamesArray.push(currency.name)
        }
        setCurrencies(currenciesNamesArray.join(", "));
    }
    

    useEffect(() => {
        formatCurrencies()
    }, [])
  return (
    <li><span className='bold'>Currencies : </span>{currencies}</li>
  )
}
