/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { TfiLayoutMediaCenter } from "react-icons/tfi";
import { IoMdArrowRoundBack } from "react-icons/io";

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
    // Update the total based on user input
    setTotal((prevTotal) => prevTotal + value);

    // Save the updated total to local storage
    localStorage.setItem("total", total + value);

    // Close the input section
    setOpen(false);
  };

  useEffect(() => {
    // This useEffect hook updates the total when the component mounts
    // or when the total changes.
    localStorage.setItem("total", total);
  }, [total]);

  return (
    <div className="flex justify-between mx-auto w-[90%] mt-5">
      {/* 1st total media */}
      <div className="card w-80 bg-base-100 shadow-xl">
        {!open ? (
          <div
            onClick={handlerOpen}
            className="ms-[300px] mb-[-10px] mt-3 z-30 shadow border-black border h-7 w-7 flex justify-center items-center hover:text-cyan-400 text-white bg-cyan-400 rounded-full p-1 hover:bg-transparent hover:border-cyan-400 hover:border-2"
          >
            <MdEdit />
          </div>
        ) : (
          <div className="ms-[300px] mb-[-10px] mt-3 z-30 h-7 w-7 flex justify-center items-center  "></div>
        )}
        <div className="card-body  justify-center items-center">
          <div className="flex justify-center items-center gap-10">
            <TfiLayoutMediaCenterAlt className="text-red-700 font-bold text-lg" />{" "}
            <h2 className="card-title">Total Media:-</h2>
          </div>
          <p className="text-lg font-medium text-cyan-500 pt-5">
            {total} SQ Feet
          </p>
        </div>
      </div>
      {/* middle input*/}
      {open ? (
        <div className="card w-80 bg-base-100 shadow-xl duration-1000">
          <div
            onClick={handlerClose}
            className="ms-[300px] mb-[-10px] mt-3 z-30 shadow hover:border-black hover:border h-7 w-7 flex justify-center items-center text-cyan-400 hover:text-white hover:bg-cyan-400 rounded-full p-1 bg-white border-cyan-400 border-2"
          >
            <IoMdArrowRoundBack />
          </div>
          <div className="card-body  justify-center items-center">
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
                className="file-input file-input-bordered file-input-info w-[49%]"
                onChange={(e) => setValue(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* 2nd media */}
      <div className="card w-80 bg-base-100 shadow-xl">
        <div className="ms-[300px] mb-[-10px] mt-3 z-30 h-7 w-7 flex justify-center items-center  "></div>
        <div className="card-body  justify-center items-center">
          <div className="flex justify-center items-center gap-10 ">
            <TfiLayoutMediaCenter className="text-red-700 font-bold text-lg" />
            <h2 className="card-title"> Remaining Media:-</h2>
          </div>
          <p className="text-lg font-medium text-cyan-500 pt-5">206 SQ Feet</p>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
