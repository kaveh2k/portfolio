import React from "react";

const IntroIcon = ({ icon, alt }) => {
  return (
    <>
      <img src={icon} alt={alt} className="w-1/12 mr-3 md:w-12 " />
    </>
  );
};

export default IntroIcon;
