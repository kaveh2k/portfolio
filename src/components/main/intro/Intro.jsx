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
  fus2,
} from "../../../img";
import IntroIcon from "./introImg";

const Intro = () => {
  return (
    <>
      <div className="mb-8 border-2 md:w-full md:max-w-5xl bg-white p-6 flex flex-col md:flex-row">
        <div className="">
          <div className="mb-3">
            <h1 className="text-[26px] md:text-3xl text-center md:text-left font-semibold mb-4">
              Welcome to My portfolio Webpage
            </h1>
            <p className="text-base md:text-xl text-justify ">
              turn ideas into pixels and data into experiences. I'm a full-stack
              developer passionate about crafting beautiful and functional web
              applications. Dive into my portfolio to see how I bring concepts
              to life!
            </p>
          </div>
          <div className="flex flex-row items-center h-fit ">
            <IntroIcon icon={reactjs} alt="react.js" />
            <IntroIcon icon={js} alt="java script" />
            <IntroIcon icon={mongodb} alt="mongodb" />
            <IntroIcon icon={expressjs} alt="expressjs" />
            <IntroIcon icon={nextjs} alt="nextjs" />
            <IntroIcon icon={nodejs} alt="nodejs" />
            <IntroIcon icon={apollo} alt="apollo" />
            <IntroIcon icon={redux} alt="redux" />
            <IntroIcon icon={tailwind} alt="tailwind" />
            <IntroIcon icon={fus2} alt="fuse.js" />
          </div>
        </div>
        <div className=" hidden mid-screen:block mid-screen:h-3/4 md:w-3/4 ">
          <div className=" transform transition-transform duration-300 hover:scale-105">
            <img src={web_developer} alt="Web Developer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
