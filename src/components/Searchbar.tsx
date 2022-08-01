import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'

type searchbarPropsType = {
  searchValue: string,
  setSearchValue: (e: any) => void
}

function Searchbar({searchValue, setSearchValue}: searchbarPropsType) {

  return (
    <div className='shadow-sm mb-4 d-flex align-items-center rounded' style={{ color: 'hsl(0, 0%, 52%)', backgroundColor: 'hsl(0, 0%, 100%)', height: 50 }}>
      <BsSearch size={20} className="mx-3" />
      <SearchInput
        placeholder='Search for a country...'
        className='rounded'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}

export default Searchbar

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  height: 100%;
`