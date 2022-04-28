import React from 'react';

function Cards(props) {
  return (
    <div className='container mx-auto py-20 px-6'>
      <div className='grid gap-4 grid-cols-3'>
        {props.RestaurantsDataList.map((restaurant, index) => {
          return (
            <div
              className='max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'
              key={index}
            >
              <a href='/'>
                <img className='rounded-t-lg' src={restaurant.img} alt='' />
              </a>
              <div className='p-5'>
                <a href='/'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
