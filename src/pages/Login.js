import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  inputChangeHandler = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  loginHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.updateAuth();
  }


  render() {
    return (
      <div>
        <form onSubmit={this.loginHandler}>
        <div>
            <label className="form-label" htmlFor="name">Username</label>
            <input className="form-control" type="text" id="username" name="username" value={this.state.username} onChange={this.inputChangeHandler}/>
          </div>
          <div>
            <label className="form-label" htmlFor="email">Password</label>
            <input className="form-control" type="password" id="password" name="password" value={this.state.password} onChange={this.inputChangeHandler}/>
          </div>
          <button type="submit" className="btn btn-primary block">Login</button>
        </form>
      </div>
    );

  }
}

export default Login;