import React from "react";
import Header from "./components/HeaderDashboard/HeaderDashboard";
import Sidebar from "./components/Sidebar/Sidebar";

const Layout = ({ children, mainClass }) => {
  return (
    <div className={`wrapper ${mainClass || ""}`}>
      <Header />
      <div id="content-area">
        <div className="content">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
