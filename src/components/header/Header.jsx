"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import {  Grape_Nuts } from "next/font/google";
const grape_Nuts = Grape_Nuts({ subsets: ["latin"], weight:"400" });
import { RiShoppingCartLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import MenuOverlay from "./Menu";
import './globals.css'
import { Avatar, Badge } from "@nextui-org/react";
import Link from "next/link";

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
    <nav className="sticky  mx-auto  md:bg-transparent top-0 left-0 right-0 z-20  bg-clip-padding backdrop-filter md:backdrop-filter-none  backdrop-blur-lg bg-opacity-10  px-0 ">
      <div className="flex  lg:py-1 flex-wrap items-center justify-between  mx-auto md:px-6 lg:px-8 px-4 py-1   bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-lg uppercase">
        <h2 className={`${grape_Nuts.className} font-bold`}><span className="text-[#A17D60] text-3xl">Home</span> Decore</h2>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2  rounded "
            >
              <RiMenu3Line className="text-[#C7BAAC] h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border border-[#C7BAAC] rounded "
            >
              <IoMdClose className="text-[#C7BAAC] h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden  md:block md:w-auto  rounded-3xl  p-4  px-0 shift " id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-10 mt-0 ">
            {navLinks.map((link, index) => (
            
               <li key={index}
              className="cursor-pointer lg:text-md nav font-semibold md:text-sm text-lg text-[#333333] hover:text-[#A17D60] rounded md:p-0 tracking-wide"
               > 
          <Link
           href={link.path} 
          >
           {link.title} 
          </Link>
               
                
              
                
             
            </li>
            ))}
          </ul>
        </div>
        <div className="menu hidden sm:block md:w-auto " id="navbar">
             <div className="flex justify-start items-center gap-3 text-lg">
<h2 className="text-md italic capitalize">Hello, Hasan</h2>

          <Badge size="sm" content="" color="success" shape="circle" placement="bottom-right">
        <Avatar
        size="sm"
          radius="full"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </Badge>
                 <RiShoppingCartLine className="text-[#A17D60] text-2xl" />

          
             
                  
             </div>
              
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;