import React from 'react'

function Filterbar() {
  return (
    <select className='border-0 rounded shadow-sm px-4' style={{ height: 50, outline: 'none' }}>
      <option value="">Filter by Region</option>
    </select>
  )
}

export default Filterbar