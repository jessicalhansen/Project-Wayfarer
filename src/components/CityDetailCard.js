const CityDetailCard = (props) => {
	return (
		<>
			<h1>{props.city.name}</h1>
			<h2>
				{props.city.state}, {props.city.country}
			</h2>
			<aside>{props.city.image}</aside>
			{/* <h1>City Name</h1>
			<h2>State, Country</h2>
			<aside>Image</aside> */}
		</>
	);
};

export default CityDetailCard;
