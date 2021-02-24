import React from 'react';
import CityDetailCard from '../components/CityDetailCard';
import NewPostComponent from '../components/postComponents/NewPostComponent';
import PostsList from '../components/postComponents/PostsList';

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
	componentDidMount() {
		fetch(`http://localhost:4000/api/v1/posts/filter/${this.props.city.id}`)
			.then((res) => res.json())
			.then((jsonData) => {
				this.setState({
					posts: jsonData,
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
						<PostsList posts={this.state.posts} />
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
