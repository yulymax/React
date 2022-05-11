import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
