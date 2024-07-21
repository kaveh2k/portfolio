import React from "react";

const Separator = ({ text }) => {
  return (
    <div className="flex items-center my-8 w-full max-w-4xl">
      <div className="flex-grow border-t-2 border-dashed border-gray-300"></div>
      <span className="mx-4 text-gray-500">{text}</span>
      <div className="flex-grow border-t-2 border-dashed border-gray-300"></div>
    </div>
  );
};

export default Separator;
