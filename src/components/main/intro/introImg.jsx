import { Tooltip } from "@mui/material";
import React from "react";

const IntroIcon = ({ icon, alt }) => {
  return (
    <>
      <Tooltip title={alt} arrow>
        <img src={icon} alt={alt} className="w-1/12 mr-2 md:w-12 " />
      </Tooltip>
    </>
  );
};

export default IntroIcon;
