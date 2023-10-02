/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface Field {
  id: string;
  type: string;
  label: string;
  pattern?: string;
}

interface FormAtomProps {
  title: string;
  fields: Field[];
  buttonText: string;
  children: React.ReactNode;
  isSignUp: boolean;
}

const FormAtom = ({
  title,
  fields,
  buttonText,
  children,
  isSignUp,
}: FormAtomProps) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const allFields = [...fields];

  return (
    <div className="flex md:flex-row flex-col h-screen font-poppins">
      <div className="form-container bg-customBlue text-white flex flex-col items-start  w-full h-1/22 md:w-1/2">
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
          <p className="md:text-5xl text-base font-bold mb-8 ml-12 md:ml-32 md:mt-4 mt-4 font-poppins ">
            Welcome to Rajo Dashboard
          </p>
        </div>
        <div className="mt-">
          <img
            src="/signup-image.svg"
            alt="Image"
            className="object-cover md:w-full md:h-124 w-1/3 ml-28"
          />
        </div>
        {children}
      </div>

      <div className="form-container bg-white flex flex-col items-center justify-center md:w-2/3 w-full">
        <h1 className="md:text-5xl text-xl text-customBlue font-semibold md:mb-16 mb-4 mt-2">
          {title}
        </h1>
        <form className="flex flex-col items-center">
          {allFields.map((field) => (
            <div className="mb-8" key={field.id}>
              <input
                type={field.type}
                id={field.id}
                className="md:p-3 md:pl-4 p-1 border border-customBlue rounded w-[500px] font-poppins text-customBlue text-left text-lg"
                placeholder={`Enter ${field.label}`}
                pattern={field.pattern}
                required
              />
            </div>
          ))}
          <div className="mb-8" key="password">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="md:p-3 md:pl-4 p-1 border border-customBlue rounded w-[500px] font-poppins text-customBlue text-left text-lg"
                placeholder="Enter Password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="absolute top-1/2 transform -translate-y-1/2 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye style={{ color: 'black' }} /> : <FaEyeSlash style={{ color: 'black' }} />}
              </button>
            </div>
          </div>

          <button
            className="text-2xl font-semibold md:mt-12 mb-6 bg-customBlue text-white font-poppins px-20 py-2  rounded-lg"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAtom;