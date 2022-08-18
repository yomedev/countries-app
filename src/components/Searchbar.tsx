import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

type searchbarPropsType = {
  searchValue: string,
  setSearchValue: (e: any) => void
}

function Searchbar({searchValue, setSearchValue}: searchbarPropsType) {

  return (
    <div className='shadow-sm mb-4 d-flex align-items-center rounded search-wrap' >
      <BsSearch size={20} className="mx-3" />
      <input
        placeholder='Search for a country...'
        className='rounded'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default Searchbar
