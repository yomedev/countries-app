import { useEffect, useMemo } from "react";

interface ICountryState {
  id: string,
  flagUrl: string,
  name: string,
  population: number,
  region: string,
  capital: string[],
}

export const useFilter = (countries: ICountryState[], filter: string, callback: () => {}) => {
  useEffect(() => {
    callback();
  }, [filter])

  // return useMemo(() => {
  //   return countries.filter((country: ICountryState) => country.region === filter)
  // }, [filter, countries]);
}

// export const useFilteredSearch = (countries: ICountryState[], filter: string, query: string) => {
//   const filteredCountries = useFilter(countries, filter);
//   return useMemo(() => {
//     return filteredCountries.filter((country: any) => country.name.toLowerCase().includes(query.toLowerCase()))
//   }, [query, filteredCountries])
// }