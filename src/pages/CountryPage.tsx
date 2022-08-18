import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import NavButton from '../components/NavButton'
import { useFetch } from '../hooks/useFetch'
import { CountriesService } from '../services/CountriesService'

interface ICountryState {
  id: string,
  flagUrl: string,
  name: string,
  nativeName: string,
  population: number,
  region: string,
  capital: string[],
  borders: string[],
  subregion: string,
  tld: string[],
  currencies: string,
  languages: string[]
}

function CountryPage() {
  const params = useParams()
  const [countryInfo, setCountryInfo] = useState<ICountryState | null>(null)
  const [borderCountries, setBorderCountries] = useState<ICountryState[]>([])

  const [fetchContry, isCountryLoading, countryError] = useFetch(async () => {
    const countryData = await CountriesService.getCountriesById(params.countryId?.toLowerCase())
    const country = countryData[0]

    setCountryInfo(country)

    if (country.borders) {
      const borders = await CountriesService.getCountriesById(country.borders.map((item: any) => item.toLowerCase()).join(','));
      setBorderCountries(borders)
    }
  });

  useEffect(() => {
    fetchContry();
  }, [params])

  return (
    <Container className='country-page'>

      <div className="my-5">
        <NavButton icon={<BsArrowLeftShort size={20} />} title='Back' url={-1} />
      </div>

      {
        isCountryLoading
          ?
          <Loader />
          :
          <Row sm={1} lg={2} className="d-flex justify-content-between">

            <Col className='d-flex justify-content-center align-items-center '>
              <img src={countryInfo?.flagUrl} />
            </Col>

            <Col className='h-100 d-flex flex-column py-4'>
              <h4 className='mb-4'>{countryInfo?.name}</h4>
              <ul>
                <Row sm={1} lg={2} className="d-flex mb-4">
                  <Col>
                    <li>Native Name: {countryInfo?.nativeName}</li>
                    <li>Population: {countryInfo?.population.toLocaleString()}</li>
                    <li>Region: {countryInfo?.region}</li>
                    <li>Sub Region: {countryInfo?.subregion}</li>
                    <li>Capital: {countryInfo?.capital.join(', ')}</li>
                  </Col>

                  <Col>
                    <li>Top Level Domain: {countryInfo?.tld.join(', ')}</li>
                    <li>Currencies: {countryInfo?.currencies}</li>
                    <li>Languages: {countryInfo?.languages.join(', ')}</li>
                  </Col>
                </Row>

                {
                  countryInfo?.borders &&
                  <li
                    className='d-flex align-items-center gap-2 flex-wrap'
                  >
                    Border Countries: {borderCountries.map((country: any) =>
                      <NavButton url={`/country/${country.id}`} title={country.name} key={country.id} />
                    )}
                  </li>
                }

              </ul>

            </Col>
          </Row>
      }
    </Container>
  )
}

export default CountryPage

