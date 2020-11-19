import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryCard from './Components/CountryCard';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import './css/App.css';
import CountryPage from './pages/CountryPage';
import {
	getAllCountries,
	selectCountry,
} from './features/countries/countrySlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const [lightMode, setLightMode] = useState(false);
	const [region, setRegion] = useState('all');

	const country = useSelector(selectCountry);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCountries());
	}, []);

	lightMode ? console.log('light') : console.log('dark');
	return (
		<div className="App">
			<Router>
				<Header
					lightMode={lightMode}
					setLightMode={setLightMode}
					setRegion={setRegion}
				/>
				<Switch>
					<Route exact path="/">
						<SearchBar />
						<section className="container countryGrid">
							{country.countries?.map((country) => (
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
