/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { TfiLayoutMediaCenter } from "react-icons/tfi";
import { IoMdArrowRoundBack } from "react-icons/io";
import Clock from "../Clock/Clock";

const MediaCard = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(() => {
    // Retrieve total from local storage or default to 0
    return Number(localStorage.getItem("total")) || 0;
  });

  const handlerOpen = () => {
    setOpen(true);
  };

  const handlerClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setTotal((prevTotal) => prevTotal + value);

    localStorage.setItem("total", total + value);

    setOpen(false);
    setValue(0);
  };

  useEffect(() => {
    localStorage.setItem("total", total);
  }, [total]);

  return (
    <div className="lg:flex justify-between mx-auto w-[90%] mt-5">
      {/* 1st total media */}
      <div className="card w-80 bg-base-100 shadow-lg lg:h-[150px]">
        {!open ? (
          <div
            onClick={handlerOpen}
            className="ms-[304px] cursor-pointer  mt-[-10px] z-30 shadow border-black border h-7 w-7 flex justify-center items-center hover:text-cyan-400 text-white bg-cyan-400 rounded-full p-1 hover:bg-transparent hover:border-cyan-400 hover:border-2"
          >
            <MdEdit />
          </div>
        ) : (
          <div className="ms-[300px] mb-[-10px] mt-3 z-30 h-7 w-7 flex justify-center items-center  "></div>
        )}
        <div className="card-body justify-center items-center mt-[-12px]">
          <div className="flex justify-center items-center gap-28">
            <h2 className="card-title text-cyan-500">Total Media:-</h2>
            <TfiLayoutMediaCenterAlt className="text-cyan-500 font-bold text-lg" />{" "}
          </div>
          <p className="text-lg font-medium  pt-4">{total} SQ Feet</p>
        </div>
      </div>
      {/* middle input*/}
      {open ? (
        <div className="card w-80 bg-base-100 shadow-lg duration-1000 lg:h-[100px]">
          <div
            onClick={handlerClose}
            className="ms-[304px] cursor-pointer  mt-[-15px] z-30 shadow hover:border-black hover:border h-7 w-7 flex justify-center items-center text-cyan-400 hover:text-white hover:bg-cyan-400 rounded-full p-1 bg-white border-cyan-400 border-2"
          >
            <IoMdArrowRoundBack />
          </div>
          <div className="card-body mt-[-25px] justify-center items-center">
            <div className="flex justify-center items-center gap-10 ">
              {value ? (
                <button
                  onClick={handleSave}
                  className="w-[35%] btn btn-info bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400"
                >
                  Save
                </button>
              ) : (
                <p className="text-lg font-semibold"> Add Media</p>
              )}

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
      )}
      {/* 2nd media */}
      <div className="card w-80 bg-base-100 shadow-lg lg:h-[150px]">
        <div className="card-body  justify-center items-center">
          <div className="flex justify-center items-center gap-16 ">
            <h2 className="card-title text-red-700"> Remaining Media:-</h2>
            <TfiLayoutMediaCenter className="text-red-700 font-bold text-lg" />
          </div>
          <p className="text-lg font-medium  pt-5">{total - 4} SQ Feet</p>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
