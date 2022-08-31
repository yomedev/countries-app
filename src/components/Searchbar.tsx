import React, { useContext, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { CountriesContext } from '../contexts/CountriesContext';

function Searchbar() {

  const {filter, setQuery} = useContext(CountriesContext);

  return (
    <div className='shadow-sm my-2 d-flex align-items-center rounded search-wrap' >
      <BsSearch size={20} className="mx-3" />
      <input
        placeholder='Search for a country...'
        className='rounded'
        value={filter.query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default Searchbar
