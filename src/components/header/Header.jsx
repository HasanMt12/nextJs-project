"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';


import { RiShoppingCartLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import MenuOverlay from "./Menu";
import './globals.css'

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  
   {
    title: "About",
    path: "/about",
  },
  {
    title: "Products",
    path: "/products",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed  mx-auto bg-[#E37B48] md:bg-transparent top-0 left-0 right-0 z-20  bg-clip-padding backdrop-filter md:backdrop-filter-none  backdrop-blur-lg bg-opacity-10  px-0 ">
      <div className="flex container lg:py-2 flex-wrap items-center justify-between  mx-auto px-4 py-1 bg-[#E37B48]  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-lg uppercase">
        <h2>company  Logo</h2>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2  rounded "
            >
              <RiMenu3Line className="text-[#21C4B4] h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border border-[#21C4B4] rounded "
            >
              <IoMdClose className="text-[#21C4B4] h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden  md:block md:w-auto  rounded-3xl  p-4  px-0 shift " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
            
               <li key={index} > 
              {/* Use ScrollLink instead of NavLink */}
              <ScrollLink
                to={link.path.substring(1)} // Remove the '#' from the path
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer lg:text-md nav font-semibold md:text-sm text-lg text-[#ED3A58] rounded md:p-0 tracking-wide"
              >
                {link.title}
              </ScrollLink>
            </li>
            ))}
          </ul>
        </div>
        <div className="menu hidden sm:block md:w-auto " id="navbar">
             <div className="flex justify-start items-center gap-3 text-lg">
<h2 className="text-lg capitalize">Hello, Hasan</h2>
          <FaUserCircle className="text-[#0077B5] text-xl"/>
                 <RiShoppingCartLine className="text-[#0077B5] text-xl" />

          
             
                  
             </div>
              
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;