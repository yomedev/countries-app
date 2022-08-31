import React, { useContext } from 'react'
import { Dropdown } from 'react-bootstrap'
import { CountriesContext } from '../contexts/CountriesContext'
import CustomToggle from './CustomToggle'

const REGIONS = [
  'All',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania'
]

function Filterbar() {

  const { filter, setRegion } = useContext(CountriesContext);

  return (
    <Dropdown className='my-2' >
      <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
        {filter.region === 'All' ? 'Filter by Region' : filter.region}
      </Dropdown.Toggle>

      <Dropdown.Menu className='border-0 shadow-sm'>
        {REGIONS.map((item: string) =>
          <Dropdown.Item key={item} onClick={() => setRegion(item)}>
            {item}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Filterbar