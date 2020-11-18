import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryCard from './Components/CountryCard';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import './css/App.css';
import CountryPage from './pages/CountryPage';

function App() {
	const [lightMode, setLightMode] = useState(false);
	const countryDetails = [
		{
			name: 'Afghanistan',
			capital: 'Kabul',
			region: 'Asia',
			population: 27657145,
			flag: 'https://restcountries.eu/data/afg.svg',
		},
		{
			flag: 'https://restcountries.eu/data/ala.svg',
			name: 'Åland Islands',
			capital: 'Mariehamn',
			population: 28875,
		},
		{
			flag: 'https://restcountries.eu/data/alb.svg',
			name: 'Albania',
			capital: 'Tirana',
			population: 2886026,
		},
		{
			flag: 'https://restcountries.eu/data/dza.svg',
			name: 'Algeria',
			capital: 'Algiers',
			population: 40400000,
		},
		{
			flag: 'https://restcountries.eu/data/asm.svg',
			name: 'American Samoa',
			capital: 'Pago Pago',
			population: 57100,
		},
		{
			flag: 'https://restcountries.eu/data/and.svg',
			name: 'Andorra',
			capital: 'Andorra la Vella',
			population: 78014,
		},
		{
			flag: 'https://restcountries.eu/data/ago.svg',
			name: 'Angola',
			capital: 'Luanda',
			population: 25868000,
		},
		{
			flag: 'https://restcountries.eu/data/aia.svg',
			name: 'Anguilla',
			capital: 'The Valley',
			population: 13452,
		},
		{
			flag: 'https://restcountries.eu/data/ata.svg',
			name: 'Antarctica',
			capital: '',
			population: 1000,
		},
		{
			flag: 'https://restcountries.eu/data/atg.svg',
			name: 'Antigua and Barbuda',
			capital: "Saint John's",
			population: 86295,
		},
		{
			flag: 'https://restcountries.eu/data/arg.svg',
			name: 'Argentina',
			capital: 'Buenos Aires',
			population: 43590400,
		},
		{
			flag: 'https://restcountries.eu/data/arm.svg',
			name: 'Armenia',
			capital: 'Yerevan',
			population: 2994400,
		},
		{
			flag: 'https://restcountries.eu/data/abw.svg',
			name: 'Aruba',
			capital: 'Oranjestad',
			population: 107394,
		},
		{
			flag: 'https://restcountries.eu/data/aus.svg',
			name: 'Australia',
			capital: 'Canberra',
			population: 24117360,
		},
		{
			flag: 'https://restcountries.eu/data/aut.svg',
			name: 'Austria',
			capital: 'Vienna',
			population: 8725931,
		},
		{
			flag: 'https://restcountries.eu/data/aze.svg',
			name: 'Azerbaijan',
			capital: 'Baku',
			population: 9730500,
		},
		{
			flag: 'https://restcountries.eu/data/bhs.svg',
			name: 'Bahamas',
			capital: 'Nassau',
			population: 378040,
		},
		{
			flag: 'https://restcountries.eu/data/bhr.svg',
			name: 'Bahrain',
			capital: 'Manama',
			population: 1404900,
		},
	];

	lightMode ? console.log('light') : console.log('dark');
	return (
		<div className="App">
			<Router>
				<Header lightMode={lightMode} setLightMode={setLightMode} />
				<Switch>
					<Route exact path="/">
						<SearchBar />
						<section className="container countryGrid">
							{countryDetails?.map((country) => (
								<CountryCard countryDetails={country} />
							))}
						</section>
					</Route>
					<Route exact path="/:country" component={CountryPage} />
				</Switch>

				{/* header */}
				{/* search bar  */}
				{/* array of countries */}
			</Router>
		</div>
	);
}

export default App;
