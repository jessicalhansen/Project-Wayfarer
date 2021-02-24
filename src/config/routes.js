import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CitiesPage from '../pages/CitiesPage';
import NewPostComponent from '../components/postComponents/NewPostComponent';
import Login from '../pages/Login';
import Signup from '../pages/Signup';


const routes = (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/cities" component={CitiesPage} />
		<Route path='/newposts' component={NewPostComponent} />
		<Route path='/login' component={Login} />
		<Route path='/signup' component={Signup} />
	</Switch>
);

export default routes;
