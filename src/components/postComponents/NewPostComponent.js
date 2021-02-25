import React from 'react';
import { Redirect } from 'react-router-dom';

class NewPost extends React.Component {
	state = {
		title: '',
		body: '',
	};

	handleNewPost = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	handleSubmitPost = (event) => {
		event.preventDefault();
		const cityObj = {
			title: this.state.title,
			body: this.state.body,
			userId: this.props.city.id,
			cityId: this.props.city.id,
		};
		fetch('http://localhost:4000/api/v1/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cityObj),
		})
			.then((result) => result.json())
			.then((data) => data)
			.catch((err) => {
				console.log(err);
			});

		this.setState({ title: '', body: '' });
		document.getElementById('post-form').style.display = 'none';
		document.getElementById('title').value = '';
		document.getElementById('body').value = '';
		this.props.handleRerender(cityObj.cityId);
	};

	render() {
		return (
			<div className="text-center">
				<h1 className="text-3xl my-2">New Post</h1>
				<div>
					<form
						id="post-form-inner"
						onSubmit={this.handleSubmitPost}
						className="flex flex-col align-evenly form"
					>
						<div>
							<label className="form-label" htmlFor="title">
								Title
							</label>
							<input
								className="form-control"
								type="text"
								id="title"
								name="title"
								onChange={this.handleNewPost}
							/>
						</div>
						<div>
							<label className="form-label" htmlFor="body">
								Body
							</label>
							<textarea
								className="form-control"
								type="text"
								id="body"
								name="body"
								onChange={this.handleNewPost}
							/>
						</div>
						<div className="my-4">
							<button
								type="submit"
								className="btn bg-gray-300 text-black center"
							>
								Add Post
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default NewPost;
