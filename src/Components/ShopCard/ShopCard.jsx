/* eslint-disable no-unused-vars */
import React from "react";
import { MdEdit } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CgCalendarDue } from "react-icons/cg";
const ShopCard = () => {
  return (
    <div>
      <div className="lg:flex justify-between  gap-5 mt-5 mb-6">
        <div className="card p-4 text-center rounded-lg w-92 bg-base-100 shadow-lg lg:h-[150px]">
          <p className=" text-lg font-medium text-red-700">
            Ababile Printing Press
          </p>
          <p>Nazir Ahmed Building,Trafi Mor, Near by Sangu Bridge, Bandarban</p>
          <p>
            <span className=" font-medium">Call: </span>01540000461
          </p>
          <p>
            {" "}
            <span className=" font-medium"> Email:</span>{" "}
            <span className=" text-cyan-500"> ababilepressbbn@gmail.com</span>
          </p>
        </div>
        {/* 1st total media */}
        <div className="card rounded-lg w-80 bg-base-100 shadow-lg lg:h-[150px]">
          {/* {!open ? ( */}
          {/* <div
              onClick={handlerOpen}
            className="ms-[304px] cursor-pointer  mt-[-10px] z-30 shadow border-black border h-7 w-7 flex justify-center items-center hover:text-cyan-400 text-white bg-cyan-400 rounded-full p-1 hover:bg-transparent hover:border-cyan-400 hover:border-2"
          >
            <MdEdit />
          </div> */}
          {/* //   ) : (
        //     <div className="ms-[300px] mb-[-10px] mt-3 z-30 h-7 w-7 flex justify-center items-center  "></div>
        //   )} */}
          <div className="card-body justify-center items-center ">
            <div className="flex justify-center items-center gap-16">
              <h2 className="card-title text-cyan-500">Total Paid:-</h2>
              <RiMoneyDollarCircleLine className="text-cyan-500 font-bold text-2xl hover:text-gray-300 cursor-pointer hover:shadow-xl hover:scale-95 ease-out duration-500 rounded-full" />{" "}
            </div>
            <p className="text-lg font-medium  pt-4">
              {/* {total} */}
              2000 Tk
            </p>
          </div>
        </div>
        {/* middle input*/}
        {/* {open ? (
          <div className="card rounded-lg w-80 bg-base-100 shadow-lg duration-1000 lg:h-[100px]">
            <div
                onClick={handlerClose}
              className="ms-[304px] cursor-pointer  mt-[-15px] z-30 shadow hover:border-black hover:border h-7 w-7 flex justify-center items-center text-cyan-400 hover:text-white hover:bg-cyan-400 rounded-full p-1 bg-white border-cyan-400 border-2"
            >
              <IoMdArrowRoundBack />
            </div>
            <div className="card-body  mt-[-25px] justify-center items-center">
              <div className="flex justify-center items-center gap-10 ">
                <button
                  onClick={handleSave}
                  className="w-[35%] btn btn-info bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400"
                >
                  Save
                </button>

                <p className="text-lg font-semibold"> Add Media</p>

                <input
                  type="number"
                  className="file-input ps-3 file-input-bordered file-input-info w-[49%]"
                  onChange={(e) => setValue(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
          <Clock />
          </>
        )} */}
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
  );
};

export default ShopCard;
