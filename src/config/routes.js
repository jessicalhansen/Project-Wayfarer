import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import CitiesPage from "../pages/CitiesPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import EditPost from "../components/postComponents/EditPostComponent";

class Routes extends React.Component {
  state = {
    isLoggedIn: true,
  };

  updateAuth = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logout = () => {
    console.log("Logged out");
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
			<>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/cities"
          component={() => {
            if (this.state.isLoggedIn) {
              return	<CitiesPage isLoggedIn={this.state.isLoggedIn} />;
            } else {
              return <Redirect to="/" />
            }
          }}
        />
        <Route path='/editpost/:id' component={EditPost} /> 

        <Route path="/login">
          <Login updateAuth={this.updateAuth} />
        </Route>

        <Route path="/signup" component={Signup}></Route>
      </Switch>
			</>
    );
  }
}

export default Routes;
