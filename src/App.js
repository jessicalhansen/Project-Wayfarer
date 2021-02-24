import NavBar from './components/universalComp/NavBar';
import Footer from './components/universalComp/Footer';
import routes from './config/routes';
import './App.css';

function App() {
	return (
		<div>
			<NavBar />
			<div id="app">{routes}</div>
			<Footer />
		</div>
	);
}

export default App;
