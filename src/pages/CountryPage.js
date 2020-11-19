import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

import '../css/pages/CountryPage.css';

const CountryPage = () => {
	return (
		<div className="countryPage">
			<div className="container">
				<Link to="/">
					<button className="btn btnBack">
						<FontAwesomeIcon icon={faArrowLeft} /> Back
					</button>
					{/* TODO -  use history */}
				</Link>
				<div className="mainContent">
					<img src="https://restcountries.eu/data/afg.svg" alt="" />
					<div className="countryDetails">
						<h1>country name</h1>
						<div className="countryBody">
							<div className="col">
								<h4>
									Native Name: <span>name</span>
								</h4>
								<h4>
									Population: <span>name</span>
								</h4>
								<h4>
									Region: <span>name</span>
								</h4>
								<h4>
									Sub Region: <span>name</span>
								</h4>
								<h4>
									Capital: <span>name</span>
								</h4>
							</div>
							<div className="col">
								<h4>
									Top Level Domain: <span>name</span>
								</h4>
								<h4>
									Currencies: <span>name</span>
								</h4>
								<h4>
									Languages: <span>name</span>
								</h4>
							</div>
						</div>
						<div className="borderCountriesButtons">
							<h4>Border Countries: </h4>
							<button className="btn">name</button>
							<button className="btn">name</button>
							<button className="btn">name</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryPage;
