/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useLogin from '../hooks/uselogin';
import cookie from 'cookiejs';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, handleSignin } = useLogin({
    username: username,
    password: password,
  });
  const router = useRouter();
  const handleLoginUser = async (e:any) => {
    e.preventDefault();
    await handleSignin();
    console.log({user});
  };
  console.log('ola',user);
  return (
    <div className="flex md:flex-row flex-col h-screen font-poppins">
      <div className="form-container bg-customBlue text-white flex flex-col items-start w-full h-screen md:w-1/2">
        <div className="flex items-center 2 ml-4">
          <img
            src="/warsanlogo.svg"
            alt="Logo"
            className="md:w-24 md:h-18 w-20 h:8 ml- md:ml- mt-6"
          />
          <span className="md:text-5xl text-2xl md:ml- mt-6 font-semibold">
            RAJO
          </span>
        </div>
        <div>
          <p className="md:text-4xl text-base font-bold mb-8 ml-12 md:ml-32 md:mt-4 mt-4 font-poppins ">
            Welcome to Rajo Dashboard
          </p>
        </div>
        <div className="-mt-10">
          <img
            src="/signup-image.svg"
            alt="Image"
            className="object-cover md:w-full md:h-124 w-1/3 ml-28"
          />
        </div>
        <div className="text-3xl md:mt-4 mt:2">
          <p className="md:mb-8 text-base md:text-4xl md:ml-32 ml-1 mb-2 font-poppins">
            Sign in to continue your remarkable <span className="md:ml-48"> journey with us</span>
          </p>
          <p className="md:ml-64 ml-12 md:text-2xl text-base font-bold font-poppins">
            Do not have an account?{' '}
            <Link href="/signUp">
              <span className="md:text-xl text-base text-purple-400"> Register</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="form-container bg-white flex flex-col items-center justify-center md:w-2/3 w-full">
        <h1 className="md:text-5xl text-xl text-customBlue font-semibold md:mb-16 mb-4 mt-2">
          Log in to your account
        </h1>
        <form className="flex flex-col items-center" onSubmit={handleLoginUser}>
          <div className="mb-8">
            <input
              type="text"
              id="username"
              className="md:p-3 md:pl-4 p-1 border border-customBlue rounded w-[500px] font-poppins text-customBlue text-left text-lg"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              id="password"
              className="md:p-3 md:pl-4 p-1 border border-customBlue rounded w-[500px] font-poppins text-customBlue text-left text-lg"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit'
            className="text-2xl font-semibold md:mt-12 mb-6 bg-customBlue text-white font-poppins px-20 py-2 rounded-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignInPage;