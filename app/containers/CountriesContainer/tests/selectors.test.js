import { selectCountriesContainerDomain, makeSelectCountries, makeSelectCountriesError, makeSelectCountriesLoading } from '../selectors';

describe('selectCountriesContainerDomain', () => {
  it(' should select the state', () => {
    const countriesState ={};
    const mockedState = {
      countriesContainer: countriesState,
    };
    expect(selectCountriesContainerDomain(mockedState)).toEqual(countriesState);
  });

});


describe('makeSelectCountries', () => {
  const countriesSelector = makeSelectCountries();
  it('should select the the countries', () => {
    const countries = [];
    const mockedState = {
      countriesContainer: {
        countries,
      },
    };
    expect(countriesSelector(mockedState)).toEqual(countries);
  });
});


describe('makeSelectCountriesError', () => {
  const countriesErrorSelector = makeSelectCountriesError();
  it('should select the the countriesError', () => {
    const countriesError = false;
    const mockedState = {
      countriesContainer: {
        countriesError,
      },
    };
    expect(countriesErrorSelector(mockedState)).toEqual(countriesError);
  });
});

describe('makeSelectCountriesLoading', () => {
  const countrieLoadingSelector = makeSelectCountriesLoading();
  it('should select the the loadingCountries', () => {
    const loadingCountries = true;
    const mockedState = {
      countriesContainer: {
        loadingCountries,
      },
    };
    expect(countrieLoadingSelector(mockedState)).toEqual(loadingCountries);
  });
});
