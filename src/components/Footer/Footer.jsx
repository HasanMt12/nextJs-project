

const Footer = () => {
    return (
        <div className="bg-gray-100">
    <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-4/12">
            <h3 className="font-bold text-xl text-indigo-600 mb-4">Company name</h3>
            <p className="text-gray-500 text-sm mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.</p>
            <div className="flex-row flex">
               
            </div>
        </div>
        <div className="p-5 sm:w-5/12 flex flex-col">
            <div className="text-sm uppercase text-indigo-600 font-bold mb-5">Recent Blogs</div>
            <div className="flex mb-3">
               
                <div className="pl-3 w-9/12">
                    <div className="font-bold text-sm">The Coldest Sunset</div>
                    <p className="text-gray-700 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <div className="flex mb-3">
             
                <div className="pl-3 w-9/12">
                    <div className="font-bold text-sm">The Coldest Sunset</div>
                    <p className="text-gray-700 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
        <div className="p-5 sm:w-3/12">
            <div className="text-sm uppercase text-indigo-600 font-bold mb-5">Instagram</div>
            <ul className="grid grid-cols-2 gap-5">
                <li>
                    <div  className="w-100 h-100 bg-gray-400"></div>
                </li>
                <li>
                     <div  className="w-100 h-100  bg-gray-400"></div>
                </li>
                <li>
                     <div  className="w-100 h-100  bg-gray-400"></div>
                </li>
                <li>
                     <div  className="w-100 h-100  bg-gray-400"></div>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>© Copyright 2023. All Rights Reserved.</p>
    </div>
</div>
    );
};

export default Footer;