import CityDetailCard from '../components/CityDetailCard';

const CityDetailPage = (props) => {
	return (
		<div>
			<CityDetailCard city={props.city} />
		</div>
	);
};

export default CityDetailPage;
