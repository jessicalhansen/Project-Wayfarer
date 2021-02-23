import React from 'react';
import CitiesList from '../components/CitiesList';
import CityDetailPage from './CityDetailPage';

class CitiesPage extends React.Component {
	state = {
	cities: [],
		city: {
			name: 'San-Fran',
			state: 'Cali',
			country: 'USA',
			image: '',
		},
	};

	componentDidMount() {
		fetch('http://localhost:4000/api/v1/cities')
			.then((res) => res.json())
			.then((jsonData) => {
				this.setState({
					cities: jsonData,
				});
			})
			.catch((err) => {
				console.log('====================================');
				console.log(err);
				console.log('====================================');
			});
	}

	render() {
		return (
			<div className="flex justify-between h-full">
				<div className="p-3 border-black border-2 city-comp">
					<CitiesList cities={this.state.cities} />
				</div>
				<div className="p-3 border-black border-2 city-comp">
					<CityDetailPage city={this.state.city} />
				</div>
			</div>
		);
	}
}

export default CitiesPage;
