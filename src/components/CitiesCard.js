const CitiesCard = (props) => {
	return <li key={props.cities._id}>{props.cities.name}</li>;
};

export default CitiesCard;
