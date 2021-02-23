import React from 'react';
import CitiesCard from './CitiesCard';

const CitiesList = (props) => {
  return props.cities.map((citiesObj) => {
    console.log(citiesObj);
    return (
      <>
        <header>
          <h1>Cities</h1>
        </header>
        <ul>
          <CitiesCard
            key={citiesObj._id}
            cities={citiesObj}
          />
        </ul>
      </>
    );
  });
};

export default CitiesList;
