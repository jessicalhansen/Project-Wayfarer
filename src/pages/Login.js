import React from 'react';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
	};

	inputChangeHandler = (event) => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value,
		});
	};

	loginHandler = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.props.updateAuth();
	};

	render() {
		return (
			<div className="h-screen login bg-cover">
			<div className="container mx-auto h-full flex flex-1 justify-center">
				<div className="w-full max-w-lg items-center">
					<div className="leading-loose ml-10">
						<form className="login-form max-w-sm m-4 p-10 rounded" onSubmit={this.loginHandler}>
							<p className="text-white font-medium text-center text-lg font-bold mb-3">LOGIN</p>
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
									/>
								</div>
								<div className="mt-2">
									<label className="block text-sm text-white" htmlFor="password">
										Password
									</label>
									<input className="w-full px-5 py-1 text-gray-7000 bg-gray-300 rounded focus:outline-none focus:bg-white"
									type="password"
									id="password"
									name="password"
									value={this.state.password}
									onChange={this.inputChangeHandler}
									/>
								</div>

								<div className="mt-4 items-center">
									<button type="submit" className="px-4 py-1 text-white font-light tracking-wider bg-gray-400 hover:bg-gray-800 rounded">
									Login
									</button>
								</div>	
						</form>
					</div>
				</div>
			</div>
			</div>

			/* <div className="flex justify-center content-center">
						<form onSubmit={this.loginHandler}>
					<div>
						<label className="form-label" htmlFor="name">
							Username
						</label>
						<input
							className="form-control"
							type="text"
							id="username"
							name="username"
							value={this.state.username}
							onChange={this.inputChangeHandler}
						/>
					</div>
					<div>
						<label className="form-label mt-2" htmlFor="email">
							Password
						</label>
						<input
							className="form-control"
							type="password"
							id="password"
							name="password"
							value={this.state.password}
							onChange={this.inputChangeHandler}
						/>
					</div>
					<button type="submit" className="btn m-2 btn-primary hover:bg-green-600">Login</button>
				</form>
			</div> */
		)
	}
}

export default Login;
