import React from "react";
import { Link } from "react-router-dom";
import { github, linkedin, seek } from "../../img";

const Header = () => {
  return (
    <>
      <header className="bg-blue-600 p-4 flex justify-center items-center">
        <div className="flex">
          <Link
            to={"https://www.linkedin.com/in/kavehkorki/"}
            className="text-white mr-7 flex"
            target="_blank"
          >
            <img src={linkedin} alt="github" className="w-9" />
            <h1 className="text-3xl">Linkedin</h1>
          </Link>
          <Link
            to={"https://www.seek.com.au/profile/kaveh-korki-6BMR6BtJhS"}
            className="text-white mr-7 flex"
            target="_blank"
          >
            <img src={seek} alt="github" className="w-9 mr-1" />
            <h1 className="text-3xl">Seek</h1>
          </Link>
          <Link
            to={"https://github.com/kaveh2k"}
            className="text-white mr-7 flex"
            target="_blank"
          >
            <img src={github} alt="github" className="w-9" />
            <h1 className="text-3xl">GitHub</h1>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
