const CityDetailCard = (props) => {
	return (
		<>
			<div className="city-detail bg-gray-300 mx-auto">
				<h1>{props.city.name}</h1>
				<div>
					<img id="show-img" src={props.city.image} alt="City_Image" />
				</div>
				<div>
					<h2>State: {props.city.state}</h2>
					<h2>Country: {props.city.country}</h2>
				</div>
			</div>
		</>
	);
};

export default CityDetailCard;
