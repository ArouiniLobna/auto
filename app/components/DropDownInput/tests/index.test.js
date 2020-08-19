/**
 *
 * Tests for DropDownInput
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { mount } from 'enzyme';
import FormInput from 'components/FormInput';
import DropDownMenu from 'components/DropDownMenu';
import { act } from 'react-dom/test-utils';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import DropDownInput from '../index';

describe('<DropDownInput />', () => {
	let props;
	let wrapper;

	beforeEach(() => {
		props = {
			options: [
				{ flag: 'https://restcountries.eu/data/mar.svg', name: 'Morocco' },
				{ flag: 'https://restcountries.eu/data/aus.svg', name: 'Australia' }
			]
		};
		wrapper = mount(<DropDownInput {...props} />);
	});
	it('Expect to not log errors in console', () => {
		const spy = jest.spyOn(global.console, 'error');
		render(<DropDownInput {...props} />);
		expect(spy).not.toHaveBeenCalled();
	});

	it('Expect to render FormInput component', () => {
		expect(wrapper.find(FormInput).length).toBe(1);
	});

	it('Expect not to render DropDownMenu component on initial render', () => {
		expect(wrapper.find(DropDownMenu).length).toBe(0);
	});

	it('when click event triggers from FormInput component, Expect to render DropDownMenu component', () => {
		wrapper.find('input[type="text"]').simulate('click');
		expect(wrapper.find(DropDownMenu).length).toBe(1);
	});

	it('when focus event triggers from FormInput component, Expect to render DropDownMenu component', () => {
		wrapper.find('input[type="text"]').simulate('focus');
		expect(wrapper.find(DropDownMenu).length).toBe(1);
	});

	it('when value entered in textbox, Expect to render DropDownMenu with same value passed to the prop currentValueInput', () => {
		wrapper.find('input[type="text"]').simulate('click');
		wrapper.find('input[type="text"]').simulate('change', {
			target: {
				value: 'aus'
			}
		});
		expect(wrapper.find(DropDownMenu).length).toBe(1);
		expect(wrapper.find(DropDownMenu).at(0).props().currentValueInput).toBe('aus');
		expect(wrapper.find(FormInput).at(0).props().value).toBe('aus');
	});

	it('when item clicked from the menu, Expect to  not render DropDownMenu', () => {
		wrapper.find('input[type="text"]').simulate('click');
		expect(wrapper.find(DropDownMenu).length).toBe(1);
		act(() => {
			wrapper.find(DropDownMenu).at(0).props().handleOptionSelection({
				preventDefault: () => {},
				target: {
					previousSibling: {
						src: 'dummy-oath'
					},
					innerHTML: 'dummy content'
				}
			});
		});
		wrapper.update();
		expect(wrapper.find(DropDownMenu).length).toBe(0);
	});

	/**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
	it.skip('Should render and match the snapshot', () => {
		const { container: { firstChild } } = render(<DropDownInput />);
		expect(firstChild).toMatchSnapshot();
	});
});
