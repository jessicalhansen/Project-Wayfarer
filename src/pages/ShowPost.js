import React from 'react';
import CommentsList from '../components/commentsComp/CommentsList';
// import { Link } from 'react-router-dom';

class ShowPost extends React.Component {
	state = {
		post: {
			id: '',
			title: '',
			body: '',
			userId: '',
			cityId: '',
		},
		user: {
			name: '',
		},
		city: {
			id: '',
			name: '',
			state: '',
			country: '',
			image: '',
		},
		comments: [],
		body: '',
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
						this.handleCommentFetch();
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}
	handleCommentFetch = () => {
		return fetch(
			`http://localhost:4000/api/v1/comments/filter/${this.state.post._id}`
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonData) => {
				console.log(jsonData);
				this.setState({
					...this.state,
					comments: jsonData,
				});
			})
			.catch((err) => console.log(err));
	};
	handleComment = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		const commentObj = {
			body: this.state.body,
			userId: this.state.post._id,
			postId: this.state.post._id,
		};
		fetch('http://localhost:4000/api/v1/comments', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(commentObj),
		})
			.then((result) => result.json())
			.then((data) => data)
			.catch((err) => {
				console.log(err);
			});
		this.handleCommentFetch();
		document.getElementById('comment').value = '';
	};
	handleDelete = (props) => {
		let confirmed = window.confirm(
			'Are you sure you want to delete this post?'
		);
		if (confirmed) {
			console.log('Fire away Sara Doe!');
			fetch(`http://localhost:4000/api/v1/comments/${props}`, {
				method: 'DELETE',
			})
				.then((response) => {
					return response.json();
				})
				.then((jsonData) => {
					this.handleCommentFetch();
				})
				.catch((err) => console.log(err));
		}
	};
	render() {
		return (
			<div id="show-post">
				<div>
					<h1 className="border-black border-3 text-4xl">
						{this.state.city.name}
					</h1>
				</div>

				<div className="w-64 mx-auto">
					<img src={this.state.city.image} alt="cityImage" />
				</div>
				<div>
					<label
						className="bg-gray-700 border-black border-3 text-gray-300 w-full"
						htmlFor="title"
					>
						Title:
					</label>
					<h1 className="text-left p-3 text-3xl" id="title">
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
				<div>
					<form action="POST" onSubmit={this.handleSubmit}>
						<div>
							<label htmlFor="comment">Comment: </label>
							<input
								type="text"
								id="comment"
								onChange={this.handleComment}
								name="body"
							/>
							<input type="submit" className="btn" />
						</div>
					</form>
				</div>
				<section id="comments-feed">
					<CommentsList
						comments={this.state.comments}
						handleDelete={this.handleDelete}
					/>
				</section>

			</div>
		);
	}
}

export default ShowPost;
