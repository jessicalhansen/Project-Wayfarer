import React from 'react';
import CitiesList from '../components/CitiesList';

class CitiesPage extends React.Component {
	state = {
		cities: [],
	};

	componentDidMount() {
		fetch('http://localhost:4000/api/v1/cities')
			.then((res) => res.json())
			.then((jsonData) => {
				console.log(jsonData);
				this.setState({
					cities: jsonData
				});
			})
			.catch((err) => {
				console.log('====================================');
				console.log(err);
				console.log('====================================');
			})
	};

	render() {
		return (
			<aside>
				<CitiesList cities={this.state.cities} />
			</aside>
		);
	}
};

export default CitiesPage;
