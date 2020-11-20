import React, { useState } from 'react';
import '../css/Components/RegionSelector.css';

const RegionSelector = ({ setRegion, region }) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState('');

	const handleRegion = (value) => {
		setRegion(value);
	};

	return (
		<div onClick={() => setOpen(!open)} class="custom-select-wrapper">
			<div class={open ? 'custom-select open' : 'custom-select'}>
				<div class="custom-select__trigger">
					<span>
						{region === 'all' ? 'Please select a region' : region}
					</span>
					<div class="arrow"></div>
				</div>
				<div class="custom-options">
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
