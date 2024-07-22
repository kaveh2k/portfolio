import React from "react";
import Project from "../../utils/Project";
import {
  FaReact,
  FaCss3Alt,
  FaJava,
  FaWordpress,
  FaRocket,
  FaWpforms,
  FaShieldAlt,
} from "react-icons/fa";
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
  SiApachemaven,
  SiElementor,
} from "react-icons/si";

import { RiNextjsFill, RiNodejsLine } from "react-icons/ri";

import {
  multistep,
  newsletter,
  dotaz_front,
  manager,
  mc,
  digirain,
} from "../../../img";

const RenderProjects = () => {
  const projects = [
    {
      imageUrl: dotaz_front,
      title: "Dotaz",
      description:
        "A tiny project for players who play Dota2. You can check any match ID using this web application. More features are planned for the future.",
      technologies: [
        { Icon: FaReact, name: "React.js" },
        { Icon: RiNextjsFill, name: "Next.js" },
        { Icon: FaCss3Alt, name: "CSS" },
        { Icon: SiJavascript, name: "JavaScript" },
        { Icon: SiTailwindcss, name: "TailwindCSS" },
        { Icon: SiAxios, name: "Axios" },
        { Icon: SiPostcss, name: "PostCSS" },
        { Icon: RiNodejsLine, name: "Node.js" },
        { Icon: SiExpress, name: "Express" },
        { Icon: SiApollographql, name: "Apollo GraphQL" },
        { Icon: SiGraphql, name: "GraphQL" },
        { Icon: SiJsonwebtokens, name: "JSON Web Tokens" },
        { Icon: SiMongoose, name: "Mongoose" },
        { Icon: SiPassport, name: "Passport" },
        { Icon: SiMongodb, name: "MongoDB" },
        { Icon: SiGithub, name: "GitHub" },
      ],
      links: [
        {
          name: "View Project",
          target: "https://dotaz.netlify.app/",
        },
        {
          name: "View Github",
          target: "https://github.com/kaveh2k/dotaz/",
        },
        {
          name: "View Backend Github",
          target: "https://github.com/kaveh2k/dotaz-backend",
        },
      ],
    },
    {
      imageUrl: manager,
      title: "Store Management Software",
      description:
        "NextLevelManager is an offline application built with Next.js, Electron.js and Zustand.js to manage your shop and inventory. The application allows you to add or delete items from your inventory and automatically creates invoices for your in-store or online customers.(Development stage)",
      technologies: [
        { Icon: FaReact, name: "React.js" },
        { Icon: FaCss3Alt, name: "CSS" },
        { Icon: SiJavascript, name: "JavaScript" },
        { Icon: SiTailwindcss, name: "TailWind CSS" },
        { Icon: RiNextjsFill, name: " Next.js" },
        { Icon: SiElectron, name: " Electron.js " },
      ],
      links: [
        {
          name: "View Github",
          target: "https://github.com/kaveh2k/nextlevelmanager",
        },
      ],
    },
    {
      imageUrl: mc,
      title: "Teleport Gate",
      description:
        "A Minecraft plugin for the Paper server (version 1.20.6) that allows players to create and manage teleportation gates with various modes and destinations.",
      technologies: [
        { Icon: FaJava, name: "Java" },
        { Icon: SiApachemaven, name: "Maven " },
      ],
      links: [
        {
          name: "View Github",
          target: "https://github.com/kaveh2k/TeleportGate",
        },
      ],
    },
    {
      imageUrl: digirain,
      title: "Digi Rain PTY LTD",
      description:
        "Developed and maintained the company website showcasing their advanced video surveillance systems for residential and commercial clients across New South Wales.",
      technologies: [
        { Icon: FaWordpress, name: "Wordpress" },
        { Icon: SiElementor, name: "Elementor" },
        { Icon: FaRocket, name: "Rocket" },
        { Icon: FaWpforms, name: "Wpforms" },
        { Icon: FaShieldAlt, name: "WpDefence" },
      ],
      links: [
        {
          name: "View Project",
          target: "https://digirain.com.au/",
        },
      ],
    },
    {
      imageUrl: multistep,
      title: "Multi Step Subscription",
      description:
        "A beautiful multi-step subscription form that allows user to go back and forth and play with different options and customize the subscription plan.",
      technologies: [
        { Icon: FaReact, name: "React.js" },
        { Icon: SiRedux, name: "Redux (RTK)" },
        { Icon: FaCss3Alt, name: "CSS" },
        { Icon: SiMui, name: "Material-UI (MUI)" },
        { Icon: SiReactrouter, name: "React Router" },
        { Icon: SiJavascript, name: "JavaScript" },
      ],
      links: [
        {
          name: "View Project",
          target: "/multistep",
        },
        {
          name: "View Github",
          target:
            "https://github.com/kaveh2k/portfolio/tree/master/src/components/projects/multistep",
        },
      ],
    },
    {
      imageUrl: newsletter,
      title: "Newsletter",
      description: "A tiny newsletter subscription form.",
      technologies: [
        { Icon: FaReact, name: "React.js" },
        { Icon: FaCss3Alt, name: "CSS" },
        { Icon: SiJavascript, name: "JavaScript" },
      ],
      links: [
        {
          name: "View Project",
          target: "/newsletter",
        },
        {
          name: "View Github",
          target:
            "https://github.com/kaveh2k/portfolio/tree/master/src/components/projects/newsletter",
        },
      ],
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
          links={project.links}
          projectLink={project.projectLink}
          githubLink={project.githubLink}
          backendLink={project.backendLink}
        />
      ))}
    </>
  );
};

export default RenderProjects;
