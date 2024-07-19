import React from "react";

const Project = ({
  imageUrl,
  title,
  description,
  technologies,
  projectLink,
}) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl">
      <h3 className="text-2xl font-semibold mb-4">My Projects</h3>
      <div className="flex flex-col md:flex-row md:items-center ">
        <img
          src={imageUrl}
          alt={title}
          className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4 transform transition-transform duration-300 hover:scale-105"
        />
        <div>
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <p className="text-gray-700 mb-2">{description}</p>
          <div className="flex space-x-2 mb-2">
            {technologies.map((TechIcon, index) => (
              <TechIcon key={index} className="text-blue-500" />
            ))}
          </div>
          <a href={projectLink} className="text-indigo-500 hover:underline">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
