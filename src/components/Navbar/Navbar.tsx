import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ()=> {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="product">Product</Link>
        <Link to="logout">Logout</Link>
      </nav>
    </div>
  );
}
export default Navbar
