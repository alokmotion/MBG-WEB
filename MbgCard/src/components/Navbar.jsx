import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[100px] h-[66px]" />

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] text-black ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            {/* Check if the current navigation item is "Contact Us" and set the appropriate href and title */}
            {nav.id === "contactUs" ||
            nav.id === "home" ||
            nav.id === "about" ? (
              <a href={nav.href}>{nav.title}</a>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:flex hidden justify-end">
        <NavBtn />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="sm:flex justify-end">
          <a
            href="#_"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              Demo
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
