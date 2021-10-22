import React, { useState } from 'react';
import '../css/Components/RegionSelector.css';

const RegionSelector = ({ setRegion, region }) => {
	const [open, setOpen] = useState(false);

	const handleRegion = (value) => {
		setRegion(value);
	};
	window.addEventListener('click', function (e) {
		const select = document.querySelector('.custom-select');
		if (!select?.contains(e.target)) {
			setOpen(false);
		}
	});

	return (
		<div onClick={() => setOpen(!open)} className="custom-select-wrapper">
			<div className={open ? 'custom-select open' : 'custom-select'}>
				<div className="custom-select__trigger">
					<span>
						{region === 'all' ? 'Please select a region' : region}
					</span>
					<div className="arrow"></div>
				</div>
				<div className="custom-options">
					<span
						onClick={(e) => handleRegion(e.target.dataset.value)}
						className="custom-option"
						data-value="all">
						All
					</span>
					<span
						onClick={(e) => handleRegion(e.target.dataset.value)}
						className="custom-option"
						data-value="Africa">
						Africa
					</span>
					<span
						onClick={(e) => handleRegion(e.target.dataset.value)}
						className="custom-option"
						data-value="Americas">
						Americas
					</span>
					<span
						onClick={(e) => handleRegion(e.target.dataset.value)}
						className="custom-option"
						data-value="Asia">
						Asia
					</span>
					<span
						onClick={(e) => handleRegion(e.target.dataset.value)}
						className="custom-option"
						data-value="Europe">
						Europe
					</span>
					<span
						onClick={(e) => handleRegion(e.target.dataset.value)}
						className="custom-option"
						data-value="Oceania">
						Oceania
					</span>
				</div>
			</div>
		</div>
	);
};

export default RegionSelector;
