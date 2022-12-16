import React from "react";
import Navbar from "../Navbar/Navbar";

import "./header.scss";

export const Header = () => {
  return (
    <div className="navHeader">
      <div className="headerImage">
        <img
          className="image"
          src="https://cdn.dribbble.com/userupload/3066711/file/original-f85b6179125a8d8a32a77023b8ddd16c.jpg?resize=400x0"
          alt="logo"
        />
      </div>

      <div className="headerLink">
        <Navbar />
      </div>
    </div>
  );
};
