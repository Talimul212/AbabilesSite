/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import logo from "../../assets/logo/ABABILLOGO.png";
const SideBar = () => {
  return (
    <div className=" h-full shadow-xl  pt-4 bg-white">
      <div className="text-red-500 ">
        <img src={logo} alt="" className="w-48 h-20 mx-3" srcset="" />
      </div>
      <Link to="/">
        <div className="font-semibold text-lg  hover:bg-cyan-400 hover:text-slate-50 hover:border-l-4 border-l-4 border-l-white hover:border-red-700 hover:py-1 py-1 flex justify-start items-center gap-12  text-cyan-400 mt-5">
          <IoHome className="text-2xl ms-8" />
          Home
        </div>
      </Link>
      <Link to="/admin">
        <div className="font-semibold text-lg hover:bg-cyan-400 hover:text-slate-50 hover:border-l-4 border-l-4 border-l-white hover:border-red-700 hover:py-1 py-1 flex justify-start items-center gap-12  text-cyan-400 mt-5 ms-[-50]">
          <MdAdminPanelSettings className="text-3xl ms-7" />
          Admin
        </div>
      </Link>
      <div className=" fixed bottom-0 mb-2 lg:w-[16vw] hover:bg-cyan-400 hover:text-slate-50 border-l-4 border-l-white hover:border-l-4 hover:border-red-700 hover:py-1 py-1 flex justify-start items-center gap-12  text-cyan-400 mt-5">
        <RiLogoutCircleRLine className="text-2xl ms-8" />
        <Link to="/admin" className="font-semibold text-lg ">
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
