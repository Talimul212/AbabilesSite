/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ShopCard from "../../Components/ShopCard/ShopCard";

const ShopDetails = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  console.log("start", start, "end", end);
  return (
    <div className="w-[90%] mx-auto mt-6">
      <ShopCard />
      <div className=" grid lg:grid-cols-12 gap-5">
        <div className=" col-span-8 overflow-x-auto bg-white card-bordered rounded-lg ">
          <table className="table ">
            {/* head */}
            <thead className="bg-cyan-400 text-white text-lg">
              <tr>
                <th>SI</th>
                <th>Date</th>
                <th>Item</th>
                <th>Size</th>
                <th>Quentity</th>
                <th>Square</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className=" text-base">
              {/* row 1 */}
              <tr>
                <th className="border ">1</th>
                <td className="border ">1/3/24</td>
                <td className="border ">PVC</td>
                <td className="border ">10 X 5</td>
                <td className="border ">3</td>
                <td className="border ">50</td>
                <td className="border ">1890</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th className="border ">2</th>
                <td className="border ">2/3/24</td>
                <td className="border ">PVC</td>
                <td className="border ">1 X 5</td>
                <td className="border ">3</td>
                <td className="border ">15</td>
                <td className="border ">790</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className=" card-bordered shadow">
                <th className=" text-black text-lg font-medium border">
                  Total
                </th>
                <th></th>
                <th className=" text-black text-lg font-normal border">
                  2 Item
                </th>
                <th></th>
                <th className=" text-black text-lg font-normal border">6</th>
                <th className=" text-black text-lg font-normal border">
                  75 Sq
                </th>
                <th className=" text-black text-lg font-normal border">
                  2000 Tk
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className=" col-span-4">
          <div className=" card bg-white pb-6">
            <div className="btn bg-cyan-400 rounded-md text-white cursor-not-allowed hover:bg-cyan-400">
              Print the payment Slip
            </div>
            <div className="pl-7">
              <div className="join my-4">
                <div className="  btn join-item rounded-r-full w-[100px]">
                  Start Date
                </div>
                <input
                  type="date"
                  onChange={(e) => setStart(e.target.value)}
                  className="input input-bordered w-full join-item"
                  placeholder="date"
                />
              </div>
              <div className="join ">
                <div className="join-item btn w-[100px]  rounded-r-full">
                  End Date
                </div>
                <input
                  onChange={(e) => setEnd(e.target.value)}
                  type="date"
                  className="input input-bordered w-full join-item"
                  placeholder="date"
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-accent hover:text-cyan-400 border-2 hover:border-cyan-400 hover:bg-transparent bg-cyan-400 text-white uppercase mt-5 mx-6"
            >
              print Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
