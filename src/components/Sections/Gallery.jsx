import React from 'react';

import {  Grape_Nuts } from "next/font/google";
import { MoveRight } from 'lucide-react';
const grape_Nuts = Grape_Nuts({ subsets: ["latin"], weight:"400" });

const Gallery = () => {
    return (
        <div className=" h-full py-6 sm:py-8 lg:py-12 md:my-12 my-6">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
   
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://i.ibb.co/wQpsW1G/offer.png"  alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className={`${grape_Nuts.className} relative ml-4 mb-3 inline-block flex justify-start gap-2 items-center text-md text-[#E7AB39] md:ml-5 md:text-2xl`}>Explore <MoveRight className='mt-1 group-hover:ml-4'/></span>
            </a>
          
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://i.ibb.co/vC9DMpK/sample-Photo-Three.png"   alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0  bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className={`${grape_Nuts.className} relative ml-4 mb-3 inline-block text-md text-[#111E05] font-bold md:ml-5 md:text-2xl`}>New Trends</span>
            </a>
         

           
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://i.ibb.co/NCzJSny/sample-Photo-One.png"   alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className={`${grape_Nuts.className} relative ml-4 mb-3 inline-block text-md text-[#E3E3E3] font-bold md:ml-5 md:text-2xl`}>New Collection</span>
            </a>
           

      
            <a href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ">
                <img src="https://i.ibb.co/Dfsqv47/giftCard.png"   alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className={`${grape_Nuts.className} relative ml-4 mb-3 inline-block flex justify-start gap-2 items-center text-md text-[#5c4535] font-bold md:ml-5 md:text-2xl`}>Explore <MoveRight className='mt-1 group-hover:ml-4'/></span>
            </a>
         
        </div>
    </div>
</div>
    );
};

export default Gallery;