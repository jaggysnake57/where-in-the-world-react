import React, { useState } from 'react';
import CountryCard from './Components/CountryCard';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';

function App() {
	const [lightMode, setLightMode] = useState(false);
	lightMode ? console.log('light') : console.log('dark');
	return (
		<div className="App">
			<Header lightMode={lightMode} setLightMode={setLightMode} />
			<SearchBar />

			<section>
				<CountryCard />
				<CountryCard />
				<CountryCard />
				<CountryCard />
				<CountryCard />
			</section>

			{/* header */}
			{/* search bar  */}
			{/* array of countries */}
		</div>
	);
}

export default App;
