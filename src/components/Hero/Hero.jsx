import { Button } from '@nextui-org/react';
import React from 'react';
// // import { Carousel } from 'react-responsive-carousel';
// // import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
      
<div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">


    <div class="w-full h-64 lg:w-1/2 lg:h-auto">
      
              <img class="h-full w-full object-cover" src="https://i.ibb.co/0sd88wX/Whats-App-Image-2023-04-10-at-21-05-35.jpg" alt="Winding mountain road" />
            {/* <img class="h-full w-full object-cover" src="https://i.ibb.co/Vjb38rg/jhunjhuni-1-1.jpg" alt="Winding mountain road" /> */}
       
           
        
       
    </div>


    <div
        class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
       
        <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-slate-800 lg:text-4xl">Our Products</h2>
            <p class="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
         
            <div class="mt-8">
                 <Button color="primary" variant="bordered">
        Bordered
      </Button> 
            </div>
        </div>

    </div>


</div>
    );
};

export default Hero;