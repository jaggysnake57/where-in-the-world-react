import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Components/CountryCard.css';

const CountryCard = ({ countryDetails }) => {
	const { name, capital, region, population, flags } = countryDetails;

	return (
		<div className="countryCard">
			<Link to={`/${name.official}`}>
				<div
					className="flag"
					style={{ backgroundImage: `url(${flags.png})` }}></div>
				<div className="details">
					<h2>{name.official}</h2>
					<h3>
						Population: <span>{population?.toLocaleString()}</span>
					</h3>
					<h3>
						Region: <span>{region}</span>
					</h3>
					<h3>
						Capital: <span>{capital[0]}</span>
					</h3>
				</div>
			</Link>
		</div>
	);
};

export default CountryCard;
