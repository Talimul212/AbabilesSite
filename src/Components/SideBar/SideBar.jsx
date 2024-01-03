/* eslint-disable no-unused-vars */
import React from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className=" h-full shadow-xl  mt-5 ">
      <div className="text-red-500 text-center text-xl font-bold">
        আবাবিল প্রিন্টিং প্রেস{" "}
      </div>
      <div>
        <AdminPanelSettingsIcon />
        <Link to="/admin">Admin</Link>
      </div>
    </div>
  );
};

export default SideBar;
