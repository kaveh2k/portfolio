import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { keyframes } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PdfIcon from "@mui/icons-material/PictureAsPdf";

const Header = () => {
  const iconHoverAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white ">
            Kaveh's Portfolio
          </h1>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Tooltip title="LinkedIn" arrow>
            <Link
              to="https://www.linkedin.com/in/kaveh-korki/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-300"
              style={{ animation: `${iconHoverAnimation} 1s infinite` }}
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </Tooltip>
          <Tooltip title="GitHub" arrow>
            <Link
              to="https://github.com/kaveh2k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
              style={{ animation: `${iconHoverAnimation} 1s infinite` }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Tooltip>
          <Tooltip title="Resume" arrow>
            <Link
              to=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-300 transition-colors duration-300"
              style={{ animation: `${iconHoverAnimation} 1s infinite` }}
            >
              <PdfIcon fontSize="large" />
            </Link>
          </Tooltip>
        </div>
      </header>
    </>
  );
};

export default Header;
