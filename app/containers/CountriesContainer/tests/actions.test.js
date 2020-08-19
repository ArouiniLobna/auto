import { loadCountries, loadCountriesSuccess, loadCountriesError } from '../actions';
import * as types from '../constants';

describe('Countries actions', () => {
  describe('loadCountries Action', () => {
    it('has a type of LOAD_COUNTRIES', () => {
      const expected = {
        type: types.LOAD_COUNTRIES,
      };
      expect(loadCountries()).toEqual(expected);
    });
  });

  describe('loadCountriesError Action', () => {
    it('has a type of LOAD_COUNTRIES_ERROR', () => {
      const expected = {
        type: types.LOAD_COUNTRIES_ERROR,
      };
      expect(loadCountriesError()).toEqual(expected);
    });
  });

  describe('loadCountriesSuccess Action', () => {
    it('has a type of LOAD_COUNTRIES_SUCCESS', () => {
      const expected = {
        type: types.LOAD_COUNTRIES_SUCCESS,
      };
      expect(loadCountriesSuccess()).toEqual(expected);
    });
  });
});
