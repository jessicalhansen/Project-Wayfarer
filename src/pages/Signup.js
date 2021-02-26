import React from 'react';

class Signup extends React.Component {
	state = {
		username: '',
		password: '',
		confirmPass: '',
	};

	inputChangeHandler = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	signupHandler = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div className="h-screen signup bg-cover">
				<div className="container mx-auto h-full flex flex-1 justify-center">
					<div className="w-full max-w-lg">
						<div className="leading-loose ml-10">
							<form
								className="loginform max-w-sm m-4 p-10 rounded"
								onSubmit={this.loginHandler}
							>
								<p className="text-white font-medium text-center text-lg font-bold mb-3">
									SIGN-UP
								</p>
								<div className="">
									<label htmlFor="name" className="block text-sm text-white">
										Username
									</label>
									<input
										className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
										type="text"
										id="username"
										name="username"
										value={this.state.username}
										onChange={this.inputChangeHandler}
										required
									/>
								</div>
								<div className="mt-2">
									<label
										className="block text-sm text-white"
										htmlFor="password"
									>
										Password
									</label>
									<input
										className="w-full px-5 py-1 text-gray-7000 bg-gray-300 rounded focus:outline-none focus:bg-white"
										type="password"
										id="password"
										name="password"
										value={this.state.password}
										onChange={this.inputChangeHandler}
										required
									/>
								</div>
								<div className="mt-2">
									<label
										className="block text-sm text-white"
										htmlFor="password"
									>
										Confirm Password
									</label>
									<input
										className="w-full px-5 py-1 text-gray-7000 bg-gray-300 rounded focus:outline-none focus:bg-white"
										type="password"
										id="password"
										name="password"
										value={this.state.confirmPass}
										onChange={this.inputChangeHandler}
										required
									/>
								</div>

								<div className="mt-4 items-center">
									<button
										type="submit"
										className="px-4 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-800 rounded"
									>
										Sign-Up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Signup;
