import { useContext } from 'react'
import { Col } from 'react-bootstrap'
import CountryListItem from './CountryListItem'
import { CountriesContext } from '../contexts/CountriesContext';

function CountriesList() {

  const { filteredCountries } = useContext(CountriesContext);

  return (
    <>
      {
        filteredCountries.map((item: any) =>
          <Col className='p-4' key={item.id}>
            <CountryListItem  {...item} />
          </Col>
        )
      }
    </>
  )
}

export default CountriesList