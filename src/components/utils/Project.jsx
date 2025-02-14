import { Tooltip } from "@mui/material";
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
  links,
}) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-center ">
        <Link
          to={projectLink}
          className="w-full md:w-2/5 rounded-lg mb-4 md:mb-0 md:mr-4 transform transition-transform duration-300 hover:scale-105"
          target="_blank"
        >
          <img src={imageUrl} alt={title} className="rounded-lg shadow-md" />
        </Link>
        <div className="md:w-3/5 text-left">
          <h2 className="text-[26px] md:text-xl font-semibold mb-2 ">
            {title}
          </h2>
          <p className="text-gray-700 mb-2 text-base text-justify">
            {description}
          </p>
          <div className="ruby-text">
            {technologies.map((TechIcon, index) => (
              <Tooltip key={index} arrow title={TechIcon.name}>
                <div className="pr-2" key={index}>
                  <TechIcon.Icon className="text-blue-500" />
                </div>
              </Tooltip>
            ))}
          </div>
          {links.map((link) => (
            <div class="mt-3 mr-5 relative inline-flex  group">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-gray-300 via-slate-300 to-gray-300 rounded-xl blur-sm group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <Link
                to={link.target}
                className="relative inline-flex items-center justify-center px-3 py-2 text-base font-bold text-white transition-all duration-200 bg-blue-500 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-white"
                target="_blank"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
