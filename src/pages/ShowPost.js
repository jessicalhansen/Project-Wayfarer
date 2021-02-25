import React from 'react';
import CommentsList from '../components/commentsComp/CommentsList';

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

	handleCommentFetch = () => {
		return fetch(
			`http://localhost:4000/api/v1/comments/filter/${this.state.post._id}`
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonData) => {
				this.setState({
					...this.state,
					comments: jsonData,
				});
			})
			.catch((err) => console.log(err));
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
			.then((data) => {
				this.handleCommentFetch();
				document.getElementById('comment').value = '';
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleDelete = (props) => {
		let confirmed = window.confirm(
			'Are you sure you want to delete this post?'
		);
		if (confirmed) {
			fetch(`http://localhost:4000/api/v1/comments/${props}`, {
				method: 'DELETE',
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


				<div classname="container">
					<div className="flex-row col-span-1 float-right w-2/5 m-4">
						<img src={this.state.city.image} alt="cityImage" />
					</div>

					<div className="flex-row col-span-2 float-left w-1/2 m-4">
						<label
							className="bg-gray-700 border-black border-3 text-gray-300 w-full"
							htmlFor="title"
						>
							Title:
					</label>

						<h1 className="text-center p-3 text-3xl" id="title">
							{this.state.post.title}
						</h1>

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
										className="m-2"
									/>
									<input type="submit" className="btn btn-primary hover:bg-green-600 m-2" />
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
				</div>

			</div>
		);
	}
}

export default ShowPost;
