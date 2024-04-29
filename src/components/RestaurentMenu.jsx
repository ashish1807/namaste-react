import { useEffect, useState } from 'react';
import { Shimmer } from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
const RestaurentMenu = () => {
  const [restaurentInfo, setRestaurentInfo] = useState(null);

  const { resId } = useParams();
  const fetchMenu = async () => {
    console.log('1211', MENU_API + resId);
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurentInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (restaurentInfo === null) return <Shimmer />;

  //   const { itemCards } = restaurentInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  //   console.log('1', itemCards);
  const { name, cuisines, costForTwoMessage } = restaurentInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(', ')} - {costForTwoMessage}
      </h3>
      <h2>Recommended Menu</h2>
      <ul>
        {restaurentInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards?.map((resItem) => (
          <li key={resItem.card.info.id}>
            {resItem.card.info.name} -{' '}
            {resItem.card.info.price ? resItem.card.info.price / 100 : resItem.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
