import { IMG_URL } from '../utils/constants';

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, id } = resData?.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <img className="res-logo" alt="res-logo" src={IMG_URL + cloudinaryImageId} />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisines">{cuisines.join(', ')}</h4>
      <h4 className="res-id">{id}</h4>
      <h4 className="res-avg-rating">{avgRating} star</h4>
      <h4 className="res-cost-for-two">{costForTwo}</h4>
    </div>
  );
};
