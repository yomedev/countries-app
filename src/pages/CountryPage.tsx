import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCountryById } from '../services/CountriesService'

function CountryPage() {
  const params = useParams()
  
  useEffect(() => {
    (async function () {
      const country = await getCountryById(params.countryId?.toLowerCase())
      console.log(country);
      
    })()
  }, [])
  
  return (
    <div>CountryPage: {params.countryId}</div>
  )
}

export default CountryPage