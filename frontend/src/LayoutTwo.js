import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const LayoutTwo = ({ children, mainClass }) => {
  return (
    <div className={`main-wrapper ${mainClass || ""}`}>
      <Header />
      <div id="content-area">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutTwo;
