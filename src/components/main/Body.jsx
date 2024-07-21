import React from "react";
import Project from "../utils/Project";

import Separator from "../utils/Separator";

import Intro from "./intro/Intro";
import RenderSkills from "./skills/RenderSkills";
import RenderProjects from "./projects/RenderProjects";

const Body = () => {
  return (
    <main className="flex-grow flex flex-col justify-center items-center p-6 bg-gray-100 m-0">
      <Intro />
      <Separator />
      {/** Projects */}
      <RenderProjects />
      <Separator />
      {/** Skills */}
      <RenderSkills />
    </main>
  );
};

export default Body;
