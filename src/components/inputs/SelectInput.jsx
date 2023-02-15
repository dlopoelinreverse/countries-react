import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCountries, selectIsLoading, setRegionFilter } from '../../features/countries/countriesSlice'

export default function SelectInput() {
  const countries = useSelector(selectCountries);  
  const isLoading = useSelector(selectIsLoading);
  
  const [regionsOptions, setRegionsOptions] = useState([]);

  const dispatch = useDispatch();
  
  const setRegions = () => {
    const regions = [];   
    countries.map(country => {
      if (!regions.includes(country.region)) {
        regions.push(country.region)
      }
    })    
    return regions;
  }

  const handleSelection = (event) => {
    const {value} = event.target;
    dispatch(setRegionFilter(value))
  }

  useEffect(() => {
   setRegionsOptions(setRegions())
  },[isLoading])

  
 
  
  return (   
    <select onChange={handleSelection}>
      <option value="reset">Filter by Region</option>
      { regionsOptions
        .sort()
        .map(region => (
          <option key={region} value={region}>{region}</option>
      ))}
    </select>  
  )
}
