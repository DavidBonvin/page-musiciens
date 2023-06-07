import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

import React from "react";
import { TypeAnimation } from "react-type-animation";

export const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-top"
        src="https://i.imgur.com/p0SxmSY.jpg"
        alt="img-david"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">David Cordoba</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            
            <TypeAnimation
              sequence={[
                "Guitarriste", // Types 'One'
                2000, // Waits 1s
                "Vocaliste", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Compositor", // Types 'Three' without deleting 'Two'
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <BsFacebook className="cursor-pointer" size={20}/>
            <BsInstagram className="cursor-pointer" size={20}/>
          <BsLinkedin className="cursor-pointer" size={20}/>
          <BsTwitter className="cursor-pointer" size={20}/>  
          </div>
        </div>
      </div>
    </div>
  );
};
