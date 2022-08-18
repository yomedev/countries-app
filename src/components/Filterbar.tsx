import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

const REGIONS = [
  'All',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania'
]

type filterbarPropsType = {
  setRegionFilter: (region: string) => void
}

function Filterbar({ setRegionFilter }: filterbarPropsType) {
  const [region, setRegion] = useState('All')

  return (
    <Dropdown className='mb-4'>
      <Dropdown.Toggle
        className='shadow-sm px-4 border-0' id="dropdown-basic">
        {region === 'All' ? 'Filter by Region' : region}
      </Dropdown.Toggle>

      <Dropdown.Menu className='border-0 shadow-sm'>
        {REGIONS.map((item: string) =>
          <Dropdown.Item
            key={item}
            style={{ fontSize: 14 }}
            onClick={() => {
              setRegion(item)
              setRegionFilter(item)
            }}
          >
            {item}
          </Dropdown.Item>
        )
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Filterbar