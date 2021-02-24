import React from 'react';
import CityDetailCard from '../components/CityDetailCard';
import NewPostComponent from '../components/postComponents/NewPostComponent';

class CityDetailPage extends React.Component {
	state = {
		posts: [],
	};

	showForm = () => {
		const form = document.getElementById('post-form');
		if (form.style.display === 'none') {
			form.style.display = 'block';
		} else {
			form.style.display = 'none';
		}
	};

	render() {
		return (
			<div>
				<CityDetailCard city={this.props.city} />
				<button
					onClick={this.showForm}
					className="btn bg-green-600 rounded border-1 border-black"
				>
					+
				</button>
				<div id="post-form">
					<NewPostComponent city={this.props.city} />
				</div>
			</div>
		);
	}
}

export default CityDetailPage;
