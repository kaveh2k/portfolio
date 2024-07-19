import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa"; // Importing some icons as an example

const Project = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl">
      <h3 className="text-2xl font-semibold mb-4">My Projects</h3>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="project-image-url.jpg"
          alt="Project"
          className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4 transform transition-transform duration-300 hover:scale-105"
        />
        <div>
          <h4 className="text-xl font-semibold mb-2">Project Title</h4>
          <p className="text-gray-700 mb-2">
            This is a brief description of the project. It showcases the main
            features and technologies used.
          </p>
          <div className="flex space-x-2 mb-2">
            <FaReact className="text-blue-500" />
            <FaNodeJs className="text-green-500" />
            <FaCss3Alt className="text-blue-700" />
          </div>
          <a
            href="project-link-url"
            className="text-indigo-500 hover:underline"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
