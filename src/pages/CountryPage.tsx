import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import NavButton from '../components/NavButton'
import { getCountryById } from '../services/CountriesService'

function CountryPage() {
  const params = useParams()
  const [countryInfo, setCountryInfo] = useState<any>()
  const [borderCountries, setBorderCountries] = useState([])

  useEffect(() => {
    (async function () {
      const countryData = await getCountryById([params.countryId?.toLowerCase()])
      const country = countryData[0]

      setCountryInfo(country)

      if (country.borders) {
        const borders = await getCountryById(country.borders.map((item: any) => item.toLowerCase()));
        setBorderCountries(borders)
      }

    })()
  }, [params])

  return (
    <Container>
      <Row sm={1} className="my-5">
        <Col>
          <NavButton icon={<BsArrowLeftShort size={20} />} title='Back' url={-1} />
        </Col>
      </Row>
      <Row sm={1} lg={2} className="d-flex justify-content-between" style={{ height: 300 }}>
        <Col className='d-flex justify-content-center align-items-center ' style={{ height: 300 }}><img src={countryInfo?.flagUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Col>
        <Col className='h-100 d-flex flex-column py-4'>
          <h4 className='mb-4'>{countryInfo?.name}</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>

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

    </Container>
  )
}

export default CountryPage

