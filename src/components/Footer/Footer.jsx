import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className='p-4 shadow md:px-7 md:py-8 bg-gray-800'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a href='/' className='flex items-center mb-4 sm:mb-0'>
            <span className='self-center text-lg md:text-xl font-semibold whitespace-nowrap text-white'>
              かつらばキッチン
            </span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-white'>
            <li>
              <NavLink
                className='mr-4 hover:underline md:mr-6'
                to='/about'
                aria-current='page'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className='mr-4 hover:underline md:mr-6'
                to='/brands'
                aria-current='page'
              >
                ブランド一覧
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className='my-6 sm:mx-auto border-gray-700 lg:my-8' />
        <span className='block text-xs md:text-sm text-white sm:text-center '>
          © 2022{' '}
          <a href='/' className='hover:underline'>
            かつらばキッチン
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
