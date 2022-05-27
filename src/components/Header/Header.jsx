import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div>
      <nav className='py-3 md:py-5 bg-pink-500 fixed z-10 top-0 w-full'>
        <div className='container flex flex-wrap justify-between items-center mx-auto px-4 w-full'>
          <NavLink to='/' className='flex items-center'>
            <span
              className='self-center text-lg md:text-xl font-semibold whitespace-nowrap text-white'
              onClick={() => setNavbarOpen(false)}
            >
              かつらばキッチン
            </span>
          </NavLink>
          <button
            data-collapse-toggle='mobile-menu'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300'
            aria-controls='mobile-menu'
            aria-expanded='false'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            <svg
              className='hidden w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div
            id='mobile-menu'
            className={
              'w-full md:block md:w-auto ' + (navbarOpen ? '' : ' hidden')
            }
          >
            <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li>
                <NavLink
                  className='block py-2 pr-4 pl-3 text-white border-b border-pink-300 hover:bg-pink-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-800 md:p-0'
                  to='/about'
                  aria-current='page'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='block py-2 pr-4 pl-3 text-white border-b border-pink-300 hover:bg-pink-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-800 md:p-0'
                  to='/brands'
                  aria-current='page'
                  onClick={() => setNavbarOpen(!navbarOpen)}
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
