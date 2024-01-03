/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/ABABILLOGO.png";
const SideBar = () => {
  return (
    <div className=" h-full shadow-xl  mt-4 ">
      <div className="text-red-500 ">
        <img src={logo} alt="" className="w-48 h-20 mx-3" srcset="" />
      </div>
      <div className="hover:bg-cyan-400 hover:text-slate-100 hover:py-1 py-1 flex justify-start items-center gap-6  text-cyan-400 mt-5">
        <MdAdminPanelSettings className="text-3xl ms-8" />
        <Link to="/admin" className="font-semibold text-lg">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
