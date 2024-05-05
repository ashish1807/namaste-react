import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { Shimmer } from './Shimmer';
const RestaurantMenu = () => {

  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(', ')} - {costForTwoMessage}
      </h3>
      <h2>Recommended Menu</h2>
      <ul>
        {restaurantInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards?.map((resItem) => (
          <li key={resItem.card.info.id}>
            {resItem.card.info.name} -{' '}
            {resItem.card.info.price ? resItem.card.info.price / 100 : resItem.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
