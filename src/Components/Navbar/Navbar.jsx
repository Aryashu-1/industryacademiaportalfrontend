import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {

  const menuOpenFun = () => {

    console.log('Menu button clicked');
    
  };

  return (
    <div className="">
      <div className="flex justify-evenly bg-opacity-90 fixed top-0   w-full   bg-white py-3">
        <div className="flex justify-evenly">
          <NavLink href="https://vnrvjiet.ac.in/">
            <img src="https://vnrvjiet.ac.in/assets/images/Header%20Logo.png" alt="VNR VJIET Logo" />
          </NavLink>
        </div>
        <div className="flex justify-evenly text-center items-center">

              <div className="cursor-pointer" ><NavLink  to={'/'}><p className="mx-4 text-[17px] font-semibold text-[#1a1a1a]  hover:text-[#82001a] cursor-pointer">Home</p></NavLink></div>

              <NavLink className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]" to={'/aboutus'} >About Us</NavLink>

              <NavLink className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]" >Partners</NavLink>

              <NavLink className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]" to={'/events'} >Events</NavLink>

              <NavLink className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]" to={'/resources'} >Resources</NavLink>
              
              <NavLink className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]"  to={'/collaboration'}>Collaboration</NavLink>

              <NavLink className="mx-4 text-[17px] font-semibold text-[#1a1a1a] hover:text-[#82001a]"  to={'/login'}>Login</NavLink>
        </div>
        <button onClick={menuOpenFun} className="menu-btn">
          <div className="">
            <img src="https://vnrvjiet.ac.in/assets/images/Hamburger%20red.png" alt="" />
            <p>Menu</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
