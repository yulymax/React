import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
