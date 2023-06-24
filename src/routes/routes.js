import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/dashboard";
import AllOrders from "../pages/dashboard/AllOrders";
import ExpressDelivery from "../pages/dashboard/ExpressDelivery";
import RegularDelivery from "../pages/dashboard/RegularDelivery";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "all-orders",
        element: <AllOrders />,
      },
      {
        path: "regular-delivery",
        element: <RegularDelivery />,
      },
      {
        path: "express-delivery",
        element: <ExpressDelivery />,
      },
    ],
  },
]);
export default routes;
