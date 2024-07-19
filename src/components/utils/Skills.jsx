import React from "react";

const Skills = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
      <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
      <div className="mb-4">
        <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
        <p className="text-gray-700">
          React, Vue, Angular, HTML, CSS, JavaScript
        </p>
      </div>
      <div className="mb-4">
        <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
        <p className="text-gray-700">Node.js, Express, Django, Ruby on Rails</p>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">DevOps</h4>
        <p className="text-gray-700">Docker, Kubernetes, AWS, Azure</p>
      </div>
    </section>
  );
};

export default Skills;
