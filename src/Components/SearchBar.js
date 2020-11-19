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

const SearchBar = ({ setRegion }) => {
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
					<button
						type="button"
						className="btn"
						onClick={() => handleClear()}>
						reset
					</button>
				</form>
				{/* TODO - update to correct picker */}
				<select
					name="region"
					className="regionPicker"
					onChange={(e) => setRegion(e.target.value)}>
					<option default value="all">
						Filter by Region
					</option>

					<option value="all">All</option>
					<option value="Africa">Africa</option>
					<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>
		</div>
	);
};

export default SearchBar;
