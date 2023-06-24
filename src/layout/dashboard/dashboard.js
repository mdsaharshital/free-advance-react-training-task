import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  const { pathname } = useLocation();
  console.log("pa", pathname);
  return (
    <div className="h-full ">
      <div className={`min-h-screen max-w-[1600px] mx-auto h-full`}>
        <div className="gradient"></div>
        <Navbar />
        {pathname === "/dashboard" && (
          <div className="flex gap-6 flex-col justify-center items-center h-[90vh]">
            <h1 className="text-primary text-7xl md:text-[100px] text-center font-bold">
              BlueGuard
            </h1>
            <h1 className="text-accent text-2xl md:text-[40px] text-center font-bold capitalize">
              A Brand you believe in
            </h1>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
