
const Rescard = (props) => {
    const {resData} = props; 
    return (
      <div className="res-card">
        <img alt="Restaurant Logo" className="res-logo" src={resData.image}></img>
        <h3>{resData.restaurantName}</h3>
        <h4>{resData.cuisine}</h4>
        <p>Rating: {resData.rating} 🌟</p>
        <p>Price: {resData.price}</p>
        <h4>{resData.deliveryTime}</h4>
      </div>
    );
  };
  
  /*It is one of the type to pass the props to the component
  const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <Rescard resData={resObj[0]} />
          <Rescard resData={resObj[1]} />
        </div>
      </div>
    );
  };*/

  export default Rescard;