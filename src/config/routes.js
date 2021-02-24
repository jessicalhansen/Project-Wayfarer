import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CitiesPage from '../pages/CitiesPage';
import NewPostComponent from '../components/postComponents/NewPostComponent';


const routes = (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/cities" component={CitiesPage} />
		<Route path='/newposts' component={NewPostComponent} />
	</Switch>
);

export default routes;
