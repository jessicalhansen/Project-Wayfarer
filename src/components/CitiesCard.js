const CitiesCard = (props) => {
  return (
    <>
      <div className="list-component">
        <div className="list-card">
          <div className="row">
            <li key={props.cities._id}>
              <img src={props.cities.image} alt="city_image" />
              {props.cities.name}
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default CitiesCard;
