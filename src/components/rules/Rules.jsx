import { Banknote, CarFront } from "lucide-react";


const Rules = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-4 md:gap-3 gap-1 lg:my-12 md:my-8 my-6 lg:px-10 md:px-6 px-4">
            <div className="flex justify-center items-start gap-3 bg-gradient-to-r from-[#ebe3d1] via-[#ddceaa] to-[#e6dabf]  lg:py-10 md:py-8 py-6">
            <CarFront />
            <div className="">
                <h2 className="font-bold md:text-lg text-md">Fast Delivery</h2>
                <h2 className="text-xs text-gray-600 font-semibold">All Over the world</h2>
            </div>
            </div>
            <div className="flex justify-center items-start gap-3 bg-gradient-to-r from-[#EDE5E2] via-[#e0d4d0] to-[#e2cdc6]  lg:py-10 md:py-8 py-6">
            <Banknote />
            <div className="">
                <h2 className="font-bold md:text-lg text-md">100% MONEY BACK</h2>
                <h2 className="text-xs text-gray-600 font-semibold">Within 10 days</h2>
            </div>
            </div>
            <div className="flex justify-center items-start gap-3 bg-gradient-to-r from-[#F2E6DF] via-[#ecdcd3] to-[#ecd8cd] lg:py-10 md:py-8 py-6">
            <CarFront />
            <div className="">
                <h2 className="font-bold md:text-lg text-md">SECURE PAYMENT</h2>
                <h2 className="text-xs text-gray-600 font-semibold">Mastercard/Visa/Paypal</h2>
            </div>
            </div>
            
        </div>
    );
}

export default Rules;
