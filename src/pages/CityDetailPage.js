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
				<div className="text-right my-4 mx-3">
					<button
						onClick={this.showForm}
						className="btn bg-green-600 rounded border-1 border-black"
					>
						+
					</button>
				</div>
				<div id="post-feed">
					<div className="bg-gray-300 border-black border-2 rounded">
						<h1>Title: Im not sure</h1>
						<p>
							Body : Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Est, sint.
						</p>
					</div>
				</div>
				<div id="post-form" className="bg-gray-700 text-gray-300">
					<NewPostComponent city={this.props.city} />
				</div>
			</div>
		);
	}
}

export default CityDetailPage;
