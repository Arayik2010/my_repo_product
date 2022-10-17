import React from "react";
import Navbar from "../Navbar/Navbar";

import "./header.scss";

export const Header = () => {
  return (
    <div className="navHeader">
      <div className="header">hello</div>

      <div className="headerLink">
        <Navbar />
      </div>
    </div>
  );
};
