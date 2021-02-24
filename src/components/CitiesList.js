import React from 'react';
import CitiesCard from './CitiesCard';

const CitiesList = (props) => {
	const cities = props.cities.map((citiesObj) => {
		return <CitiesCard key={citiesObj._id} cities={citiesObj} />;
	});

	return <ul>{cities}</ul>;
};

export default CitiesList;
