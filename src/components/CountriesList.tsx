import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountryListItem from './CountryListItem'
import { CountriesService } from '../services/CountriesService'
import { useFetch } from '../hooks/useFetch';
import Searchbar from './Searchbar';
import Filterbar from './Filterbar';
import Loader from './Loader';
import { useObserver } from '../hooks/useObserver';
import { useFilter } from '../hooks/useFilteredSearch';

interface ICountryState {
  id: string,
  flagUrl: string,
  name: string,
  population: number,
  region: string,
  capital: string[],
}

function CountriesList() {
  const [countriesInfo, setCountriesInfo] = useState<ICountryState[]>([]);
  const [filter, setFilter] = useState({ region: 'All', query: '' });
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const lastElement = useRef<HTMLDivElement | null>(null);
  // useFilter(countriesInfo, filter.region, async () => {
  //   const filteredCountris = await CountriesService.getCountriesByRegion(filter.region);
  //   setCountriesInfo(filteredCountris);
  // });

  const [fetchCountries, isCountriesLoading, countriesError] = useFetch(async () => {
    const countries = await CountriesService.getCountries(limit, page, filter.region)
    if (filter.region !== 'All') {
      setCountriesInfo([...countriesInfo, ...countries].filter((country: ICountryState) => country.region === filter.region));
      return;
    }
    setCountriesInfo([...countriesInfo, ...countries]);
  });

  useObserver(lastElement, true, [isCountriesLoading, filter.region], () => setPage(page + 1))

  useEffect(() => {
    fetchCountries();
  }, [page, filter.region])

  return (
    <Container>
      <Row sm={1} lg={2} className="d-flex justify-content-between">
        <Col ><Searchbar searchValue={filter.query} setSearchValue={(value: string) => setFilter({ ...filter, query: value })} /></Col>
        <Col className='w-auto'><Filterbar setRegionFilter={(value: string) => setFilter({ ...filter, region: value })} /></Col>
      </Row>

      <Row sm={2} lg={4} className="d-flex justify-content-between">
        {
          countriesInfo.map((item: any) =>
            <Col ref={lastElement} key={item.id} className="w-auto">
              <CountryListItem  {...item} />
            </Col>
          )
        }
      </Row>

      {
        isCountriesLoading
        &&
        <Loader />
      }

    </Container>
  )
}

export default CountriesList