/**
 *
 * DropDownSkeleton
 *
 */

import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function DropDownSkeleton() {
	return (
		<div className="dropdown-menu-skeleton">
			<Skeleton count={2} />
			<FontAwesomeIcon className="dropdown-menu-chevron" icon={faAngleDown} />
		</div>
	);
}

DropDownSkeleton.propTypes = {};

export default DropDownSkeleton;
