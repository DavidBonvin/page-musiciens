import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import React, { useState } from "react";

import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden "
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a onClick={handleNav}
            href="#David"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 ">Home</span>
          </a>
          <a onClick={handleNav}
            href="#experiences"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4 ">Works</span>
          </a>
          <a onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4 ">Projects</span>
          </a>
          <a onClick={handleNav}
            href="#formation"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4 ">Formation</span>
          </a>
          <a onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4 ">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#David"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#experiences"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#formation"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
