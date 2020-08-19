/**
 *
 * CountriesContainer
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import DropDownSkeleton from 'components/DropDownSkeleton';
import DropDownInput from 'components/DropDownInput';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCountriesContainer, {
	makeSelectCountries,
	makeSelectCountriesLoading,
	makeSelectCountriesError
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadCountries } from './actions';

export function CountriesContainer({ handleloadCountries, countries, loadingCountries, countryError }) {
	useInjectReducer({ key: 'countriesContainer', reducer });
	useInjectSaga({ key: 'countriesContainer', saga });

	useEffect(() => {
		handleloadCountries();
		// return () => {
		//   // reset state on umount
		// };
	}, []);

	if (loadingCountries || loadingCountries === null) {
		return <DropDownSkeleton />;
	}

	return <DropDownInput options={countries} countryError={countryError} />;
}

CountriesContainer.propTypes = {
	handleloadCountries: PropTypes.func.isRequired,
	countries: PropTypes.array,
	loadingCountries: PropTypes.any,
	countryError: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
	countriesContainer: makeSelectCountriesContainer(),
	countries: makeSelectCountries(),
	loadingCountries: makeSelectCountriesLoading(),
	countryError: makeSelectCountriesError()
});

export function mapDispatchToProps(dispatch) {
	return {
		handleloadCountries: () => {
			dispatch(loadCountries());
		}
	};
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(CountriesContainer);
