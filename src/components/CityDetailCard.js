const CityDetailCard = (props) => {
	return (
		<>
			<div className="city-detail bg-gray-300">
				<h1>{props.city.name}</h1>
				<img id="show-img" src={props.city.image} alt="City_Image" />
				<div>
					<h2>State: {props.city.state}</h2>
					<h2>Country: {props.city.country}</h2>
				</div>
			</div>
		</>
	);
};

export default CityDetailCard;
