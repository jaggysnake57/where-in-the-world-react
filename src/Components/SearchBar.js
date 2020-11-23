import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Components/SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	searchForCountries,
	selectCountries,
	clearSearchedCountries,
} from '../features/countries/countrySlice';
import RegionSelector from './RegionSelector';

const SearchBar = ({ setRegion, region }) => {
	const [search, setSearch] = useState('');
	const { searchedCountries } = useSelector(selectCountries);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchForCountries(search));
	};
	const handleClear = () => {
		dispatch(clearSearchedCountries());
		setSearch([]);
	};

	return (
		<div className="searchBar">
			<div className="container">
				<form onSubmit={(e) => handleSubmit(e)}>
					<label htmlFor="">
						<FontAwesomeIcon icon={faSearch} />
					</label>
					<input
						type="text"
						onChange={() => {}}
						className="searchInput"
						placeholder="Search for a country....."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>

					<button className="btn searchBtn">Search</button>
					<button
						type="button"
						className="btn btnDanger"
						onClick={() => handleClear()}>
						Reset
					</button>
				</form>

				<RegionSelector region={region} setRegion={setRegion} />
			</div>
		</div>
	);
};

export default SearchBar;
