import { div } from "framer-motion/client";
import React from "react";
import { Outlet } from "react-router";
import MobileNav from "./components/MobileNav";
import SideBar from "./components/SideBar";

const Layout = () => {
  return (
    <div className="flex w-full h-screen">
      <MobileNav />
      <SideBar />

      <div className="flex-1 px-4 py-6 md:px-10 md:py-8  overflow-scroll bg-beige-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
