const CityDetailCard = (props) => {
  return (
    <>
      <div className="city-detail">
        <h1>{props.city.name}</h1>
        <h2>
          {props.city.state}, {props.city.country}
        </h2>
        <aside>{props.city.image}</aside>
      </div>
    </>
  );
};

export default CityDetailCard;
