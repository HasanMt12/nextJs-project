import { Sparkle } from "lucide-react";
import {  Grape_Nuts } from "next/font/google";
const grape_Nuts = Grape_Nuts({ subsets: ["latin"], weight:"400" });


export default function About() {
 

  return (
    <div className="">
        <div className="newsletter-container">
        <div className="flex flex-col justify-center items-center mt-12 mb-6">
          <h2 className={`${grape_Nuts.className} font-bold text-2xl  text-[#EBECF0]`}>About Us</h2>
            <div className="flex justify-center items-center gap-2 text-[#EBECF0]">
            <div className="w-[35px] h-[2px] bg-[#EBECF0]"></div>
         <Sparkle />
         <div className="w-[35px] h-[2px] bg-[#EBECF0]"></div>
      </div>
      </div>
    </div>
    
     
    </div>
  
  );
}
