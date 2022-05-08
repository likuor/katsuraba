import React from 'react';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <div className='container mx-auto py-10 px-6'>
      <div className='text-center text-gray-800 py-10 px-6'>
        <div className='container mx-auto'>
          <section className='text-gray-800 text-center'>
            <h1 className='text-3xl font-bold mb-4'>ブランド一覧</h1>
          </section>
        </div>
      </div>
      <div className='grid gap-4 grid-cols-3'>
        {props.RestaurantsDataList.map((restaurant, index) => {
          return (
            <div
              className='max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'
              key={index}
            >
              <Link to={`/Location/${index}`}>
                <img className='rounded-t-lg' src={restaurant.img} alt='' />
              </Link>
              <div className='p-5'>
                <Link to={`/Location/${index}`}>
                  <h5 className='mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white'>
                    {restaurant.name}
                  </h5>
                </Link>
                <Link to={`/Location/${index}`}>
                  <p className='mb-3 font-normal text-xs text-gray-700 dark:text-gray-400'>
                    {restaurant.description}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
