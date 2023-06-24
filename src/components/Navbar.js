import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <div className="">
        <div className="antialiased  dark-mode:bg-gray-900">
          <div className="w-full dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <Link
                  to={"/dashboard"}
                  className={`text-2xl font-bold tracking-widest uppercase rounded-lg dark-mode:text-white  text-primary`}
                >
                  BlueGuard
                </Link>
                <button
                  className="rounded-lg text-black md:hidden "
                  onClick={toggleSidebar}
                >
                  {!isSidebarOpen ? (
                    <svg
                      className="w-5 h-5 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                </button>
              </div>
              <nav
                className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
                  isSidebarOpen ? "block  mx-auto" : "hidden"
                }`}
              >
                <Link
                  className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 ${
                    location.pathname.includes("/dashboard/all-orders")
                      ? "text-white bg-accent"
                      : ""
                  }`}
                  onClick={toggleSidebar}
                  to={"/dashboard/all-orders"}
                >
                  All Orders
                </Link>
                <Link
                  className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 ${
                    location.pathname.includes("/dashboard/regular-delivery")
                      ? "text-white bg-accent"
                      : ""
                  }`}
                  onClick={toggleSidebar}
                  to={"/dashboard/regular-delivery"}
                >
                  Regular Delivery
                </Link>
                <Link
                  className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 ${
                    location.pathname.includes("/dashboard/express-delivery")
                      ? "text-white bg-accent"
                      : ""
                  }`}
                  onClick={toggleSidebar}
                  to={"/dashboard/express-delivery"}
                >
                  Express Delivery
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
