import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faTags,
  faBars,
  faXmark,
  faMoon,
  faSun
} 
from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(()=>{
    return localStorage.getItem("theme") == "dark" ? "dark" : "light" ;
  });

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {

     if(theme === "dark"){
        document.documentElement.classList.add("dark")
      }
      else{
        document.documentElement.classList.remove("dark")
      }

  },[theme])

  const darkMode = () => {
    setTheme((preValue) => {

      const newTheme = preValue === "light" ? "dark" : "light" 

      localStorage.setItem("theme",newTheme);

      return newTheme

    })
  
  }

  const navItemClass = "text-primary dark:text-light dark:hover:text-lighter  hover:text-purple-700 cursor-pointer";

  return (
    <>
      <div className="flex justify-around  items-center pt-3 px-6 pb-4 shadow-2xl ">
      
        <div className="flex  items-center  gap-2">
          <NavLink to="/home">{

            <FontAwesomeIcon
            icon={faTags}
            className= "text-primary dark:text-light dark:hover:text-lighter  hover:cursor-pointer"
            
          />}
          </NavLink>
          
          <h1 className="text-primary dark:text-light dark:hover:text-lighter hover:cursor-pointer ">
            <NavLink to="/home">Eazy Stickers</NavLink>
          </h1>
        </div>

        
        <div className="flex gap-4 items-center">

          <button className="hover:cursor-pointer " onClick={darkMode}>
            <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />           
          </button>
        
          <ul className="hidden md:flex gap-5">
            <NavLink to="/home" className={ navItemClass }>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? `underline ${navItemClass}` : navItemClass }>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? `underline ${navItemClass}` : navItemClass }>Contact</NavLink>
            <NavLink to="/login" className={({isActive}) => isActive ? `underline ${navItemClass}` : navItemClass }>Login</NavLink>
          </ul>

          
          <NavLink to="/cart" className={navItemClass}>
          
            <FontAwesomeIcon icon={faShoppingBasket}/>
          
          </NavLink>

        
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
