import React from 'react';
import CitiesList from '../components/CitiesList';
import CityDetailPage from './CityDetailPage';

class CitiesPage extends React.Component {
	state = {
		isLoggedIn: this.props.isLoggedIn,
		cities: [],
		city: {
			id: '60347f311e79196784a75654',
			name: 'San-Fran',
			state: 'Cali',
			country: 'USA',
			image: 'https://i.imgur.com/Zq59o10.jpg',
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

	showCityHandler = (data) => {
		this.setState({
			city: data
		})
	}

	render() {
		return (
			<div className="flex h-full">
				<div className="w-full">
					<h1 className="text-4xl text-gray-700">Cities of the World</h1>
					<div className="p-3 border-black border-2 city-comp bg-gray-700">
						<CitiesList cities={this.state.cities} showCityHandler={this.showCityHandler}/>
					</div>
				</div>
				<div className="w-full">
					<h1 className="text-4xl text-gray-700">
						The city of {this.state.city.name}
					</h1>
					<div className="p-3 border-black border-2 city-comp bg-gray-700">
						<CityDetailPage city={this.state.city} />
					</div>
				</div>
			</div>
		);
	}
}

export default CitiesPage;
