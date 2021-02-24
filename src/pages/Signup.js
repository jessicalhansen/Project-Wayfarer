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
    return(
      <div>
        <form onSubmit={this.signupHandler}>
        <div>
            <label className="form-label" htmlFor="name">Username</label>
            <input className="form-control" type="text" id="username" name="username" value={this.state.username} onChange={this.inputChangeHandler}/>
          </div>
          <div>
            <label className="form-label" htmlFor="email">Password</label>
            <input className="form-control" type="password" id="password" name="password" value={this.state.password} onChange={this.inputChangeHandler}/>
          </div>
          <div>
            <label className="form-label" htmlFor="email"> Confirm Password</label>
            <input className="form-control" type="password" id="password" name="password" value={this.state.confirmPass} onChange={this.inputChangeHandler}/>
          </div>
          <button type="submit" className="btn btn-primary block">Sign-Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;