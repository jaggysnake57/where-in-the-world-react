import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
	getOneCountry,
	selectCountries,
} from '../features/countries/countrySlice';

import '../css/pages/CountryPage.css';
import { useDispatch, useSelector } from 'react-redux';

const CountryPage = () => {
	const { country } = useParams();
	const dispatch = useDispatch();
	const { oneCountry, alphaCodeIndex } = useSelector(selectCountries);

	useEffect(() => {
		dispatch(getOneCountry(country));
	}, [dispatch, country]);

	const convertToString = (arr) => {
		if (typeof arr !== 'undefined') {
			let toConvert = arr.map((item) => {
				return item.name;
			});
			return toConvert.join(', ');
		}
	};

	return (
		<div className="countryPage">
			<div className="container">
				<Link to="/">
					<button className="btn btnBack">
						<FontAwesomeIcon icon={faArrowLeft} /> Back
					</button>
				</Link>
				<div className="mainContent">
					{/* <div
						className="flag"
						style={{
							backgroundImage: `url(${oneCountry[0]?.flag})`,
						}}></div> */}

					<img src={oneCountry[0]?.flag} alt="" />
					<div className="countryDetails">
						<h1>{oneCountry[0]?.name}</h1>
						<div className="countryBody">
							<div className="col">
								<h4>
									Native Name:{' '}
									<span>{oneCountry[0]?.native}</span>
								</h4>
								<h4>
									Population:{' '}
									<span>
										{oneCountry[0]?.population.toLocaleString()}
									</span>
								</h4>
								<h4>
									Region: <span>{oneCountry[0]?.region}</span>
								</h4>
								<h4>
									Sub Region:{' '}
									<span>{oneCountry[0]?.subregion}</span>
								</h4>
								<h4>
									Capital:{' '}
									<span>{oneCountry[0]?.capital}</span>
								</h4>
							</div>
							<div className="col">
								<h4>
									Top Level Domain:{' '}
									<span>{oneCountry[0]?.topLevelDomain}</span>
								</h4>
								<h4>
									Currencies:{' '}
									<span>
										{convertToString(
											oneCountry[0]?.currencies
										)}
									</span>
								</h4>
								<h4>
									Languages:{' '}
									<span>
										{convertToString(
											oneCountry[0]?.languages
										)}
									</span>
								</h4>
							</div>
						</div>
						<div className="borderCountriesButtons">
							<h4>Border Countries: </h4>
							<div className="buttonHolder">
								{oneCountry[0]?.borders.map((code) => (
									<Link
										to={`/${alphaCodeIndex[code]}`}
										className="btn">
										{alphaCodeIndex[code]}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryPage;
