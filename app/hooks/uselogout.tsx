'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import cookie from 'cookiejs';
const useLogout = () => {
  const router = useRouter();
  const handleLogout = () => {
    cookie.remove('isLoggedToken');
    router.push('/signIn');
  };
  return { handleLogout };
};
export default useLogout;