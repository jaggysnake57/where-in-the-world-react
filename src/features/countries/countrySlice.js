import { createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';

export const countrySlice = createSlice({
	name: 'country',
	initialState: {
		allCountries: [],
		oneCountry: [],
		searchedCountries: [],
		alphaCodeIndex: {},
	},
	reducers: {
		setAllCountries: (state, action) => {
			state.allCountries = action.payload;
			//map through all countries
			state.allCountries.map((country) => {
				state.alphaCodeIndex = {
					...state.alphaCodeIndex,
					[country.alpha3Code]: country.name,
				};
			});
			//add alpha code as key and country name as value
		},
		setOneCountry: (state, action) => {
			state.oneCountry = action.payload;
			// TODO - add to state as object not array
		},
		setSearchedCountries: (state, action) => {
			state.searchedCountries = action.payload;
		},
		clearSearchedCountries: (state) => {
			state.searchedCountries = [];
		},
	},
});

export const {
	setAllCountries,
	setOneCountry,
	setSearchedCountries,
	clearSearchedCountries,
} = countrySlice.actions;

export const getAllCountries = () => async (dispatch) => {
	try {
		const { data } = await api.getAllCountries();
		dispatch(setAllCountries(data));
	} catch (err) {
		console.log(err);
	}
};
export const getOneCountry = (country) => async (dispatch) => {
	try {
		const { data } = await api.getOneCountry(country);
		dispatch(setOneCountry(data));
	} catch (err) {
		console.log(err);
	}
};

export const searchForCountries = (search) => async (dispatch) => {
	try {
		const { data } = await api.searchCountries(search);
		dispatch(setSearchedCountries(data));
	} catch (err) {
		console.log(err);
	}
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCountries = (state) => state.country;

export default countrySlice.reducer;
