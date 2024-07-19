import React from "react";
import Project from "../utils/Project";
import Skills from "../utils/Skills";
import Separator from "../utils/Separator";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";

const Body = () => {
  const skills = [
    {
      imageUrl: "path/to/frontend-image.png",
      title: "Frontend Development",
      skills: ["React", "Vue", "Angular", "HTML", "CSS", "JavaScript"],
    },
    {
      imageUrl: "path/to/frontend-image.png",
      title: "Backend Development",
      skills: ["Node.js", "Express", "Django", "Ruby on Rails"],
    },
    {
      imageUrl: "path/to/frontend-image.png",
      title: "Graphic Design",
      skills: ["Photoshop", "Illustrator", "Figma", "Sketch"],
    },
    {
      imageUrl: "path/to/frontend-image.png",
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "Azure"],
    },
    {
      imageUrl: "path/to/frontend-image.png",
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "Azure"],
    },
    {
      imageUrl: "path/to/frontend-image.png",
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "Azure"],
    },
    {
      imageUrl: "path/to/frontend-image.png",
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "Azure"],
    },
    {
      imageUrl: "path/to/frontend-image.png",
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "AWS", "Azure"],
    },
  ];

  const projects = [
    {
      imageUrl: "path/to/project1-image.jpg",
      title: "Project One",
      description: "This is a brief description of Project One.",
      technologies: [FaReact, FaNodeJs, FaCss3Alt],
      projectLink: "https://project-one-link.com",
    },
    {
      imageUrl: "path/to/project2-image.jpg",
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      technologies: [FaReact, FaNodeJs],
      projectLink: "https://project-two-link.com",
    },
    // Add more projects as needed
  ];

  const rowCalculator = Math.ceil(skills.length / 2);
  const skillCssDesign = `
      lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-${rowCalculator} lg:gap-2 lg:justify-center lg:px-40
      flex flex-col w-full `;
  console.log(rowCalculator);

  return (
    <main className="flex-grow flex flex-col justify-center items-center p-6 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to My Personal Webpage
        </h2>
        <p className="text-lg">Hello! I'm Kaveh.</p>
      </div>
      <>
        {projects.map((project, index) => (
          <Project
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            projectLink={project.projectLink}
          />
        ))}
      </>
      <Separator />
      <div className={skillCssDesign}>
        {skills.map((skills, i) => (
          <Skills
            key={i}
            imageUrl={skills.imageUrl}
            title={skills.title}
            skills={skills.skills}
          />
        ))}
      </div>
    </main>
  );
};

export default Body;
