import React from 'react';


class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    confirmPass: '',
  }

  inputChangeHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  signupHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="flex justify-center content-center">
        <form onSubmit={this.signupHandler}>
          <div>
            <label className="form-label mt-8" htmlFor="name">Username</label>
            <input className="form-control" type="text" id="username" name="username" value={this.state.username} onChange={this.inputChangeHandler} />
          </div>
          <div>
            <label className="form-label mt-2" htmlFor="email">Password</label>
            <input className="form-control" type="password" id="password" name="password" value={this.state.password} onChange={this.inputChangeHandler} />
          </div>
          <div>
            <label className="form-label mt-2" htmlFor="email"> Confirm Password</label>
            <input className="form-control" type="password" id="password" name="password" value={this.state.confirmPass} onChange={this.inputChangeHandler} />
          </div>
          <button type="submit" className="btn m-2 btn-primary hover:bg-green-600">Sign-Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;
