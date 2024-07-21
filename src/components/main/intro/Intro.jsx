import React from "react";
import {
  web_developer,
  reactjs,
  js,
  mongodb,
  expressjs,
  nodejs,
  nextjs,
  apollo,
  redux,
  tailwind,
} from "../../../img";
import IntroIcon from "./introImg";

const Intro = () => {
  return (
    <>
      <div className="text-left mb-8 border-2 md:w-7/12 bg-white p-6 flex flex-col md:flex-row">
        <div className="grid grid-cols-1 md:grid-rows-2 ">
          <div className="">
            <h2 className="text-3xl  font-semibold mb-4">
              Welcome to My portfolio Webpage
            </h2>
            <p className="text-lg">
              turn ideas into pixels and data into experiences. I'm a full-stack
              developer passionate about crafting beautiful and functional web
              applications. Dive into my portfolio to see how I bring concepts
              to life!
            </p>
          </div>
          <div className="flex flex-row items-center h-fit">
            <IntroIcon icon={reactjs} alt="react.js" />
            <IntroIcon icon={js} alt="js" />
            <IntroIcon icon={mongodb} alt="mongodb" />
            <IntroIcon icon={expressjs} alt="expressjs" />
            <IntroIcon icon={nextjs} alt="nextjs" />
            <IntroIcon icon={nodejs} alt="nodejs" />
            <IntroIcon icon={apollo} alt="apollo" />
            <IntroIcon icon={redux} alt="redux" />
            <IntroIcon icon={tailwind} alt="tailwind" />
          </div>
        </div>
        <div className=" hidden md:block md:h-3/4 md:w-3/4 lg:h-1/4 lg:w-7/12 ">
          <div className=" transform transition-transform duration-300 hover:scale-105">
            <img src={web_developer} alt="Web Developer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
