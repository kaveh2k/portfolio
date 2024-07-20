import React from "react";
import Project from "../utils/Project";
import Skills from "../utils/Skills";
import Separator from "../utils/Separator";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiMui, SiReactrouter } from "react-icons/si";
import {
  team,
  git,
  cloud,
  others,
  backend,
  design,
  multistep,
} from "../../img/img";

const Body = () => {
  const skills = [
    {
      imageUrl: git,
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      imageUrl: team,
      title: "Productivity",
      skills: [
        "Agile working(scrum, standup, etc)",
        "Miro",
        "Google Workspace Tools",
      ],
    },
    {
      imageUrl: others,
      title: "Others",
      skills: ["Team work", "Ownership", "Gen AI tools(GPT, Copilot)"],
    },
    {
      imageUrl: backend,
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB, Mongoose",
        "RESTful APIs",
        "API design and versioning",
        "Authentication and Authorization (JWT, OAuth, Passport.js, Bcrypt)",
        "GraphQL",
        "Apollo Server",
        "Pug.js",
        "EJS",
        "Middleware (Helmet, CORS, Morgan, dotenv, body-parser)",
      ],
    },
    {
      imageUrl: design,
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "Redux (RTK)",
        "Zustand",
        "HTML5",
        "CSS3",
        "TailWind CSS",
        "Material-UI (MUI)",
        "Styled-Components",
        "Storybook.js",
        "Responsive Web Design",
        "Media Queries",
        "Axios, Fetch",
        "React Query",
      ],
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
    // {
    //   imageUrl: "path/to/frontend-image.png",
    //   title: "DevOps",
    //   skills: ["Docker", "Kubernetes", "AWS", "Azure"],
    // },
  ];

  const projects = [
    {
      imageUrl: multistep,
      title: "Multi Step Subscription",
      description:
        "A beautiful multi-step subscription form that allows user to go back and forth and play with different options and customize the subscription plan.",
      technologies: [
        FaReact,
        SiRedux,
        FaCss3Alt,
        SiTailwindcss,
        SiMui,
        SiReactrouter,
      ],
      projectLink: "/multistep",
    },
    {
      imageUrl: "path/to/project2-image.jpg",
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      technologies: [FaReact, FaNodeJs],
      projectLink: "https://project-two-link.com",
    },
  ];

  return (
    <main className="flex-grow flex flex-col justify-center items-center p-6 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to My portfolio Webpage
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
      <div
        className="
      lg:grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-1 lg:gap-2 lg:justify-center lg:px-40
      flex flex-col w-full"
      >
        <Skills
          imageUrl={skills[0].imageUrl}
          title={skills[0].title}
          skills={skills[0].skills}
        />
        <Skills
          imageUrl={skills[1].imageUrl}
          title={skills[1].title}
          skills={skills[1].skills}
        />
        <Skills
          imageUrl={skills[2].imageUrl}
          title={skills[2].title}
          skills={skills[2].skills}
        />
      </div>
      <div className="mt-2"></div>
      <div
        className="
      lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1 lg:gap-2 lg:justify-center lg:px-40
      flex flex-col w-full"
      >
        <Skills
          imageUrl={skills[3].imageUrl}
          title={skills[3].title}
          skills={skills[3].skills}
        />
        <Skills
          imageUrl={skills[4].imageUrl}
          title={skills[4].title}
          skills={skills[4].skills}
        />
      </div>
    </main>
  );
};

export default Body;
