import { IMG_URL } from '../utils/constants';

export const RestaurentCard = (props) => {
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
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{id}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
