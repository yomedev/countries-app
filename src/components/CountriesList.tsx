import React, { useEffect, useMemo, useState } from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import CountryListItem from './CountryListItem'
import { getCountriesMin } from '../services/CountriesService'
import { useFetch } from '../hooks/useFetch';
import Searchbar from './Searchbar';
import Filterbar from './Filterbar';

function CountriesList() {

  const [countriesInfo, setCountriesInfo] = useState([]);
  const [filterRegion, setFilterRegion] = useState('All');

  const filteredCoutntries = useMemo(() => {
    if (filterRegion !== 'All') {
      return countriesInfo.filter((country: any) => country.region === filterRegion)
    }
    return countriesInfo
  }, [filterRegion, countriesInfo])

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
      <Row sm={1} lg={2} className="d-flex justify-content-between">
        <Col ><Searchbar /></Col>
        <Col className='w-auto'><Filterbar setRegionFilter={(region: string) => setFilterRegion(region)} /></Col>
      </Row>

      <Row sm={2} lg={4} className="d-flex justify-content-between">
        {
          filteredCoutntries.map((item: any) =>
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