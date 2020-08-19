import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the countriesContainer state domain
 */

const selectCountriesContainerDomain = (state) => state.countriesContainer || initialState;

/**
 * Other specific selectors
 */

const makeSelectCountries = () => createSelector(selectCountriesContainerDomain, (substate) => substate.countries);

const makeSelectCountriesLoading = () =>
	createSelector(selectCountriesContainerDomain, (countriesState) => countriesState.loadingCountries);

const makeSelectCountriesError = () =>
	createSelector(selectCountriesContainerDomain, (countriesState) => countriesState.countriesError);

/**
 * Default selector used by CountriesContainer
 */

const makeSelectCountriesContainer = () => createSelector(selectCountriesContainerDomain, (substate) => substate);

export default makeSelectCountriesContainer;
export { selectCountriesContainerDomain, makeSelectCountries, makeSelectCountriesLoading, makeSelectCountriesError };
