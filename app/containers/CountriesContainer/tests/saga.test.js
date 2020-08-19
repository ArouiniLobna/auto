/**
 * Test sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_COUNTRIES } from '../constants';

import { fetchCountriesLoad, loadCountries } from '../saga';

describe('countriesContainerSaga Saga', () => {
	describe('loadCountries Saga', () => {
		const loadCountriesSaga = loadCountries();

		it('should start task to watch for LOAD_COUNTRIES action', () => {
			const takeLatestDescriptor = loadCountriesSaga.next().value;
			expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_COUNTRIES, fetchCountriesLoad));
		});
	});
});
