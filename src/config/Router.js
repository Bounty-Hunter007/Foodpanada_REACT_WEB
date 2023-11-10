import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import RestroDetail from "../views/RestroDetails";
import Dashboard from "../views/DashboardPage";
import LandingPage from "../views/Dasboard/LandinfPage";
import About from "../views/login";
import Create from "../views/signup";
import Header from "../components/header"
import CartPage from "../views/CartPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/Signup",
        element: <Create />,
      },
      {
        path: "/Login",
        element: <About />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/restro/:restro_id",
        element: <RestroDetail />,
      },
      {
        path: "/cart",
        element: <CartPage/>,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

function Main() {
  const navigate = useNavigate();
  

  return (
    <div>
      <Header />
      

      <Outlet />
    </div>
  );
}

export default Router;
