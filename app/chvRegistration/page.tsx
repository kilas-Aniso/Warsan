'use client'

import React, { useState, useEffect } from 'react';
import useCreateHealthworker from '../hooks/useCreateHealthworker';
import { Sidebar } from '../components/Sidebar';

const CHVRegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hospital, setHospital] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { handleRegister,createdHealthworker } = useCreateHealthworker();


  const handleSubmit = (e:any) => {
    e.preventDefault();

    const healthworker = {
      username,
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      hospital,
      phone_number: phoneNumber,
    };

    handleRegister(healthworker);
  };

  

  return (
    <div>
      <Sidebar/>
    <div className='form-container bg-white flex flex-col items-center justify-center min-h-screen md:ml-60 ml-10'>
      <h1 className='md:text-5xl font-semibold md:mb-6 mb-2 text-customBlue'>CHV Registration</h1>
      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <div className='mb-4'>
          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='md:p-3 mt-5 md:pl-4 p-1 w-[600px] border border-customBlue item-start outline-2 outline-inset-2 md:w-  text-left text-lg'
            placeholder='Enter first name'
            style={{ textAlign: 'start' }}
          />
        </div>
        <div className='mb-4'>
          <input
            type='text'
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='md:p-3 mt-5 md:pl-4 p-1 w-[600px] border border-customBlue item-start outline-2 outline-inset-2 md:w-  text-left text-lg'
            placeholder='Enter last name'
            style={{ textAlign: 'start' }}
          />
        </div>
        

        <div className='mb-4'>
          <input
            type='text'
            id='hospital'
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            className='md:p-3 mt-5 md:pl-4 p-1 w-[600px] border border-customBlue item-start outline-2 outline-inset-2 md:w-  text-left text-lg'
            placeholder='Enter hospital name'
            style={{ textAlign: 'start' }}
          />
        </div>
        <div className='mb-4'>
          <input
            type='tel'
            id='phone_number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className='md:p-3 mt-5 md:pl-4 p-1 w-[600px] border border-customBlue item-start outline-2 outline-inset-2 md:w-  text-left text-lg'
            placeholder='Enter your phone number'
            style={{ textAlign: 'start' }}
          />
        </div>


        <div className='mb-4'>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='md:p-3 mt-5 md:pl-4 p-1 w-[600px] border border-customBlue item-start outline-2 outline-inset-2 md:w-  text-left text-lg'
            placeholder='Enter email'
            style={{ textAlign: 'start' }}
          />
        </div>
        <div className='mb-4'>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='md:p-3 mt-5 md:pl-4 p-1 w-[600px] border border-customBlue item-start outline-2 outline-inset-2 md:w-  text-left text-lg'
            placeholder='Enter username'
            style={{ textAlign: 'start' }}
          />
        </div>

        <div className='mb-4'>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='md:p-3 mt-5 md:pl-4 p-1 w-[600px] border border-customBlue item-start outline-2 outline-inset-2 md:w-  text-left text-lg'
            placeholder='Enter password'
            style={{ textAlign: 'start' }}
          />
        </div>
        <div className='text-red-500'>
        {createdHealthworker && Object.values(createdHealthworker)[0]}
        </div>
        <button
          type='submit'
          className='bg-customBlue text-white md:px-20 md:py-3 mt-6 rounded-lg'
        >
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default CHVRegistrationForm;