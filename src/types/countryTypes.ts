export interface ICountryResponse {
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

export interface ICountryCard {
  id: string;
  name: string;
  flagUrl: string;
  population: number;
  region: string;
  capital: string[];
}

export interface ICountryPage {
  id: string,
  flagUrl: string,
  name: string,
  nativeName: string,
  population: number,
  region: string,
  capital: string[],
  borders: string[],
  subregion: string,
  tld: string[],
  currencies: string,
  languages: string[]
}
