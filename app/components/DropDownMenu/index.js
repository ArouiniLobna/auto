/**
 *
 * DropDownMenu
 *
 */

import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DropDownMenu({ currentValueInput, options, handleOptionSelection }) {
	const filteredItems = useCallback(
		() => {
			let filteredOptions = [];
			if (currentValueInput && currentValueInput.length > 0) {
				for (let i = 0; i < options.length; i++) {
					const txtValue = options[i].name;
					if (txtValue.toLowerCase().indexOf(currentValueInput.toLowerCase()) > -1) {
						filteredOptions.push(options[i]);
					}
				}
			} else {
				filteredOptions = options;
			}
			return filteredOptions;
		},
		[ currentValueInput ]
	);
	return (
		<div>
			{filteredItems().length > 0 ? (
				<ul className="dropdown-menu">
					{filteredItems().map((option) => {
						return (
							<li value={option.name} key={option.name}>
								<img className="dropdow-menu-flag" src={option.flag} />
								<a onClick={handleOptionSelection}>{option.name}</a>
							</li>
						);
					})}
				</ul>
			) : (
				<p className="dropdown-menu">No items match your search!</p>
			)}
		</div>
	);
}

DropDownMenu.propTypes = {
	handleOptionSelection: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	currentValueInput: PropTypes.string
};

export default memo(DropDownMenu);
