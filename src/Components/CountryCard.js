import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Components/CountryCard.css';

const CountryCard = ({ countryDetails }) => {
	const { name, capital, region, population, flag } = countryDetails;
	return (
		<div className="countryCard">
			<Link to={`/${name}`}>
				<div
					className="flag"
					style={{ backgroundImage: `url(${flag})` }}></div>
				<div className="details">
					<h2>{name}</h2>
					<h3>
						Population: <span>{population}</span>
					</h3>
					<h3>
						Region: <span>{region}</span>
					</h3>
					<h3>
						Capital: <span>{capital}</span>
					</h3>
				</div>
			</Link>
		</div>
	);
};

export default CountryCard;
