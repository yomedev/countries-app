import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountryListItem from './CountryListItem'
import { getCountriesMin } from '../services/CountriesService'
import { useFetch } from '../hooks/useFetch';
import Searchbar from './Searchbar';



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
      <Searchbar />
      <Row xs={2} lg={4}>
        {
          countriesInfo.map((item: any) =>
            <Col key={item.id}>
              <CountryListItem {...item} />
            </Col>
          )
        }
      </Row>
    </Container>
  )
}

export default CountriesList