import React from 'react';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/Components/Header.css';

const Header = ({ lightMode, setLightMode }) => {
	return (
		<header className="header">
			<div className="container">
				<h1>Where in the World?</h1>
				<button
					className="modeSwitch"
					type="button"
					onClick={() => setLightMode(!lightMode)}>
					{/* TODO - box around button removed on tab */}
					{lightMode ? (
						<>
							<FontAwesomeIcon icon={faMoonSolid} />{' '}
							<span>Dark Mode</span>
						</>
					) : (
						<>
							<FontAwesomeIcon icon={faMoon} />{' '}
							<span>Light Mode</span>
						</>
					)}
				</button>
			</div>
		</header>
	);
};

export default Header;
