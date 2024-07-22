import { Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

const RenderHeader = ({ des, link, Icon }) => {
  const iconHoverAnimation = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  `;

  return (
    <>
      <Tooltip title={des} arrow>
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
          style={{ animation: `${iconHoverAnimation} 1s infinite` }}
        >
          <Icon fontSize="large" />
        </Link>
      </Tooltip>
    </>
  );
};

export default RenderHeader;
