import React from "react";
import Project from "../utils/Project";
import Skills from "../utils/Skills";
import Separator from "../utils/Separator";

const Body = () => {
  return (
    <main className="flex-grow flex flex-col justify-center items-center p-6 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to My Personal Webpage
        </h2>
        <p className="text-lg">Hello! I'm Kaveh.</p>
      </div>
      <Project />
      <Project />
      <Separator />
      <div
        className="
      lg:grid lg:grid-flow-col lg:auto-cols-max lg:grid-rows-2 lg:gap-3 lg:justify-center 
      sm:flex sm:flex-col sm:w-full "
      >
        <Skills />
        <Skills />
        <Skills />
        <Skills />
      </div>
    </main>
  );
};

export default Body;
