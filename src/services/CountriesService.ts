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
  const country = response.data;
  return country;

  // return  {
  //   id: country.cca2,
  //   flagUrl: country.flags.svg,
  //   name: country.name.common,
  //   population: country.population,
  //   region: country.region,
  //   capital: country.capital,
  //   borders: country.borders,
  //   nativeName: country.name.nativeName,
  //   subregion: country.subregion,
  //   tld: country.tld,
  //   currencies: country.currencies,
  //   languages: country.languages
  // }
}

