import CityDetailCard from '../components/CityDetailCard';
import NewPostComponent from '../components/postComponents/NewPostComponent';

const CityDetailPage = (props) => {
	return (
		<div>
			<CityDetailCard city={props.city} />
			<NewPostComponent  />
		</div>
	);
};

export default CityDetailPage;
