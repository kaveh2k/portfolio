import React from "react";
// import { Link } from "react-router-dom";
// import { Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import PdfIcon from "@mui/icons-material/PictureAsPdf";
import RenderHeader from "./header/RenderHeader";

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="text-4xl md:text-5xl font-extrabold text-white ">
            Kaveh's Portfolio
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <RenderHeader
            des="LinkedIn"
            link="https://www.linkedin.com/in/kaveh-korki/"
            Icon={LinkedInIcon}
          />
          <RenderHeader
            des="GitHub"
            link="https://github.com/kaveh2k"
            Icon={GitHubIcon}
          />
          {/* <RenderHeader des="Resume" link="" Icon={PdfIcon} /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
