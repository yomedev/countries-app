import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import NavButton from '../components/NavButton'
import { getCountryById } from '../services/CountriesService'

function CountryPage() {
  const params = useParams()
  const [countryInfo, setCountryInfo] = useState<any>({})
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
      <NavButton icon={<BsArrowLeftShort size={20} />} title='Back' url={-1} />
      {
        countryInfo?.borders &&
        <div>
          <h6>Borders: </h6>
          <div>
            {
              borderCountries?.map((borderCountry: any) => <NavButton url={`/country${borderCountry.cca2}`} title={borderCountry.name.common} key={borderCountry.cca2} />)
            }
          </div>
        </div>

      }

    </Container>
  )
}

export default CountryPage