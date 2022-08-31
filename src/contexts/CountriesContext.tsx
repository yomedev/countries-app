import { createContext, useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredSearch } from "../hooks/useFilteredSearch";
import { useObserver } from "../hooks/useObserver";
import { CountriesService } from "../services/CountriesService";
import { ICountryCard } from '../types/countryTypes'

interface IFilter {
  region: string,
  query: string
}

interface ICountriesProvider {
  children: JSX.Element
}

export const CountriesContext = createContext({
  filteredCountries: [] as ICountryCard[],
  isCountriesLoading: false,
  filter: {} as IFilter,
  setRegion: (region: string) => { },
  setQuery: (query: string) => { },
})

export const CountriesProvider = ({ children }: ICountriesProvider) => {

  const [countriesInfo, setCountriesInfo] = useState<ICountryCard[]>([]);
  const [filter, setFilter] = useState({ region: 'All', query: '' });
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);

  const setRegion = (region: string) => {
    setFilter({ ...filter, region: region })
  }

  const setQuery = (query: string) => {
    setFilter({ ...filter, query: query })
  }

  const lastElement = useRef<HTMLDivElement | null>(null);

  const [fetchCountries, isCountriesLoading, countriesError] = useFetch(async () => {
    const countries = await CountriesService.getCountries()
    setCountriesInfo([...countriesInfo, ...countries]);
  });

  const filteredCountries = useFilteredSearch(countriesInfo, filter.region, filter.query);

  useObserver(lastElement, true, [isCountriesLoading], () => setPage(page + 1))

  useEffect(() => {
    fetchCountries();
  }, [page])

  return (
    <CountriesContext.Provider value={{ filteredCountries, isCountriesLoading, filter, setRegion, setQuery }}>
      {children}
    </CountriesContext.Provider>
  )
}
