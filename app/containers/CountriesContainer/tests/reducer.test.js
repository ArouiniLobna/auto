// import produce from 'immer';
import countriesContainerReducer from '../reducer';
import { loadCountries, loadCountriesError, loadCountriesSuccess } from '../actions';


/* eslint-disable default-case, no-param-reassign */
describe('countriesContainerReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      countries: null,
  loadingCountries: null,
  countriesError: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(countriesContainerReducer(undefined, {})).toEqual(expectedResult);
  });

  it('handles the loadCountries action', () => {
    expect(countriesContainerReducer({}, loadCountries())).toMatchSnapshot();
  });

  it('handles the loadCountriesError action', () => {
    expect(countriesContainerReducer({}, loadCountriesError())).toMatchSnapshot();
  });

  it('handles the loadCountriesSuccess action', () => {
    expect(countriesContainerReducer({}, loadCountriesSuccess())).toMatchSnapshot();
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
