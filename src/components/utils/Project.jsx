import { Tooltip, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Project = ({
  imageUrl,
  title,
  description,
  technologies,
  projectLink,
  githubLink,
  backendLink,
}) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-center ">
        <Link
          to={projectLink}
          className="w-full md:w-2/5 rounded-lg mb-4 md:mb-0 md:mr-4 transform transition-transform duration-300 hover:scale-105"
          target="_blank"
        >
          <img src={imageUrl} alt={title} className="rounded-lg shadow-md" />
        </Link>
        <div className="text-left md:w-3/5 ">
          <h4 className="text-xl font-semibold mb-2 ">{title}</h4>
          <p className="text-gray-700 mb-2">{description}</p>
          <div className="flex mb-2">
            {technologies.map((TechIcon, index) => (
              <Tooltip key={index} arrow title={TechIcon.name}>
                <div className="mx-1" key={index}>
                  {TechIcon.name === "fuse.js" ? (
                    <img src={TechIcon.icon} alt={TechIcon.name} width={25} />
                  ) : (
                    <TechIcon.icon className="text-blue-500" />
                  )}
                </div>
              </Tooltip>
            ))}
          </div>
          {projectLink ? (
            <Link
              to={projectLink}
              className="text-indigo-500 hover:underline"
              target="_blank"
            >
              View Project
            </Link>
          ) : (
            <></>
          )}

          {githubLink ? (
            <Link
              to={githubLink}
              className="text-indigo-500 hover:underline ml-4"
              target="_blank"
            >
              View Github
            </Link>
          ) : (
            <></>
          )}
          {backendLink ? (
            <Link
              to={backendLink}
              className="text-indigo-500 hover:underline ml-4"
              target="_blank"
            >
              View Backend Github
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
