import { RestaurentCard } from './RestaurentCard';
import { useState, useEffect } from 'react';
import { Shimmer } from './Shimmer';
import { Link } from 'react-router-dom';
export const Body = () => {
  let [listOfRestaurents, setListOfRestaurent] = useState([]);
  let [filteresRestaurents, setFilteresRestaurent] = useState([]);
  let [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.21700&lng=73.14830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();
    setListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteresRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return !listOfRestaurents.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredSearchList = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText?.toLowerCase())
              );
              setFilteresRestaurent(filteredSearchList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter((res) => res.info.avgRating > 4);
            setListOfRestaurent(filteredList);
          }}
        >
          Top rated restaurents
        </button>
      </div>

      <div className="res-container">
        {filteresRestaurents.map((restaurent) => (
          <Link key={restaurent.info.id} to={'/restaurents/' + restaurent.info.id}>
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
