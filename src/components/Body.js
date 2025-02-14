import resObj from "../utils/dummydata";
import Rescard from "./ResCard";
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resObj.map(restaurant => (
            <Rescard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
  