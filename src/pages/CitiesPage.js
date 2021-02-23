import React from 'react';
import CitiesList from '../components/CitiesList';

class CitiesPage extends React.Component {
	state = {
		cities: [],
	};

	componentDidMount() {
		fetch('http://localhost:4000/api/cities')
			.then((res) => res.json())
			.then((jsonData) => {
				console.log(jsonData);
				this.setState({
					cities: jsonData
				});
			})
			.catch()
	};

	render() {
		return (
			<aside>
				<CitiesList />
			</aside>
		);
	}
};

export default CitiesPage;
