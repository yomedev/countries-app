import axios, { AxiosResponse } from "axios";

interface ICountry {
  cca2: string,
  flags: any,
  name: any,
  population: number,
  region: string,
  capital: string[],
  borders: string[],
  subregion: string,
  tld: string[],
  currencies: any,
  languages: any[]
}

interface ICountryCard {
  id: string,
  flagUrl: string,
  name: string,
  population: number,
  region: string,
  capital: string[],
}

export class CountriesService {
  private static countriesResponse: Promise<AxiosResponse<ICountry[], any>>;

  static {
    (async function fetchCountries() {
      CountriesService.countriesResponse = axios.get<ICountry[]>('https://restcountries.com/v3.1/all')
    })()
  }

  static getCountries = async (limit = -1, page = 1, filter: string = 'All') => {
    const response = await this.countriesResponse;
    const countries = response.data;

    let filteredCountries = filter !== 'All'
      ? countries.filter((country: ICountry) => country.region === filter)
      : countries;
    
    if (limit >= 0) {
      const a = (page - 1) * limit
      const b = limit + a;
      filteredCountries = filteredCountries.slice(a, b);
    }

    return filteredCountries.map((country: ICountry) => ({
      id: country.cca2,
      flagUrl: country.flags.svg,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital,
    }));
  }

  static getCountriesByRegion = async (region = 'All') => {
    const countries = await this.getCountries();
    const filteredCountries = region !== 'All'
      ? countries.filter((country: ICountryCard) => country.region === region)
      : countries;

    return filteredCountries;
  }

  static getCountriesById = async (id: string | undefined) => {
    const response = await axios.get<ICountry[]>(`https://restcountries.com/v3.1/alpha?codes=${id}`)

    return response.data.map((country: ICountry) => ({
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
}

// export const getCountries = async (limit: number = 12, page: number = 1) => {
//   const response = await axios.get<ICountry[]>('https://restcountries.com/v3.1/all');
//   const a = (page - 1) * limit
//   const b = limit + a;
//   const countries = response.data.slice(a, b);

//   return countries.map((country: ICountry) => ({
//     id: country.cca2,
//     flagUrl: country.flags.svg,
//     name: country.name.common,
//     population: country.population,
//     region: country.region,
//     capital: country.capital,
//   }));
// }

// export const getCountryById = async (id: string | undefined) => {
//   const response = await axios.get<ICountry[]>(`https://restcountries.com/v3.1/alpha?codes=${id}`)

//   return response.data.map((country: ICountry) => ({
//     id: country.cca2,
//     flagUrl: country.flags.svg,
//     name: country.name.common,
//     nativeName: Object.values<{ official: string }>(country.name.nativeName)[0].official,
//     population: country.population,
//     region: country.region,
//     capital: country.capital,
//     borders: country.borders,
//     subregion: country.subregion,
//     tld: country.tld,
//     currencies: Object.values<{ name: string }>(country.currencies)[0].name,
//     languages: Object.values(country.languages)
//   }))
// }

