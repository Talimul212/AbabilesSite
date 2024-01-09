/* eslint-disable no-unused-vars */
import React from "react";
import { people } from "../../damoyData";
import { Link } from "react-router-dom";
import AddShopForm from "../Form/AddShopForm";

const StoreList = () => {
  return (
    <>
      <div
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="text-center border-2 cursor-pointer hover:border-cyan-400 hover:bg-transparent rounded-md hover:text-black text-white bg-cyan-400 font-normal"
      >
        <p className="text-xl py-1">Add New Shop</p>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-semibold text-center text-2xl">
            New Shop Add Form{" "}
          </h3>
          <AddShopForm />
        </div>
      </dialog>
      <div className="bg-white card-bordered overflow-y-auto p-2 rounded-lg h-[340px] scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-200">
        {people.map((item, i) => (
          <div key={item?.id}>
            <Link to={`/shopDetails/${item?.id}`}>
              <div className="text-center border my-1 border-cyan-400 rounded-md hover:text-white hover:bg-cyan-400 font-normal">
                <p className="text-xl py-1">{item?.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default StoreList;
