import React from 'react';
import CitiesCard from './CitiesCard';

const CitiesList = (props) => {
  return props.cities.map((citiesObj) => {
    return (
      <>
        <header>
          <h1>Cities</h1>
        </header>
        <ul>
          <CitiesCard
            key={citiesObj._id}
            city={citiesObj}
          />
        </ul>
      </>
    );
  });
};

export default CitiesList;
