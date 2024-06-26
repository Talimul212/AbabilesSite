import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ShopDetails from "../Pages/Shop/ShopDetails";
import AdminHome from "../Pages/AdminDetails/AdminHome";
import Login from "../Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shopDetails/:id",
        element: <ShopDetails />,
      },
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
