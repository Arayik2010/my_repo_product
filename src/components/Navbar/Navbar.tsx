import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navLink">
      <Link to="/" className="aaaaaaaaaa" >
        Home
      </Link>
      <Link to="product" className="aaaaaaaaaa">
        Product
      </Link>
      <Link to="logout" className="aaaaaaaaaa">
        Logout
      </Link>
      <Link to="about as" className="aaaaaaaaaa">
        About us
      </Link>
    </div>
  );
};
export default Navbar;
