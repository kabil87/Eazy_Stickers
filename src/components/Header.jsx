import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faTags,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex justify-around items-center mt-3 px-6 shadow-2xl">
      
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faTags}
            style={{ color: "#531EA4", fontSize: "35px" }}
          />
          <h1 className="text-purple-900 text-xl">
            Eazy Stickers
          </h1>
        </div>

        
        <div className="flex gap-4 items-center">
        
          <ul className="hidden md:flex gap-5">
            <li className="text-purple-900  hover:text-purple-700 cursor-pointer">Home</li>
            <li className="text-purple-900  hover:text-purple-700 cursor-pointer">About</li>
            <li className="text-purple-900  hover:text-purple-700 cursor-pointer">Contact</li>
            <li className="text-purple-900  hover:text-purple-700 cursor-pointer">Login</li>
          </ul>

          
          <FontAwesomeIcon
            icon={faShoppingBasket}
            style={{ color: "#531EA4", fontSize: "20px" }}
          />

        
          <div className="block md:hidden pl-2">
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggle}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="absolute top-0 right-0 w-64 bg-gray-300 h-screen shadow-lg z-50 p-6 transition-all duration-300">
          <div className="flex justify-end mb-6">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={toggle}
              className="cursor-pointer text-xl"
            />
          </div>

          <ul className="flex flex-col items-center gap-8 mt-6">
            <li className="text-purple-900  text-lg hover:text-purple-700 cursor-pointer">Home</li>
            <li className="text-purple-900  text-lg hover:text-purple-700 cursor-pointer">About</li>
            <li className="text-purple-900  text-lg hover:text-purple-700 cursor-pointer">Contact</li>
            <li className="text-purple-900  text-lg hover:text-purple-700 cursor-pointer">Login</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
