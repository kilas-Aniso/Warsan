'use client'

import { useState } from 'react';
import {loginUser} from '../utilities/utils';
import { useRouter } from 'next/navigation';
import cookie from 'cookiejs';
interface LoginData {
  username: string;
  password: string;
}
const useLogin = (initialLoginData: LoginData) => {
  const router = useRouter();
  const [user, setUser] = useState({token:''});
  const handleSignin = async () => {
      const response = await loginUser(initialLoginData);
      
      if (response && response.token && response.token.length > 0)  {
        cookie.set('isLoggedToken',response.token);
        router.push('/');
      }  else {
        router.push('/signIn');
      }
      setUser(response)
}
return { user, handleSignin };
}
export default useLogin;