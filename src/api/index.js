import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/';
const allCountriesFields =
	'?fields=name,capital,region,population,flags,alpha3Code;';
const singleCountryFields = `${allCountriesFields}nativeName;subregion;borders;currencies;topLevelDomain;languages;`;

export const getAllCountries = () =>
	axios.get(`${baseURL}all${allCountriesFields}`);

export const getOneCountry = (country) =>
	axios.get(`${baseURL}name/${country}${singleCountryFields}`);

export const searchCountries = (search) =>
	axios.get(`${baseURL}name/${search}${allCountriesFields}`);
