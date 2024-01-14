/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from "../../Components/SideBar/SideBar";

const MainLayout = () => {
  const location = useLocation();
  const login = location.pathname;
  return (
    <div>
      <div
        className={`${
          login === "/login"
            ? "flex justify-center items-center h-[100vh] "
            : "lg:grid grid-cols-12 "
        } `}
      >
        <div
          className={`${
            login === "/login" ? "hidden" : " col-span-2  lg:h-[100vh]"
          }`}
        >
          <SideBar />
        </div>
        <div
          className={`${login === "/login" ? "h-[100vh] " : " "} col-span-10 `}
        >
          {/* <TopBar /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
