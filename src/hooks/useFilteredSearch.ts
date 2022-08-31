import { useEffect, useMemo, useState } from "react";
import { CountriesService } from "../services/CountriesService";

interface ICountryState {
  id: string,
  flagUrl: string,
  name: string,
  population: number,
  region: string,
  capital: string[],
}

export const useFilter = (countries: ICountryState[], filter: string) => {

  return useMemo(() => {
    return filter !== 'All'
      ? countries.filter((country: ICountryState) => country.region === filter)
      : countries;
  }, [filter, countries]);
}

export const useFilteredSearch = (countries: ICountryState[], filter: string, query: string) => {
  const filteredCountries = useFilter(countries, filter);
  return useMemo(() => {
    return filteredCountries.filter((country: any) => country.name.toLowerCase().includes(query.toLowerCase()))
  }, [query, filteredCountries])
}