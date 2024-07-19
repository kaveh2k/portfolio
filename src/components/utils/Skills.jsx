import React from "react";

const Skills = ({ imageUrl, title, skills }) => {
  return (
    <section className="relative bg-gradient-to-r from-teal-400 to-cyan-500 p-6 rounded-lg shadow-md w-full max-w-4xl text-white m-2 lg:m-0">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="mb-4">
        <h4 className="text-xl font-semibold mb-2">Skills</h4>
        <p className="text-lg">{skills.join(", ")}</p>
      </div>
      <div className="absolute top-5 right-0 w-24 h-24 opacity-50">
        <img
          src={imageUrl}
          alt="Skill related"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Skills;
