import React from 'react';
import CityDetailCard from '../components/cities/CityDetailCard';
import NewPostComponent from '../components/postComponents/NewPostComponent';
import PostsList from '../components/postComponents/PostsList';

class CityDetailPage extends React.Component {
	showForm = () => {
		const form = document.getElementById('post-form');
		window.onclick = () => {
			if (form.style.display === 'none') {
				form.style.display = 'block';
			} else {
				form.style.display = 'none';
			}
		};
	};

	render() {
		return (
			<div id="detail">
				<div id="detail-card">
					<CityDetailCard city={this.props.city} />
				</div>
				<div className="text-right my-4 mx-3">
					<button
						onClick={this.showForm}
						className="btn bg-green-600 rounded border-1 border-black"
					>
						+
					</button>
				</div>
				<div id="post-feed">
					<div id="post" className="bg-gray-800 border-black border-2 rounded">
						<PostsList
							posts={this.props.posts}
							deletePost={this.props.deletePost}
						/>
					</div>
				</div>
				<div id="post-form" className="bg-gray-700 text-gray-300">
					<NewPostComponent
						city={this.props.city}
						handleRerender={this.props.handleRerender}
					/>
				</div>
			</div>
		);
	}
}

export default CityDetailPage;
