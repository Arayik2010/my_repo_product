import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import { Home } from "../Home/Home";
import Logout from "../Logout/Logout";



const RouterLink = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogIn = localStorage.getItem("emaildata");

    isLogIn && navigate("/");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product/>} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
};
export default RouterLink;
