

const Footer = () => {
    return (
        <div class="bg-gray-100">
    <div class="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div class="p-5 sm:w-4/12">
            <h3 class="font-bold text-xl text-indigo-600 mb-4">Company name</h3>
            <p class="text-gray-500 text-sm mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.</p>
            <div class="flex-row flex">
               
            </div>
        </div>
        <div class="p-5 sm:w-5/12 flex flex-col">
            <div class="text-sm uppercase text-indigo-600 font-bold mb-5">Recent Blogs</div>
            <div class="flex mb-3">
               
                <div class="pl-3 w-9/12">
                    <div class="font-bold text-sm">The Coldest Sunset</div>
                    <p class="text-gray-700 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <div class="flex mb-3">
             
                <div class="pl-3 w-9/12">
                    <div class="font-bold text-sm">The Coldest Sunset</div>
                    <p class="text-gray-700 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
        <div class="p-5 sm:w-3/12">
            <div class="text-sm uppercase text-indigo-600 font-bold mb-5">Instagram</div>
            <ul class="grid grid-cols-2 gap-5">
                <li>
                    <div  class="w-100 h-100 bg-gray-400"></div>
                </li>
                <li>
                     <div  class="w-100 h-100  bg-gray-400"></div>
                </li>
                <li>
                     <div  class="w-100 h-100  bg-gray-400"></div>
                </li>
                <li>
                     <div  class="w-100 h-100  bg-gray-400"></div>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>© Copyright 2023. All Rights Reserved.</p>
    </div>
</div>
    );
};

export default Footer;