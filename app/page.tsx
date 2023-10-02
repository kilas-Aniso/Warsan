'use client'
import React, { useEffect, useState } from 'react';
import Overview from './components/overview';
import SignInPage from './signIn/page';
import cookie from 'cookiejs';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    
    const isLoggedIn = Boolean(cookie.get('isLoggedToken'));
    console.log({isLoggedIn});
    isLoggedIn? router.push('/'): router.push('/signIn')

    

    setIsUserLoggedIn(isLoggedIn);
  }, []);

  return (
    <main className='bg-white'>
      <div>
        <Overview/>
      </div>
    </main>
  );
};

export default Home;
