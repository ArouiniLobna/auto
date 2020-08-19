import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { apisEndPoints } from 'constants/apisEndpoint';
import * as types from './constants';
import { loadCountriesSuccess, loadCountriesError } from './actions';

/* **************************************** fetchCountriesLoad start **************************************** */
export function* fetchCountriesLoad() {
	const endpoint = Object.assign({}, apisEndPoints());
	const url = endpoint.DUMMY_API;
	try {
		const globalData = yield call(axios.get, url);
		yield put(loadCountriesSuccess(globalData.data));
	} catch (error) {
		// console.log(error);
		yield put(loadCountriesError(error.response));
	}
}

export function* loadCountries() {
	yield takeLatest(types.LOAD_COUNTRIES, fetchCountriesLoad);
}

// Individual exports for testing
export default function* countriesContainerSaga() {
	// See example in containers/HomePage/saga.js
	yield all([ loadCountries() ]);
}
