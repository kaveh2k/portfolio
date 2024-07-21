import React from "react";
import Project from "../utils/Project";
import Skills from "../utils/Skills";
import Separator from "../utils/Separator";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiReactrouter,
  SiJavascript,
  SiAxios,
  SiPostcss,
  SiExpress,
  SiApollographql,
  SiGraphql,
  SiJsonwebtokens,
  SiMongoose,
  SiPassport,
  SiMongodb,
  SiGithub,
  SiElectron,
} from "react-icons/si";

import { RiNextjsFill, RiNodejsLine } from "react-icons/ri";

import {
  team,
  git,
  others,
  backend,
  design,
  multistep,
  newsletter,
  dotaz_front,
  fuse,
  sample,
} from "../../img";
import Intro from "./intro/Intro";

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
        { icon: FaReact, name: "React.js" },
        { icon: SiRedux, name: "Redux (RTK)" },
        { icon: FaCss3Alt, name: "CSS" },
        { icon: SiTailwindcss, name: "TailWind CSS" },
        { icon: SiMui, name: "Material-UI (MUI)" },
        { icon: SiReactrouter, name: "React Router" },
        { icon: SiJavascript, name: "JavaScript" },
      ],
      projectLink: "/multistep",
    },
    {
      imageUrl: newsletter,
      title: "Newsletter",
      description: "A tiny newsletter subscription form.",
      technologies: [
        { icon: FaReact, name: "React.js" },
        { icon: FaCss3Alt, name: "CSS" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiTailwindcss, name: "TailWind CSS" },
      ],
      projectLink: "/newsletter",
    },
    {
      imageUrl: dotaz_front,
      title: "Dotaz",
      description:
        "A tiny project for players who play Dota2. You can check any match ID using this web application. More features are planned for the future.",
      technologies: [
        { icon: FaReact, name: "React.js" },
        { icon: RiNextjsFill, name: "Next.js" },
        { icon: FaCss3Alt, name: "CSS" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiTailwindcss, name: "TailwindCSS" },
        { icon: SiAxios, name: "Axios" },
        { icon: SiPostcss, name: "PostCSS" },
        { icon: RiNodejsLine, name: "Node.js" },
        { icon: SiExpress, name: "Express" },
        { icon: SiApollographql, name: "Apollo GraphQL" },
        { icon: SiGraphql, name: "GraphQL" },
        { icon: SiJsonwebtokens, name: "JSON Web Tokens" },
        { icon: SiMongoose, name: "Mongoose" },
        { icon: SiPassport, name: "Passport" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiGithub, name: "GitHub" },
        { icon: fuse, name: "fuse.js" },
      ],
      projectLink: "https://dotaz.onrender.com/",
      githubLink: "https://github.com/kaveh2k/dotaz/",
      backendLink: "https://github.com/kaveh2k/dotaz-backend",
    },
    {
      imageUrl: sample,
      title: "Store Management Software",
      description:
        "NextLevelManager is an offline application built with Next.js, Electron.js and Zustand.js to manage your shop and inventory. The application allows you to add or delete items from your inventory and automatically creates invoices for your in-store or online customers.(Development stage)",
      technologies: [
        { icon: FaReact, name: "React.js" },
        { icon: FaCss3Alt, name: "CSS" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: SiTailwindcss, name: "TailWind CSS" },
        { icon: RiNextjsFill, name: " Next.js" },
        { icon: SiElectron, name: " Electron.js " },
      ],
      githubLink: "https://github.com/kaveh2k/nextlevelmanager",
    },
  ];

  return (
    <main className="flex-grow flex flex-col justify-center items-center p-6 bg-gray-100 m-0">
      <Intro />
      <Separator />
      {/** Projects */}
      <>
        {projects.map((project, index) => (
          <Project
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
            backendLink={project.backendLink}
          />
        ))}
      </>
      <Separator />
      {/** Skills */}
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
