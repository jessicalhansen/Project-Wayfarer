import Carousel from '../components/universalComp/Carousel';

const HomePage = () => {
	return (
		<div id="home-container">
			<div id="carousel-container">
				<Carousel />
			</div>

			<div className="mt-3">
				<h2 className="text-4xl">
					Wayfarer is...
				</h2>
			</div>
			<div id="home-item-container">
				<article className="home-item">
					<h2 className="text-4xl mb-5">a Platform</h2>
					<p>
						... to share your travel advice, knowledge and first-hand experiences of your travel adventures to destinations around the globe.
					</p>
				</article>
				<article className="home-item">
					<h2 className="text-4xl mb-5">a Resource</h2>
					<p>
						... whether it's you're first time leaving the the nest or a seasoned traveling veteran, there is always a new place to discover on Wayfarer.
					</p>
				</article>
				<article className="home-item">
					<h2 className="text-4xl mb-5">a Community</h2>
					<p>
						... to connect you with like-minded individuals who have a passion for travel and advice to plan your next big adventure.
					</p>
				</article>
			</div>
		</div>
	);
};

export default HomePage;
