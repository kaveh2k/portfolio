import React from "react";
import { Link } from "react-router-dom";
import { github, linkedin, seek } from "../../img";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SeekIcon from "@mui/icons-material/Search"; // Material Icon for Seek
import IndeedIcon from "@mui/icons-material/VerifiedUser"; // Material Icon for Indeed
import GitHubIcon from "@mui/icons-material/GitHub";
import PdfIcon from "@mui/icons-material/PictureAsPdf";

const Header = () => {
  return (
    <>
      <header className="bg-blue-600 p-2 flex justify-start items-center">
        <div className="flex">
          <Link
            to={"https://www.linkedin.com/in/kavehkorki/"}
            className="text-white mr-2 flex items-center rounded-full p-2 bg-gray-500 bg-opacity-40 hover:text-blue-900 hover:bg-white"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            to={"https://github.com/kaveh2k"}
            className="text-white mr-2 flex items-center rounded-full p-2 bg-gray-500 bg-opacity-40 hover:text-blue-900 hover:bg-white"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
          <Link
            to={"https://www.seek.com.au/profile/kaveh-korki-6BMR6BtJhS"}
            className="text-white mr-2 flex items-center rounded-full p-2 bg-gray-500 bg-opacity-40 hover:text-blue-900 hover:bg-white"
            target="_blank"
          >
            <PdfIcon />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
