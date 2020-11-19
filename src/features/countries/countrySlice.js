import { createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';

export const countrySlice = createSlice({
	name: 'country',
	initialState: {
		countries: [],
		country: null,
	},
	reducers: {
		allCountries: (state, action) => {
			state.countries = action.payload;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const {
	allCountries,
	decrement,
	incrementByAmount,
} = countrySlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
	setTimeout(() => {
		dispatch(incrementByAmount(amount));
	}, 1000);
};

export const getAllCountries = () => async (dispatch) => {
	const { data } = await api.getAllCountries();

	dispatch(allCountries(data));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCountry = (state) => state.country;

export default countrySlice.reducer;
