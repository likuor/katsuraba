import { NavLink } from 'react-router-dom';
import React, { useState, useCallback } from 'react';
import { HamburgerSlider } from 'react-animated-burgers';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  return (
    <div>
      <nav className='py-3 md:py-5 bg-pink-500 fixed z-10 top-0 w-full'>
        <div className='container flex flex-wrap justify-between items-center mx-auto px-4 w-full'>
          <NavLink to='/' className='flex items-center'>
            <span
              className='self-center text-lg md:text-xl font-semibold whitespace-nowrap text-white'
              onClick={() => setIsActive(false)}
            >
              かつらばキッチン
            </span>
          </NavLink>

          <div className='inline-flex items-center text-white rounded-lg md:hidden hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300'>
            <HamburgerSlider
              buttonWidth={20}
              barColor='white'
              {...{ isActive, toggleButton }}
            />
          </div>

          <div
            id='mobile-menu'
            className={
              'w-full md:block md:w-auto ' + (isActive ? '' : ' hidden')
            }
          >
            <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <NavLink
                  className='block py-2 pr-4 pl-3 text-white border-b border-pink-300 hover:bg-pink-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-800 md:p-0'
                  to='/about'
                  aria-current='page'
                  onClick={() => setIsActive(!isActive)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='block py-2 pr-4 pl-3 text-white border-b border-pink-300 hover:bg-pink-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-800 md:p-0'
                  to='/brands'
                  aria-current='page'
                  onClick={() => setIsActive(!isActive)}
                >
                  ブランド一覧
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
