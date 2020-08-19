/*
 *
 * CountriesContainer actions
 *
 */

import * as types from './constants';

export function loadCountries() {
	return {
		type: types.LOAD_COUNTRIES
	};
}
export function loadCountriesSuccess(countries) {
	return {
		type: types.LOAD_COUNTRIES_SUCCESS,
		countries
	};
}

export function loadCountriesError(error) {
	return {
		type: types.LOAD_COUNTRIES_ERROR,
		error
	};
}
