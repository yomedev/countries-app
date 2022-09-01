import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import NavButton from '../components/NavButton'
import { useFetch } from '../hooks/useFetch'
import { CountriesService } from '../services/CountriesService'
import { ICountryPage } from '../types/countryTypes'


function CountryPage() {
  const params = useParams()
  const [countryInfo, setCountryInfo] = useState<ICountryPage | null>(null)
  const [borderCountries, setBorderCountries] = useState<ICountryPage[]>([])

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
          <Row className="d-flex justify-content-between">

            <Col sm={12} md={6} lg={6} xl={5} className='d-flex justify-content-center align-items-center h-50 mb-5'>
              <img src={countryInfo?.flagUrl} />
            </Col>

            <Col sm={12} md={5} lg={5} xl={6} className='h-100 d-flex flex-column'>
              <h4 className='mb-4'>{countryInfo?.name}</h4>
              <ul>
                <Row className="d-flex justify-content-between">
                  <Col sm={12} lg={12} xl={5} className="mb-5">
                    <li><span>Native Name:</span> {countryInfo?.nativeName}</li>
                    <li><span>Population:</span> {countryInfo?.population.toLocaleString()}</li>
                    <li><span>Region:</span> {countryInfo?.region}</li>
                    <li><span>Sub Region:</span> {countryInfo?.subregion}</li>
                    <li><span>Capital:</span> {countryInfo?.capital.join(', ')}</li>
                  </Col>

                  <Col sm={12} lg={12} xl={5} className="mb-5">
                    <li><span>Top Level Domain:</span> {countryInfo?.tld.join(', ')}</li>
                    <li><span>Currencies:</span> {countryInfo?.currencies}</li>
                    <li><span>Languages:</span> {countryInfo?.languages.join(', ')}</li>
                  </Col>
                </Row>

                {
                  countryInfo?.borders &&
                  <li
                    className='d-flex align-items-center gap-2 flex-wrap'
                  >
                    <span>Border Countries:</span> {borderCountries.map((country: any) =>
                      <NavButton url={`/countries-app/country/${country.id}`} title={country.name} key={country.id} />
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

