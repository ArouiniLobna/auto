/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Header from 'components/layouts/atoms/Header';
import CountriesContainer from 'containers/CountriesContainer';
import styled from 'styled-components';
import GlobalStyle from '../../global-styles';
export default function App() {
	return (
		<div>
			<Header />
			<StyledAppWrapper>
				<CountriesContainer />
			</StyledAppWrapper>
			<GlobalStyle />
		</div>
	);
}

const StyledAppWrapper = styled.header`
	max-width: 90%;
	margin: auto;
	background: #fff;
	padding: 20px;
	border-radius: 4px;
`;
