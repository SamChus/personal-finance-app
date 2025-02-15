import { div } from "framer-motion/client";
import React from "react";
import { Outlet } from "react-router";
import MobileNav from "./components/MobileNav";
import SideBar from "./components/SideBar";
import BalanceCard from './components/BalanceCard'


const Layout = () => {
  return (
    <div className="flex flex-colw-full h-screen lg:flex-row">
      <div className="">
        <MobileNav />
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="flex flex-col lg:flex-row flex-grow h-24 mt-2 gap-4">  
            <BalanceCard title={"Current Balance"} amount={"0.00"} active={true}/>
            <BalanceCard title={"Current Balance"} amount={"0.00"} />
            <BalanceCard title={"Current Balance"} amount={"0.00"} />
          </div>
    </div>
  );
};

export default Layout;
