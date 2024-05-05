import { IMG_URL } from '../utils/constants';

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId, id } = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 shadow hover:bg-gray-300 hover:shadow-2xl"

    >
      <img className="rounded-lg h-[180px] w-[300px]" alt="res-logo" src={IMG_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="res-cuisines">{cuisines.join(', ')}</h4>
      <h4 className="res-id">{id}</h4>
      <h4 className="res-avg-rating">{avgRating} star</h4>
      <h4 className="res-cost-for-two">{costForTwo}</h4>
    </div>
  );
};
