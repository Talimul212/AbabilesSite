/* eslint-disable no-unused-vars */
import React from "react";
import AdminCard from "../../Components/Card/AdminCard";
import AdminTable from "../../Components/Table/AdminTable";
import AddUser from "../../Components/Form/AddUser";

const AdminHome = () => {
  return (
    <div>
      <AdminCard />
      <div className=" w-[92%] mx-auto mb-3 mt-6">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="btn hover:border-cyan-400 border-[1px] w-[15%] text-white bg-cyan-400 hover:text-black shadow-md hover:bg-transparent"
        >
          Add New User
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-semibold text-center text-2xl">
              New User Add Form{" "}
            </h3>
            <AddUser />
          </div>
        </dialog>
      </div>
      <AdminTable />
    </div>
  );
};

export default AdminHome;
