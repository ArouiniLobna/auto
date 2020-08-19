import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Header from 'components/layouts/atoms/Header';
import CountriesContainer from 'containers/CountriesContainer';
import configureStore from '../../../configureStore';

import App from '../index';

const renderer = new ShallowRenderer();

describe('<App />', () => {
	let wrapper;
	let store;

	beforeEach(() => {
		store = configureStore();
		wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
	});
	it('should render and match the snapshot', () => {
		renderer.render(<App />);
		const renderedOutput = renderer.getRenderOutput();
		expect(renderedOutput).toMatchSnapshot();
	});
	it('should render <Header />', () => {
		expect(wrapper.find(Header).length).toBe(1);
	});
	it('should render <CountriesContainer />', () => {
		expect(wrapper.find(CountriesContainer).length).toBe(1);
	});
});
