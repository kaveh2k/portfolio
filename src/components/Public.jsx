import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

const Public = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Public;
