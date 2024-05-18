import RestaurantCard, { withPromotedLabel } from './RestaurentCard';
import { useState, useEffect, useContext } from 'react';
import { Shimmer } from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
export const Body = () => {
  let [listOfRestaurants, setListOfRestaurant] = useState([]);
  let [filteredRestaurants, setFilteredRestaurant] = useState([]);
  let [searchText, setSearchText] = useState([]);

  const { setUserName, loggedInUser } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  let isUserOnline = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1962183&lng=72.957856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (!isUserOnline) {
    return <h1>Looks like you are offline check your internet connection.</h1>;
  }

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid  border-black"
            type="search"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredSearchList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText?.toLowerCase())
              );
              setFilteredRestaurant(filteredSearchList);
            }}
          >
            Search
          </button>

          <button
            className="rounded-lg px-4 py-1 m-4 bg-gray-100"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top rated restaurants
          </button>

          <span>
            Username:
            <input
              className="border border-solid  border-black p-2"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={loggedInUser}
            />
          </span>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link className="res-card-hyperlink" key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
