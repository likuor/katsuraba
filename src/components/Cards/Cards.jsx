import React from 'react';
import { Link } from 'react-router-dom';
import Underline from '../Underline/Underline';

function Cards(props) {
  return (
    <div className='container mx-auto py-10'>
      <div className='text-center text-gray-800 py-10 px-6'>
        <div className='container mx-auto'>
          <section>
            <h1 className='text-2xl md:text-3xl font-bold mb-4'>
              ブランド一覧
            </h1>
            <Underline />
          </section>
        </div>
      </div>
      <div className='grid gap-4 md:grid-cols-3 grid-cols-1 mx-6 md:mx-0'>
        {props.RestaurantsDataList.map((restaurant, index) => {
          return (
            <div className='rounded-lg shadow-md bg-gray-800' key={index}>
              <Link to={`/Location/${index}`}>
                <img
                  className='rounded-t-lg w-full'
                  src={restaurant.img}
                  alt=''
                />
              </Link>
              <div className='p-5'>
                <Link to={`/Location/${index}`}>
                  <h5 className='mb-2 text-base font-bold tracking-tight text-white'>
                    {restaurant.name}
                  </h5>
                </Link>
                <Link to={`/Location/${index}`}>
                  <p className='mb-1 font-normal text-xs text-gray-400'>
                    {restaurant.phrase}
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
