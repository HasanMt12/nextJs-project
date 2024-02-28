"use client"
import {  Grape_Nuts } from "next/font/google";
const grape_Nuts = Grape_Nuts({ subsets: ["latin"], weight:"400" });
import { Button } from '@nextui-org/react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} p-4 bg-blue-500`}
        style={{ ...style, 
        top: "50%",
        right: "0",
        transform: "translateY(-50%)", display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, top: "50%",
        right: "0",
        transform: "translateY(-50%)",display: "block" }}
        onClick={onClick}
      />
    );
  }
  
const Hero = () => {
    const settings = {
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        
      };
    return (
      
<div className="relative flex flex-col  items-center mx-auto lg:flex-row-reverse lg:max-w-5xl  xl:max-w-6xl">


    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
    <Slider {...settings}>
         <img className="h-full w-full object-cover" src="https://i.ibb.co/9H12jxJ/Neutral-Aesthetic-Modern-Living-Room-Interior-Wall-Art-Poster-Frame-Mockup-Instagram-Post.png" alt="Winding mountain road" />
         <img className="h-full w-full object-cover" src="https://i.ibb.co/ZSv4GPx/slider.png" alt="Winding mountain road" /> 
    </Slider>
            
       
    </div>


    <div
        className="max-w-lg bg-[#E6E2D7] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#E4DED2] md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
       
        <div className="flex flex-col px-8 py-12 md:px-16">
        <div
    className="text-4xl md:w-[50%] w-[70%] cursor-pointer relative before:absolute before:bg-[#A17D60] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
      <span className={`${grape_Nuts.className} relative text-[#2C2C2C]`}>Home Items</span>
        </div>
            <p className="mt-4 text-[#333333]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                
            </p>
         
            <div className="mt-8">
                 <Button  className='rounded-none border-y-1 border-[#A17D60] bg-transparent text-[#A17D60] font-semibold uppercase'>
        Explore
      </Button> 
            </div>
        </div>

    </div>


</div>
    );
};

export default Hero;