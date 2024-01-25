import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const CategorCard = () => {
    return (
        <div className="flex md:flex-row flex-col lg:gap-4 md:gap-3 gap-2">
            <Card isFooterBlurred className="w-full h-[300px] bg-[#F5F5F5] col-span-12 shadow-sm sm:col-span-7 rounded-sm">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        
        <h4 className="text-[#2C2C2C] font-medium text-2xl uppercase"><span className="text-[#2B4602]">New</span> Plants</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.ibb.co/gDnFkf8/plants.png"
      />
      <CardFooter className="absolute bg-[#e2dfdf] bottom-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10 border-t-1 rounded-none border-[#2B4602]">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            
            <p className="text-tiny text-[#2C2C2C]/60">Get up to 60% off.</p>
          </div>
        </div>
        <Button  className='rounded-none border-y-1 border-[#2C2C2C] bg-transparent text-[#2C2C2C] p-1 h-9 font-semibold uppercase text-sm'>
        Shop Now</Button> 
      </CardFooter>
    </Card>

    
    <Card isFooterBlurred className="w-full h-[300px] bg-[#2C2C2C] col-span-12 shadow-sm sm:col-span-7 rounded-sm">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        
        <h4 className="text-white/90 font-medium text-2xl uppercase"><span className="text-[#BB9B68]">Chain</span> Lamp</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.ibb.co/RQ5crCc/lamb.png"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10 rounded-none border-t-1 border-[#BB9B68]">
        <div className="flex flex-grow gap-2 items-center">
          
          <div className="flex flex-col">
            
            <p className="text-tiny text-white/60">Get up to 60% off.</p>
          </div>
        </div>
        <Button  className='rounded-none border-y-1 border-[#BB9B68] bg-transparent text-[#BB9B68] p-1 h-9 font-semibold uppercase text-sm'>
        Shop Now</Button> 
      </CardFooter>
    </Card>

    <Card isFooterBlurred className="w-full h-[300px] bg-[#F5F5F5] col-span-12 shadow-sm sm:col-span-7 rounded-sm">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        
        <h4 className="text-[#2C2C2C] font-medium text-2xl uppercase"><span className="text-[#665142]">New</span> Chair</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.ibb.co/VVLC4Z5/chair.png"
      />
      <CardFooter className="absolute bg-[#E0E0E0] bottom-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-10 border-t-1 rounded-none border-[#665142]">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            
            <p className="text-tiny text-[#2C2C2C]/60">Get up to 60% off.</p>
          </div>
        </div>
        <Button  className='rounded-none border-y-1 border-[#2C2C2C] bg-transparent text-[#2C2C2C] p-1 h-9 font-semibold uppercase text-sm'>
        Shop Now</Button> 
      </CardFooter>
    </Card>

        </div>
    );
}

export default CategorCard;
