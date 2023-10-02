'use client'


import React from "react";
import useLogout from "@/app/hooks/uselogout";

interface LogoutProps {
  isOpen: boolean;
  onClose: () => void;   
}

const Logout = ({ isOpen, onClose }: LogoutProps) => {
  const { handleLogout } = useLogout();

  return (
    <div className={` font-kumbh-sans bg-opacity-50 bg-customBlue fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-customBlue p-8 pt-28 pb-20 pl-20 rounded-lg w-66 h-250 flex flex-col items-center justify-center bg-opacity-80 backdrop-blur-50" >
        <h2 className="text-2xl mb-4 text-white">Are you sure you want to logout?</h2>
        <div className="flex gap-4">
          <button className="bg-purple-700 text-white px-3 py-3 rounded-md w-28 border-2 border-purple-900" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-white-500 bg-opacity-20 text-white px-3 py-3 rounded-md w-28 border-2 border-purple-900" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
