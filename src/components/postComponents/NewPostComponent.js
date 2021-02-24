import React from 'react';

class NewPost extends React.Component {
	state = {
		title: '',
		body: '',
		userId: '',
		cityId: '',
	};

	handleNewPost = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	handleSubmitPost = (event) => {
		event.preventDefault();
		this.setState({
			...this.state,
			userId: this.props.city.id,
			cityId: this.props.city.id,
		});
		fetch('http://localhost:4000/api/v1/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(this.state),
		})
			.then((result) => result.json())
			.then((data) => data)
			.catch((err) => {
				console.log(err);
			});

		this.setState({ title: '', body: '', userId: '', cityId: '' });
		document.getElementById('post-form').style.display = 'none';
		document.getElementById('title').value = '';
		document.getElementById('body').value = '';
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
						<div>{/* This is where the dropdown goes for cities */}</div>
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
							<input
								className="form-control"
								type="text-area"
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
