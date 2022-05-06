import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';

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
      <img src={restaurant.img} alt='' className='h-96 w-full object-cover' />
      <div className='text-center text-gray-800 py-20 px-6'>
        <h1 className='text-3xl font-bold'>{restaurant.name}</h1>
        <p className='text-1xl font-extralight'>{restaurant.description}</p>
      </div>
      {restaurant?.locations?.map((restaurant, index) => {
        return (
          <div key={index}>
            <div className='text-center bg-gray-50 border text-gray-800 mx-auto w-3/4 py-10 px-10 mt-0 m-10'>
              <h3 className='text-1xl font-extralight p-10'>
                {restaurant.address}
                {restaurant.branch}
              </h3>
              <div className='flex space-x-10 place-content-evenly'>
                <a
                  className='inline-block w-1/3'
                  href={restaurant.anycarryUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button
                    deliveryCompany='anycarry'
                    companyColor='bg-anycarryColor'
                  />
                </a>

                <a
                  className='inline-block w-1/3'
                  href={restaurant.uberUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button
                    deliveryCompany='Uber Eats'
                    companyColor='bg-uberEatsColor'
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Location;
