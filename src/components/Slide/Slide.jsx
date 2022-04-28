import React from 'react';
import image0 from '../Restaurants/img/0.jpg';
import image1 from '../Restaurants/img/1.jpg';
import image2 from '../Restaurants/img/2.jpg';

function Slide() {
  return (
    <div className='relative'>
      <div className='overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96'>
        <div id='carousel-item-1' className='hidden duration-700 ease-in-out'>
          <span className='absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800'>
            First Slide
          </span>
          <img
            src={image0}
            alt=''
            className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
          />
        </div>
        <div id='carousel-item-2' className='hidden duration-700 ease-in-out'>
          <img
            src={image1}
            alt=''
            className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
          />
        </div>
        <div id='carousel-item-3' className='hidden duration-700 ease-in-out'>
          <img
            src={image2}
            alt=''
            className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
          />
        </div>
        <div id='carousel-item-4' className='hidden duration-700 ease-in-out'>
          <img
            src={image0}
            alt=''
            className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2'
          />
        </div>
      </div>
      {/* Center circles */}
      <div className='flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2'>
        <button
          id='carousel-indicator-1'
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          id='carousel-indicator-2'
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='false'
          aria-label='Slide 2'
        ></button>
        <button
          id='carousel-indicator-3'
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='false'
          aria-label='Slide 3'
        ></button>
        <button
          id='carousel-indicator-4'
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='false'
          aria-label='Slide 4'
        ></button>
      </div>
      <button
        id='data-carousel-prev'
        type='button'
        className='flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
      >
        <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7'
            ></path>
          </svg>
          <span className='hidden'>Previous</span>
        </span>
      </button>
      <button
        id='data-carousel-next'
        type='button'
        className='flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
      >
        <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            ></path>
          </svg>
          <span className='hidden'>Next</span>
        </span>
      </button>
    </div>
  );
}

export default Slide;
