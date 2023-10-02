/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from "react";
import Link from "next/link";
import { LuLayoutGrid } from "react-icons/lu";
import { TbAlertTriangle } from "react-icons/tb";
import { PiUsersThreeDuotone, PiUsersFour } from "react-icons/pi";
import { MdLogout } from "react-icons/md"
import Logout from "../Logout";


// type LogoutProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onLogout: () => void;
// };

interface ChildItem {
  icon: React.ReactElement;
  label: string;
  link?: string;
  onClick?: () => void;
}
interface NavItemProps {
  item: ChildItem;
  isActive: boolean;
  onClick: () => void;
}
const NavItem: React.FC<NavItemProps> = ({ item, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const href = item.link || '';
  return (
    <Link href={href} passHref>
      <div
        className={`flex items-center my-1 p-1 rounded-lg ${
          isActive ? "" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <div className={`flex items-center justify-center w-5 h-5 md:mr-2 md:h-10 md:w-10 mb-8 ${isActive || isHovered ? "text-pink-500" : "text-white"}`}>
          {item.icon}
        </div>
        <span className={`md:text-base text-xs mb-8 ${isActive || isHovered ? "text-pink-500" : "text-white"}`}>
          {item.label}
        </span>
      </div>
    </Link>
  );
};
export const Sidebar: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [activePage, setActivePage] = useState("/");
  const handleLogoutConfirmation = () => {
    setShowLogoutModal(true);
  };
  const handleNavItemClicked = (link: string) => {
    setActivePage(link);
  };
  return (
    <div className="flex h-screen fixed">
      <div className="flex flex-col w-20 md:w-60 p-2 sm:p-3 md:p-5 bg-customBlue items-center justify-center font-poppins">
        <div className="flex items-center md:mb-10 mb-6">
          <img src="./logo.png" alt="arrow" className="md:w-14 md:h-14 w-6 h-6 object-cover -ml-1 mb-2 mt-2" />
          <span className="text-white md:text-2xl text-sm font-bold ml-2">RAJO</span>
        </div>
        <hr className="mb-5 w-20 md:w-60 md:mb-16" style={{ borderColor: "white" }} />
        <div className="flex flex-col items-start justify-start">
          <NavItem
            item={{
              icon: <LuLayoutGrid className="icon md:w-8 md:h-8 w-4 h-4 ml-2" />,
              label: "Dashboard",
              link: "/",
            }}
            isActive={activePage === "/"}
            onClick={() => handleNavItemClicked("/")}
          />
          <NavItem
            item={{
              icon: <TbAlertTriangle className="icon md:w-8 md:h-8 w-4 h-4 ml-2" />,
              label: "Alerts",
              link: "/alerts",
            }}
            isActive={activePage === "/alerts"}
            onClick={() => handleNavItemClicked("/alerts")}
          />
          <NavItem
            item={{
              icon: <PiUsersThreeDuotone className="icon md:w-8 md:h-8 w-4 h-4 ml-2" />,
              label: "CHV",
              link: "/CHVRecords",
            }}
            isActive={activePage === "/CHVRecords"}
            onClick={() => handleNavItemClicked("/CHVRecords")}
          />
          <NavItem
            item={{
              icon: <PiUsersFour className="icon md:w-8 md:h-8 w-4 h-4 ml-2" />,
              label: "Children",
              link: "/childRecords",
            }}
            isActive={activePage === "/childRecords"}
            onClick={() => handleNavItemClicked("/childRecords")}
          />
        </div>
        <div className="mt-auto flex flex-col items-start justify-start cursor-pointer" onClick={handleLogoutConfirmation}>
          <div className="flex text-white">
            <MdLogout className="icon md:w-8 md:h-8 w-4 h-4 -ml-12 mr-2" />
            <h2 className="mt-1">Logout</h2>
          </div>
        </div>
      </div>
      <main className="flex-1"></main>
      {showLogoutModal && (
  <Logout
    isOpen={showLogoutModal}
    onClose={() => setShowLogoutModal(false)}
    // onLogout={handleLogoutConfirmation}
  />
)}
    </div>
  );
};