import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CitiesPage from '../pages/CitiesPage';
import CityDetailPage from '../pages/CityDetailPage';
// import NewPostPage from '../pages/NewPostPage';

const routes = (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/cities' component={CitiesPage} />
    <Route path='/cities/:id' component={CityDetailPage} />
    {/* <Route path='/newpost' component={NewPostPage} /> */}
  </Switch>
);

export default routes;
