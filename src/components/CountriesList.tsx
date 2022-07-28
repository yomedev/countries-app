import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import CountryListItem from './CountryListItem'
import { getCountriesMin } from '../services/CountriesService'
import { useFetch } from '../hooks/useFetch';
import Searchbar from './Searchbar';
import Filterbar from './Filterbar';



function CountriesList() {

  const [countriesInfo, setCountriesInfo] = useState([]);


  const getCountriesInfo = async () => {
    const countries = await getCountriesMin();
    setCountriesInfo(countries);
  }

  const [fetchCountries, isCountriesLoading, countriesError] = useFetch(getCountriesInfo);

  useEffect(() => {
    fetchCountries();
  }, [])

  return (
    <Container>
      <div className='d-flex justify-content-between'>
        <Searchbar />
        <Filterbar />
      </div>

      <Row sm={2} lg={4} className="d-flex justify-content-between">
        {
          countriesInfo.map((item: any) =>
            <Col key={item.id} className="w-auto">
              <CountryListItem {...item} />
            </Col>
          )
        }
      </Row>
    </Container>
  )
}

export default CountriesList