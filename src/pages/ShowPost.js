import React from 'react';
import CommentsList from '../components/commentsComp/CommentsList';
import { Link } from 'react-router-dom';

class ShowPost extends React.Component {
	state = {
		post: {
			title: '',
			body: '',
			userId: '',
			cityId: '',
		},
		user: {
			name: '',
		},
		city: {
			name: '',
			state: '',
			country: '',
			image: '',
		},
		comments: [],
	};

	handleDeletePost = () => {
		let confirmed = window.confirm(
			'Are you sure you want to delete this post?'
		);
		if (confirmed) {
			console.log('Fire away Sara Doe!');
			fetch(`http://localhost:4000/api/v1/posts/${this.state.post._id}`, {
				method: 'DELETE',
			})
				.then((response) => {
					return response.json();
				})
				.then((jsonData) => {
					this.props.history.push('/cities');
				})
				.catch((err) => console.log(err));
		}
	};

	componentDidMount() {
		fetch(`http://localhost:4000/api/v1/posts/${this.props.match.params.id}`)
			.then((response) => {
				return response.json();
			})
			.then((jsonData) => {
				this.setState({
					...this.state,
					post: jsonData,
				});
				fetch(`http://localhost:4000/api/v1/cities/${this.state.post.cityId}`)
					.then((response) => {
						return response.json();
					})
					.then((jsonData) => {
						this.setState({
							...this.state,
							city: jsonData,
						});
						fetch(
							`http://localhost:4000/api/v1/comments/filter/${this.state.post.cityId}`
						)
							.then((response) => {
								return response.json();
							})
							.then((jsonData) => {
								this.setState({
									...this.state,
									comments: jsonData || [],
								});
							})
							.catch((err) => console.log(err));
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div id="show-post">
				<div>
					<h1 className="border-black border-3 text-4xl">
						{this.state.city.name}
					</h1>
				</div>
				<div className="container">
					<div className="flex-row col-span-1 float-right w-2/5 m-4">
						<img src={this.state.city.image} alt="cityImage" />
					</div>
					<div className="flex-row col-span-2 float-left w-1/2 m-4">
						<div>
							<label
								className="bg-gray-600 border-black border-2 text-gray-300 w-full"
								htmlFor="title"
							>
								Title:
					</label>
							<h1 className="text-center text-3xl p-2 mb-12" id="title">
								{this.state.post.title}
							</h1>
						</div>
						<div>
							<label
								className="bg-gray-700 border-black border-3 text-gray-300 w-full"
								htmlFor="body"
							>
								Body:
					</label>
							<p className="text-left p-3" id="body">
								{this.state.post.body}
							</p>
						</div>
						<div className="m-3">
							<div className="flex justify-center">
								<Link to={`/editpost/${this.state.post._id}`}>
									<div>
										<button className="btn bg-gray-700 text-gray-300 hover:bg-green-600 mr-12">
											Edit Post
							</button>
									</div>
								</Link>
								<div>
									<button
										className="btn btn-danger  hover:bg-green-600 ml-12"
										onClick={() => this.handleDeletePost()}
									>Delete</button>
								</div>
							</div>
						</div>
						<section id="comments-feed">
							<CommentsList comments={this.state.comments} />
						</section>
					</div>
				</div>
			</div>
		);
	}
}

export default ShowPost;
