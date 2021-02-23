import { Link } from 'react-router-dom';
import routes from './config/routes';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <h1>Project Wayfarer</h1>
        <Link to='/'>Home</Link>{'  '}
        <Link to='/cities'>Cities</Link>{'  '}
        <Link to='/login'>Log in</Link>{'  '}
        <Link to='/signup'>Sign up</Link>
      </nav>

      <div>
        {routes}
      </div>
    </div>
  );
};

export default App;
