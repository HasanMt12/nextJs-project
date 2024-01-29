"use client"
import {  Grape_Nuts } from "next/font/google";
const grape_Nuts = Grape_Nuts({ subsets: ["latin"], weight:"400" });
import { Button, Input } from '@nextui-org/react';
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Login() {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="">
     
        <div className="relative flex flex-col md:min-h-[65vh] min-h-[65vh] items-center mx-auto lg:flex-row-reverse lg:max-w-5xl  xl:max-w-6xl">


    <div className="w-[100%] h-64 lg:w-1/2 lg:h-auto ">
  
         <Image  width={500}
      height={500} className="w-full h-full object-cover" src="https://i.ibb.co/9H12jxJ/Neutral-Aesthetic-Modern-Living-Room-Interior-Wall-Art-Poster-Frame-Mockup-Instagram-Post.png" alt="Winding mountain road" />
    
       
    </div>


    <div
        className="max-w-lg w-full bg-[#E6E2D7] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#E4DED2] md:max-w-2xl md:z-10 md:shadow-lg  absolute md:top-0 mt-48 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
       
        <div className="flex flex-col px-8 md:py-12 py-6 md:px-16">
        <div
    className="lg:text-4xl md:text-2xl text-xl md:w-[50%] w-[70%] cursor-pointer relative before:absolute before:bg-[#A17D60] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
    <span className={`${grape_Nuts.className} relative text-[#2C2C2C]`}>Login Here!</span>
</div>
<form className="w-full lg:w-[70%]">
        <Input 
         color="primary"
         type="email" variant="underlined" label="Email" ></Input>
         
         <Input 
         color="primary"
          variant="underlined" label="Password" 
         endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeOff className=" pointer-events-none"/>
               
              ) : (
                <Eye className=" text-[primary] pointer-events-none"/>
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
         ></Input>
        </form>
         
            <div className="mt-8">
                 <Button  className='rounded-none border-y-1 border-[#A17D60] bg-transparent text-[#A17D60] font-semibold uppercase'>
        Login
      </Button> 
            </div>
        </div>

    </div>


</div>
    </div>
  
  );
}
