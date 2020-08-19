/**
 *
 * Tests for CountriesContainer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import { mount } from 'enzyme';
import DropDownSkeleton from 'components/DropDownSkeleton';
import { loadCountries } from '../actions';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';


import { CountriesContainer, mapDispatchToProps } from '../index';
import { ReactWrapper } from 'enzyme';

describe('<CountriesContainer />', () => {
  let store;
  let props;
  let wrapper;

  beforeAll(() => {
    props = {
      loadingCountries: null,
      countries:[],
      handleloadCountries: jest.fn(() => 'handleloadCountries'),
    };
    store = configureStore({});
    wrapper = mount(<Provider store={store}><CountriesContainer {...props} /></Provider>);

  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(<Provider store={store}><CountriesContainer {...props} dispatch={dispatch} /></Provider>);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should fetch the countries on mount', () => {
    render(
      <Provider store={store}>
          <CountriesContainer
           {...props}
          />
      </Provider>,
    );
    expect(props.handleloadCountries).toHaveBeenCalled();
  });
  describe('mapDispatchToProps', () => {
    describe('handleloadCountries', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleloadCountries).toBeDefined();
      });

      it('should dispatch handleloadCountries when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.handleloadCountries();
        expect(dispatch).toHaveBeenCalledWith(loadCountries());
      });
    });
  });

  it('Expect when call loading props is null which menas not yet the call triggered, display skeleton', () => {
    // wrapper.setProps({ loadingCountries: true });
    // wrapper.update();
    expect(wrapper.find(DropDownSkeleton).length).toBe(1);
  });

  it('Expect when call loading props is true, display skeleton', () => {
    wrapper.setProps({ loadingCountries: true });
    wrapper.update();
    expect(wrapper.find(DropDownSkeleton).length).toBe(1);
  });

  
  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<CountriesContainer />);
    expect(firstChild).toMatchSnapshot();
  });
});
