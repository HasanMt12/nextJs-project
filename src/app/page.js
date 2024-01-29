import Card from "@/components/Card/Card";
import CategorCard from "@/components/Categories/CategorCard";
import Hero from "@/components/Hero/Hero";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Gallery from "@/components/Sections/Gallery";
import Rules from "@/components/rules/Rules";
import { Sparkle } from "lucide-react";
import {  Grape_Nuts } from "next/font/google";
const grape_Nuts = Grape_Nuts({ subsets: ["latin"], weight:"400" });

export default function Home() {
  return (
   <div>

      <Hero></Hero>
      <div className="px-8">
        <div className="flex flex-col justify-center items-center mt-12 mb-6">
          <h2 className={`${grape_Nuts.className} font-bold text-2xl  text-[#A17D60]`}>Categories</h2>
            <div className="flex justify-center items-center gap-2 text-[#A17D60]">
            <div className="w-[35px] h-[2px] bg-[#A17D60]"></div>
         <Sparkle />
         <div className="w-[35px] h-[2px] bg-[#A17D60]"></div>
      </div>
        </div>
       
      <CategorCard></CategorCard>
      </div>
      <div className="px-8">
        <div className="flex flex-col justify-center items-center mt-12 mb-6">
          <h2 className={`${grape_Nuts.className} font-bold text-2xl  text-[#A17D60]`}>Products</h2>
            <div className="flex justify-center items-center gap-2 text-[#A17D60]">
            <div className="w-[35px] h-[2px] bg-[#A17D60]"></div>
         <Sparkle />
         <div className="w-[35px] h-[2px] bg-[#A17D60]"></div>
      </div>
        </div>
   <Card></Card>
   </div>
   <Rules></Rules>
   <Gallery></Gallery>
   <div className="px-8">
        <div className="flex flex-col justify-center items-center mt-12 mb-6">
          <h2 className={`${grape_Nuts.className} font-bold text-2xl  text-[#A17D60]`}>New Arrivals</h2>
            <div className="flex justify-center items-center gap-2 text-[#A17D60]">
            <div className="w-[35px] h-[2px] bg-[#A17D60]"></div>
         <Sparkle />
         <div className="w-[35px] h-[2px] bg-[#A17D60]"></div>
      </div>
        </div>
   <Card></Card>
   </div>
   <NewsLetter></NewsLetter>
   </div>
  );
}
