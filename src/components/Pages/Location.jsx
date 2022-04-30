import React, { useEffect, useState } from 'react';
import RestaurantTitle from '../Title/LocationTitle';
import { useParams } from 'react-router-dom';

function Location(props) {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState('');

  useEffect(() => {
    const res = props.RestaurantsDataList.filter((restaurant) => {
      return restaurant.id === Number(id);
    });
    setRestaurant(res[0]);
  }, [props, id]);

  return (
    <div>
      <div className='container mx-auto py-20 px-6'>
        <img src={restaurant.img} alt='' />
        <RestaurantTitle
          mainTitle={restaurant.name}
          subTitle={restaurant.address}
          mainDescription={restaurant.branch}
          subDescription={restaurant.description}
        />
      </div>
      <div>
        {restaurant?.locations?.map((restaurant, index) => {
          return (
            <div>
              {restaurant.address}
              {restaurant.branch}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Location;
