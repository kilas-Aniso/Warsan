'use client'

import { useState } from 'react';
import { createUser } from '../utilities/utils';

interface UsersData {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

const useCreateUsers = (userData: UsersData) => {
  const [user, setUser] = useState<UsersData[] | object>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: ''
  });
  const [error, setError] = useState<string>('');

  const handleSignUp = async () => {
    try {
      const createdUser = await createUser(userData);
      setUser(createdUser);
    } catch (error:any) {
      setError(error.message);
    }
  };

  return { handleSignUp, user, error };
};

export default useCreateUsers;