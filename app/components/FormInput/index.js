/**
 *
 * FormInput
 *
 */

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function FormInput({
	name,
	label,
	onChange,
	placeholder,
	value,
	error,
	required,
	type = 'text',
	max,
	maxlength,
	disabled,
	onClick,
	onBlur,
	onFocus
}) {
	// for current puprpose of this test, required the value to be shared within parent components with sibling components
	// that is why avoid local state to avoid unecessary renders
	return (
		<div className={disabled ? 'disabled-inputGroup' : ''} error={error && error.length > 0}>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
				max={max}
				maxLength={maxlength}
				disabled={disabled}
				onClick={onClick}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
			{/* this condition ( value ? 'floating-label' : '') make sure when field has a value, the label should be floating up */}
			<label
				htmlFor={name}
				className={`${error && error.length > 0 ? 'label-error' : ''} ${value || type === 'date'
					? 'floating-label'
					: ''}`}
			>
				{label}
			</label>
			{required ? <span className="required-label"> * required</span> : null}
			{/* when user exeed maxlength value, display warning message */}
			{maxlength && maxlength === value.length ? (
				<span className="input-warning">Max characters can be entered are: {maxlength}</span>
			) : null}
		</div>
	);
}

FormInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.any,
	error: PropTypes.array,
	type: PropTypes.string,
	required: PropTypes.bool,
	max: PropTypes.string,
	maxlength: PropTypes.number,
	disabled: PropTypes.any,
	onClick: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func
};

export default memo(FormInput);
