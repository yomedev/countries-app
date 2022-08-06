import axios from "axios";

export const getCountries = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
}

export const getCountriesMin = async () => {
  const countries = await getCountries()
  return countries.map((country: any) => ({
    id: country.cca2,
    flagUrl: country.flags.svg,
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital,
  }));
}

export const getCountryById = async (id: any[]) => {
  const response = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${id?.join(',')}`)
  
  return response.data.map((country: any) => ({
    id: country.cca2,
    flagUrl: country.flags.svg,
    name: country.name.common,
    nativeName: Object.values<{ official: string }>(country.name.nativeName)[0].official,
    population: country.population,
    region: country.region,
    capital: country.capital,
    borders: country.borders,
    subregion: country.subregion,
    tld: country.tld,
    currencies: Object.values<{ name: string }>(country.currencies)[0].name,
    languages: Object.values(country.languages)
  }))
}

