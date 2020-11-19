import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryCard from './Components/CountryCard';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import './css/App.css';
import CountryPage from './pages/CountryPage';
import {
	getAllCountries,
	selectCountries,
} from './features/countries/countrySlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const [lightMode, setLightMode] = useState(false);
	const [region, setRegion] = useState('all');

	const { allCountries } = useSelector(selectCountries);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

	return (
		<div className="App">
			<Router>
				<Header lightMode={lightMode} setLightMode={setLightMode} />
				<Switch>
					<Route exact path="/">
						<SearchBar setRegion={setRegion} />
						<section className="container countryGrid">
							{allCountries?.map((country) =>
								region === 'all' ||
								country.region === region ? (
									<CountryCard
										key={country.alpha3Code}
										countryDetails={country}
									/>
								) : (
									''
								)
							)}
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
