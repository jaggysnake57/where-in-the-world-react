import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryCard from './Components/CountryCard';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import './css/App.css';
import CountryPage from './pages/CountryPage';
import {
	clearError,
	getAllCountries,
	selectCountries,
} from './features/countries/countrySlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Components/Modal';
import FlipMove from 'react-flip-move';

function App() {
	const [lightMode, setLightMode] = useState(false);
	const [region, setRegion] = useState('all');

	const { allCountries, searchedCountries, error } = useSelector(
		selectCountries
	);
	const dispatch = useDispatch();
	const closeModal = () => {
		dispatch(clearError());
	};

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

	useEffect(() => {
		const body = document.body.classList;
		lightMode ? body.add('lightMode') : body.remove('lightMode');
	}, [lightMode]);

	return (
		<div className="App">
			<Router>
				<Header lightMode={lightMode} setLightMode={setLightMode} />
				{/* TODO animate enter and leaving of modal */}
				{error && (
					<FlipMove
						appearAnimation="accordionVertical"
						leaveAnimation="fade">
						<Modal
							message={error.message}
							closeModal={closeModal}
						/>
					</FlipMove>
				)}
				<Switch>
					<Route exact path="/">
						<SearchBar setRegion={setRegion} region={region} />
						<section className="container countryGrid">
							{/* TODO - cleaner code */}
							{searchedCountries.length
								? searchedCountries?.map((country) =>
										region === 'all' ||
										country.region === region ? (
											<CountryCard
												key={country.alpha3Code}
												countryDetails={country}
											/>
										) : (
											''
										)
								  )
								: allCountries?.map((country) =>
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
