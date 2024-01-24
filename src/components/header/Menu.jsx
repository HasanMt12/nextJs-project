import React from "react";

import { Link as ScrollLink } from 'react-scroll';
const MenuOverlay = ({ links }) => {
  return (
    <ul data-aos-duration="1000"  data-aos="fade-down" className="flex flex-col gap-2 py-3 items-center">
      {links.map((link, index) => (
         <li key={index} > 
              {/* Use ScrollLink instead of NavLink */}
              <ScrollLink
                to={link.path.substring(1)} // Remove the '#' from the path
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer  text-md  rounded md:p-0 hover:text-[#21C4B4] tracking-wide"
              >
                {link.title}
              </ScrollLink>
            </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;