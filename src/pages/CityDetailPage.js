import React from 'react';
import CityDetailCard from "../components/CityDetailCard";
import NewPostComponent from "../components/postComponents/NewPostComponent";

class CityDetailPage extends React.Component {
	state = {
		posts: []
	}

  render() {
    return (
      <div>
        <CityDetailCard city={this.props.city} />
        <NewPostComponent />
      </div>
    );
  }
}

export default CityDetailPage;
