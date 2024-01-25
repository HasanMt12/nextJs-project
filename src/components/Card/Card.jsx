"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <section className="container mx-auto   md:px-8 px-4">
           
           <Slider {...settings}>
        <section className="p-3 py-4 bg-purple-50 group text-center transform duration-500 hover:-translate-y-2 cursor-pointer hover:border-[#A17D60] border rounded-sm">
            <img src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" className=" w-[170px] h-[220px] mx-auto "  alt=""  />
            <button  className="hover:bg-[#A17D60] bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity  font-Lore text-[#333333] hover:text-white lg:text-lg md:text-md md:h-12 h-10 text-sm w-[80%] mx-auto py-2">Quick view</button>
            <h1 className="text-lg my-2">Soft Plushy Cushion Chair</h1>
           
            <h2 className="font-semibold mb-2">$29.99</h2>
        </section>

        <section className="p-3 py-4 bg-green-50 group text-center transform duration-500 hover:-translate-y-2 cursor-pointer hover:border-[#A17D60] border rounded-sm">
            <img src="https://www.dropbox.com/s/8ymeus1n9k9bhpd/y16625.png?dl=1" className=" w-[170px] h-[220px] mx-auto"  alt=""  />
            <button  className="hover:bg-[#A17D60] bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity  font-Lore text-[#333333] hover:text-white lg:text-lg md:text-md md:h-12 h-10 text-sm w-[80%] mx-auto py-2">Quick view</button>
            <h1 className="text-lg my-2">Comfortable Wooden Chair</h1>
           
            <h2 className="font-semibold mb-2">$39.99</h2>
        </section>

        <section className="p-3 py-4 bg-red-50 group text-center transform duration-500 hover:-translate-y-2 cursor-pointer hover:border-[#A17D60] border rounded-sm">
            <img src="https://www.dropbox.com/s/ykdro56f2qltxys/hh2774663-87776.png?dl=1" className=" w-[170px] h-[220px] mx-auto"  alt=""  />
            <button  className="hover:bg-[#A17D60] bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity  font-Lore text-[#333333] hover:text-white lg:text-lg md:text-md md:h-12 h-10 text-sm w-[80%] mx-auto py-2">Quick view</button>
            <h1 className="text-lg my-2">Multipurpose Wooden Trolly</h1>
           
            <h2 className="font-semibold mb-2">$19.99</h2>

        </section>

        <section className="p-3 py-4 bg-blue-50 group text-center transform duration-500 hover:-translate-y-2 cursor-pointer hover:border-[#A17D60] border rounded-sm">
            <img src="https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1" className=" w-[170px] h-[220px] mx-auto"  alt=""  />
            <button  className="hover:bg-[#A17D60] bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity  font-Lore text-[#333333] hover:text-white lg:text-lg md:text-md md:h-12 h-10 text-sm w-[80%] mx-auto py-2">Quick view</button>
            <h1 className="text-lg my-2">Multipurpose Wooden Tool</h1>
           
            <h2 className="font-semibold mb-2">$34.99</h2>
           
        </section>
        <section className="p-3 py-4 bg-red-50 group text-center transform duration-500 hover:-translate-y-2 cursor-pointer hover:border-[#A17D60] border rounded-sm">
            <img src="https://www.dropbox.com/s/ykdro56f2qltxys/hh2774663-87776.png?dl=1" className=" w-[170px] h-[220px] mx-auto"  alt=""  />
            <button  className="hover:bg-[#A17D60] bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity  font-Lore text-[#333333] hover:text-white lg:text-lg md:text-md md:h-12 h-10 text-sm w-[80%] mx-auto py-2">Quick view</button>
            <h1 className="text-lg my-2">Multipurpose Wooden Trolly</h1>
           
            <h2 className="font-semibold mb-2">$19.99</h2>

        </section>
        </Slider>
    </section>

    );
};

export default Card;