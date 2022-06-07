import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
