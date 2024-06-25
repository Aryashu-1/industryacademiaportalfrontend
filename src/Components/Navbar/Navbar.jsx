import { NavLink } from "react-router-dom";
import React from "react";
import Menu from "../MenuBar/Menu";

const Navbar = () => {
  const menuOpenFun = () => {
    console.log('Menu button clicked');
  };

  return (
    <div>
      <div className="flex justify-between items-center fixed top-0 w-full z-30   bg-white py-3 px-4 md:px-10">
        <div className="flex items-center">
          <NavLink to={''}>
            <img
              src="https://vnrvjiet.ac.in/assets/images/Header%20Logo.png"
              alt="VNR VJIET Logo"
              className="h-10"
            />
          </NavLink>
        </div>
        {/* <div className="hidden md:flex justify-evenly text-center items-center">
          <NavLink to="/" className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]">
            Home
          </NavLink>
          <NavLink to="/aboutus" className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]">
            About Us
          </NavLink>
          <NavLink to="/partners" className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]">
            Partners
          </NavLink>
          <NavLink to="/events" className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]">
            Events
          </NavLink>
          <NavLink to="/resources" className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]">
            Resources
          </NavLink>
          <NavLink to="/collaboration" className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]">
            Collaboration
          </NavLink>
          <NavLink to="/login" className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]">
            Login
          </NavLink>
        </div> */}
        <div className=" flex items-center">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
