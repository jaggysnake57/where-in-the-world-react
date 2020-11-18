import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Components/SearchBar.css';

const SearchBar = () => {
	return (
		<div className="searchBar">
			<div className="container">
				<form>
					<label htmlFor="">
						<FontAwesomeIcon icon={faSearch} />
					</label>
					<input
						type="text"
						onChange={() => {}}
						className="searchInput"
						placeholder="Search for a country....."
					/>
				</form>
				{/* TODO - update to correct picker */}
				<select name="region" className="regionPicker">
					<option default>Filter by Region</option>
					<option value="africa">Africa</option>
					<option value="America">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>
		</div>
	);
};

export default SearchBar;
