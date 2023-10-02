/* eslint-disable @next/next/no-img-element */


'use client'

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import useCreateUser from '../hooks/useCreateUser';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { user, handleSignUp } = useCreateUser({
    username,
    email,
    password,
    first_name: firstName,
    last_name: lastName,
  });

  const router = useRouter();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCreateUser = async (e:any) => {
    e.preventDefault(); 
    if (username && email && password && firstName && lastName) {
      await handleSignUp();
      router.push('/signIn');
    } else {
      alert('Please fill all required fields.');
    }
  };

  const isSignUpComplete = user !== null;

  return (
    <div className="flex md:flex-row flex-col h-screen font-poppins">
      <div className="form-container bg-customBlue text-white flex flex-col items-start w-full h-full md:w-1/2">
        <div className="flex items-center 2 ml-4">
          <img
            src="/warsanlogo.svg"
            alt="Logo"
            className="md:w-24 md:h-18 w-20 h:8 ml- md:ml- mt-6 "
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
            Create an account to start your{' '}
            <span className="md:ml-48">journey with us</span>
          </p>
          <p className="md:ml-64 ml-12 md:text-2xl text-base font-bold font-poppins">
            Already have an account?{' '}
            <Link href="/signIn">
              <span className="md:text-xl text-base text-purple-400">
                Log in
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div className="form-container bg-white flex flex-col items-center justify-center md:w-2/3 w-full">
        <h1 className="md:text-5xl text-xl text-customBlue font-semibold md:mb-16 mb-4 mt-2">
          Create your account
        </h1>
        <form className="flex flex-col items-center" onSubmit={handleCreateUser}>
          <div className="mb-8">
            <input
              type="text"
              id="firstName"
              className="md:p-3 md:pl-4 p-1 border border-customBlue rounded w-[500px] font-poppins text-customBlue text-left text-lg"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="text"
              id="lastName"
              className="md:p-3 md:pl-4 p-1 border border-customBlue rounded w-[500px] font-poppins text-customBlue text-left text-lg"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

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
              type="email"
              id="email"
              className="md:p-3 md:pl-4 p-1 border border-customBlue rounded w-[500px] font-poppins text-customBlue text-left text-lg"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-8 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="md:p-3 md:pl-4 p-1 border border-customBlue rounded w-[500px] font-poppins text-customBlue text-left text-lg"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute top-[11px] right-4 cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            type="submit"
            className={`md:w-72 w-44 h-12 bg-customBlue text-white rounded-lg font-poppins text-lg ${
              isSignUpComplete ? '' : 'pointer-events-none opacity-50'
            }`}
          >
            Register
          </button>
        </form>
        {isSignUpComplete && (
          <p className="md:text-xl text-base text-customPurple mt-4">
           {' '}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
