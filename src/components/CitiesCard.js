const CitiesCard = (props) => {
	return (
		<div
			key={props.cities._id}
			className=" bg-gray-300 border-black border-2 p-3 rounded m-4 flex justify-between"
		>
			<img
				className="list-img"
				src={props.cities.image}
				alt={props.cities.name + ' Image'}
			/>
			<p className="text-"> {props.cities.name}</p>
		</div>
	);
};

export default CitiesCard;
