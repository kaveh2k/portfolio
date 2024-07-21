import React from "react";
import Project from "../../utils/Project";
import { FaReact, FaCss3Alt } from "react-icons/fa";
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

import { multistep, newsletter, dotaz_front, sample } from "../../../img";

const RenderProjects = () => {
  const projects = [
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
  ];

  return (
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
  );
};

export default RenderProjects;
