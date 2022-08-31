import axios, { AxiosResponse } from "axios";
import { ICountryResponse } from "../types/countryTypes";

export class CountriesService {
  private static countriesResponse: Promise<AxiosResponse<ICountryResponse[], any>>;

  static {
    (async function fetchCountries() {
      CountriesService.countriesResponse = axios.get<ICountryResponse[]>('https://restcountries.com/v3.1/all')
    })()
  }

  static getCountries = async (limit = -1, page = 1, filter: string = 'All') => {
    const response = await this.countriesResponse;
    let countries = response.data;
    
    if (limit >= 0) {
      const a = (page - 1) * limit
      const b = limit + a;
      countries = countries.slice(a, b);
    }

    return countries.map((country: ICountryResponse) => ({
      id: country.cca2,
      flagUrl: country.flags.svg,
      name: country.name.common,
      population: country.population,
      region: country.region,
      capital: country.capital,
    }));
  }

  static getCountriesById = async (id: string | undefined) => {
    const response = await axios.get<ICountryResponse[]>(`https://restcountries.com/v3.1/alpha?codes=${id}`)

    return response.data.map((country: ICountryResponse) => ({
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