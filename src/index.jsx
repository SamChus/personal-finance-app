import { div } from "framer-motion/client";
import React from "react";
import { Outlet } from "react-router";
import MobileNav from "./components/MobileNav";
import SideBar from "./components/SideBar";

const Layout = () => {
  return (
    <div className="flex flex-colw-full h-screen lg:flex-row bg-beige-100">
      <div className="">
        <MobileNav />
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
