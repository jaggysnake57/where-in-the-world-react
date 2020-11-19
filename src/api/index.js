import axios from 'axios';

const baseURL = 'https://restcountries.eu/rest/v2/';
const allCountriesFields = '?fields=name;capital;region;population;flag;';
const extraFields =
	'nativeName;subregion;borders;currencies;topLevelDomain;languages;';

export const getAllCountries = () =>
	axios.get(`${baseURL}all${allCountriesFields}`);
