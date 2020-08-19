/*
 *
 * CountriesContainer reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  countries: null,
  loadingCountries: null,
  countriesError: false,
};

/* eslint-disable default-case, no-param-reassign */
const countriesContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOAD_COUNTRIES:
        draft.countriesError = false;
        draft.loadingCountries = true;
        break;
      case types.LOAD_COUNTRIES_SUCCESS:
        draft.countriesError = false;
        draft.loadingCountries = false;
        draft.countries = action.countries;
        break;
      case types.LOAD_COUNTRIES_ERROR:
        draft.countriesError = action.error;
        draft.loadingCountries = false;
        break;
    }
  });

export default countriesContainerReducer;
