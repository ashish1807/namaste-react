import { IMG_URL } from '../utils/constants';

const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex">
            <img src={IMG_URL + item.card.info.imageId} className="w-14 h-auto" />
            <div className='ml-2'>
              <div className="py-2">
                <span> {item.card.info.name}</span>
                <span>
                  {' '}
                  - ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
