const CitiesCard = (props) => {
	const cityObj = {
		id: props.cities._id,
		name: props.cities.name,
		state: props.cities.state,
		country: props.cities.country,
		image: props.cities.image,
	};

	const displayCity = () => {
		return props.showCityHandler(cityObj);
	};

	return (
		<div
			onClick={displayCity}
			key={props.cities._id}
			className="city-card bg-gray-300 border-black border-2 p-3 m-4 flex justify-between"
		>
			<img
				className="list-img"
				src={props.cities.image}
				alt={props.cities.name + ' Image'}
			/>
			<p className="text-4xl mr-6 mt-2"> {props.cities.name}</p>
		</div>
	);
};

export default CitiesCard;
