import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
// import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className={`min-h-screen max-w-[1600px] mx-auto`}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
