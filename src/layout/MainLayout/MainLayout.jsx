/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from "../../Components/SideBar/SideBar";

const MainLayout = () => {
  const location = useLocation();
  const registor = location.pathname;
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className=" col-span-2  h-[100vh]">
          <SideBar />
        </div>
        <div className=" col-span-10 ">
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
