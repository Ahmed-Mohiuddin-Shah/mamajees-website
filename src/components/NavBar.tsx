import Image from 'next/image';
import React, { useState } from 'react';

import AccountButton from '@/components/buttons/AccountButton';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='p-4'>
      <div className='flex items-center justify-between flex-wrap'>
        <div className='block lg:hidden'>
          <button
            title='Toggle Menu'
            onClick={() => setIsOpen(!isOpen)}
            className=' focus:outline-none'
          >
            <svg
              className='fill-current h-6 w-6'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 01-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z'
                />
              ) : (
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z'
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className='text-sm lg:flex-grow'>
            <li className='block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4'>
              <a href='#home'>Home</a>
            </li>
            <li className='block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4'>
              <a href='#about'>About</a>
            </li>
            <li className='block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4'>
              <a href='#services'>Services</a>
            </li>
            <li className='block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
        <div className=' text-xl'>
          <a href='/' title='MamaJees Logo'>
            <Image src='/svg/Logo.svg' alt='Logo' width={250} height={250}/>
          </a>
        </div>
        {/* Dark Mode Button */}
        <div className='block '>
          <button
            title='Toggle Dark Mode'
            onClick={() => {
              document.documentElement.classList.toggle('dark');
            }}
            className='focus:outline-none'
          >
            <svg
              className='fill-current h-6 w-6'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c1.68 0 3.24.52 4.54 1.4a9.99 9.99 0 00-2.54 6.6c0 2.61 1 4.98 2.64 6.78A7.96 7.96 0 0112 20z'
              />
            </svg>
          </button>
        </div>
        <div className='block '>
          <AccountButton
            onClick={() => console.log('Account Button Clicked')}
            label='Login'
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
