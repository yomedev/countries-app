import React from 'react'
import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components'

function Searchbar() {
  return (
    <div className='w-50 shadow-sm mb-4 py-2 px-4 flex align-items-center rounded' style={{ color: 'hsl(0, 0%, 52%)', backgroundColor: 'hsl(0, 0%, 100%)' }}>
      <BsSearch size={20} />
      <SearchInput placeholder='Search for a country...' />
    </div>
  )
}

export default Searchbar

const SearchInput = styled.input`
  margin-left: 20px;
  border: none;
  outline: none;
  font-size: 14px;
`