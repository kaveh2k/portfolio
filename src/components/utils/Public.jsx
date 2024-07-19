import React from "react";
import Header from "../main/Header";
import Footer from "../main/Footer";
import Body from "../main/Body";

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
