import React from "react";
import { Link } from "react-router-dom";

const Project = ({
  imageUrl,
  title,
  description,
  technologies,
  projectLink,
}) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl">
      <div className="flex flex-col md:flex-row md:items-center ">
        <Link
          to={projectLink}
          className="w-full md:w-2/5 rounded-lg mb-4 md:mb-0 md:mr-4 transform transition-transform duration-300 hover:scale-105"
          target="_blank"
        >
          <img src={imageUrl} alt={title} />
        </Link>
        <div className="text-left md:w-3/5 ">
          <h4 className="text-xl font-semibold mb-2 ">{title}</h4>
          <p className="text-gray-700 mb-2">{description}</p>
          <div className="flex space-x-2 mb-2">
            {technologies.map((TechIcon, index) => (
              <TechIcon key={index} className="text-blue-500" />
            ))}
          </div>
          <Link
            to={projectLink}
            className="text-indigo-500 hover:underline"
            target="_blank"
          >
            View Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
