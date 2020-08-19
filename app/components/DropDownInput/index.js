/**
 *
 * DropDownInput
 *
 */

import React, { memo, useState, useRef, useEffect, useCallback, Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from 'components/FormInput';
import DropDownMenu from 'components/DropDownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import styled from 'styled-components';

function DropDownInput({ options }) {
	const wrapperRef = useRef(null);
	const [ currentValueInput, setCurrentValueInput ] = useState('');
	const [ searching, setsearching ] = useState(false);
	const [ selectedDropDownFlag, setselectedDropDownFlag ] = useState(null);
	const [ isOpen, setisOpen ] = useState(false);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, false);
		return () => {
			document.removeEventListener('click', handleClickOutside, false);
		};
  }, []);
  
  // the follwoing function make sure when focus outside the Component, the drop down menu get close

	const handleClickOutside = useCallback((event) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			setisOpen(false);
		}
  });
  
  // handle the text box value changing when user enter a text

	const handleInputChange = useCallback((e) => {
		const { value } = e.target;
		setCurrentValueInput(value);
		if (searching === false) {
			setsearching(true);
		}
  });
  
  // handle case where user click or focus with TAB on the text field, the dropdown menu will opens

	const handleFocus = useCallback(() => {
		setisOpen(true);
  });
  
  // get trigered when user select an item from the dropdown menu
  // to avoid complex calculations, we stored directly current country name and the flag

	const onhandleOptionSelection = useCallback((event) => {
		event.preventDefault();
		setselectedDropDownFlag(event.target.previousSibling.src);
    setCurrentValueInput(event.target.innerHTML);
    setisOpen(false);
  
		setsearching(false);
  });

	return (
		<div ref={wrapperRef}>
			<div className="field-wrapper">
				<img className={searching || selectedDropDownFlag === null ? 'field-flag hide' : 'field-flag'} src={selectedDropDownFlag} />
				<FormInput
          onClick={handleFocus}
          onFocus={handleFocus}
					type="text"
					value={currentValueInput}
					onChange={handleInputChange}
					name="countries"
					placeholder="Select"
        />
        <FontAwesomeIcon className='dropdown-menu-chevron' icon={faAngleDown} />
			</div>
			{isOpen ? (
				<DropDownMenu
					handleOptionSelection={onhandleOptionSelection}
					options={options}
					currentValueInput={currentValueInput}
				/>
			) : null}
		</div>
	);
}

DropDownInput.propTypes = {
	options: PropTypes.array.isRequired
};

export default memo(DropDownInput);
