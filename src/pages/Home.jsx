import React from 'react';
import { useSelector } from 'react-redux';
import CountriesListing from '../components/countries/CountriesListing';
import InputsContainer from '../components/inputs/InputsContainer';
import { selectIsLoading } from '../features/countries/countriesSlice';

export default function Home() {
  const isLoading = useSelector(selectIsLoading)
  
  return (
    <div className='home'>
      {!isLoading && 
      <>
      <InputsContainer />
      <CountriesListing />
      </>
      }
    </div>
  )
}
