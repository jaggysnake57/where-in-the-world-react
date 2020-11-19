import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../features/countries/countrySlice';

export default configureStore({
	reducer: {
		country: countryReducer,
	},
});
