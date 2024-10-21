'use client';

import * as React from 'react';
import '@/lib/env';

import AccountButton from '@/components/buttons/AccountButton';
import Footer from '@/components/Footer';
import NavBar from '@/components/Header/NavBar';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <NavBar />



      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold mt-8'>Home</h1>
        

        <p className='mt-4'>
          
        <AccountButton onClick={() => console.log('Account Button Clicked')} label='Account' />

        </p>

        <p className='mt-4'>
          This is a starter template for Next.js with Tailwind CSS.
        </p>
      </div>
      <Footer />
    </>
  );
}
