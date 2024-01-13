/* eslint-disable no-unused-vars */
import React from "react";
import { CiShop } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CgCalendarDue } from "react-icons/cg";
const AdminCard = () => {
  return (
    <div>
      <div>
        <div className="lg:flex  justify-evenly mt-5 mb-6">
          <div className="card p-4 w-80 text-center rounded-lg  bg-base-100 shadow-lg lg:h-[150px]">
            <div className="card-body justify-center items-center ">
              <div className="flex justify-center items-center gap-16 text-black">
                <h2 className="card-title ">Total Shop:-</h2>
                <CiShop className=" font-bold text-2xl" />
              </div>
              <p className="text-lg font-medium  pt-4">
                {/* {total} */}
                15 shop
              </p>
            </div>
          </div>
          {/* 1st total media */}
          <div className="card rounded-lg w-80 bg-base-100 shadow-lg lg:h-[150px]">
            <div className="card-body justify-center items-center ">
              <div className="flex justify-center items-center gap-16">
                <h2 className="card-title text-cyan-500">Total Paid:-</h2>
                <RiMoneyDollarCircleLine className="text-cyan-500 font-bold text-2xl cursor-pointer   rounded-full" />
              </div>
              <p className="text-lg font-medium  pt-4">
                {/* {total} */}
                2000 Tk
              </p>
            </div>
          </div>
          <input type="checkbox" id="my_modal_5" className="modal-toggle" />
          <div className="modal z-50">
            <div className="modal-box">
              <div className="modal-action block">
                <label
                  htmlFor="my_modal_5"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  X
                </label>
                <div className="flex justify-center gap-4 items-center">
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd media */}

          <div className="card rounded-lg w-80 bg-base-100 shadow-lg lg:h-[150px]">
            <div className="card-body  justify-center items-center">
              <div className="flex justify-center items-center gap-10 ">
                <h2 className="card-title text-red-700"> Due Money :-</h2>
                <CgCalendarDue className="text-red-700 font-bold text-2xl" />
              </div>
              <p className="text-lg font-medium  pt-5">
                {/* {total - 4} */}
                4000 Tk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
