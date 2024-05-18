import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { Shimmer } from './Shimmer';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info;

  const cateGories = restaurantInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (item) => item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </h3>

      {cateGories.map((category, index) => (
        <RestaurantCategory
          data={category.card.card}
          key={category.card.card.tile}
          showItems={index === showIndex && true}
          index={index}
          setShowIndex={(index) => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
