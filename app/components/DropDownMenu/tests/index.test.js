/**
 *
 * Tests for DropDownMenu
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { mount } from 'enzyme';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import DropDownMenu from '../index';

describe('<DropDownMenu />', () => {
	let props;
	let wrapper;

	beforeEach(() => {
		props = {
			currentValueInput: null,
			options: [
				{ flag: 'https://restcountries.eu/data/mar.svg', name: 'Morocco' },
				{ flag: 'https://restcountries.eu/data/aus.svg', name: 'Australia' }
			],
			handleOptionSelection: jest.fn(() => 'handleOptionSelection')
		};
		wrapper = mount(<DropDownMenu {...props} />);
	});
	it('Expect to not log errors in console', () => {
		const spy = jest.spyOn(global.console, 'error');
		render(<DropDownMenu {...props} />);
		expect(spy).not.toHaveBeenCalled();
	});

	it('expect when no value entered in the textbox, render all options', () => {
		expect(wrapper.find('li').length).toBe(props.options.length);
	});

	it('expect when an option is clicked, triggers handleOptionSelection()', () => {
		const liElem = wrapper.find('li').at(0).find('a');
		liElem.simulate('click');
		expect(props.handleOptionSelection).toHaveBeenCalled();
	});

	it('expect when a value entered in the textbox matchs part of an option name, render only that option', () => {
		wrapper.setProps({ currentValueInput: 'moroc' });
		expect(wrapper.find('li').length).toBe(1);
	});

	it('expect when a value entered in the textbox matchs part of more then one option name, render all matching options', () => {
		wrapper.setProps({ currentValueInput: 'r' });
		expect(wrapper.find('li').length).toBe(2);
	});
	it('expect when a value entered in the textbox  does not matchs any options name available, dont render any li', () => {
		wrapper.setProps({ currentValueInput: 'b' });
		expect(wrapper.find('li').length).toBe(0);
	});

	/**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
	it.skip('Should render and match the snapshot', () => {
		const { container: { firstChild } } = render(<DropDownMenu />);
		expect(firstChild).toMatchSnapshot();
	});
});
