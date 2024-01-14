/* eslint-disable no-unused-vars */
import React from "react";

const CashMemoTable = () => {
  return (
    <div className="mx-2">
      <div className=" overflow-x-auto  bg-white card-bordered rounded-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-black text-white text-lg">
            <tr>
              <th>SI</th>
              <th>Description</th>
              <th>Size</th>
              <th>Qty.</th>
              <th>Total Sfi.</th>
              <th className="">Rate</th>

              <th className="">Take</th>
            </tr>
          </thead>
          <tbody className=" text-base">
            {/* row 1 */}
            <tr>
              <th className="border ">1</th>
              <td className="border ">
                <div className="avatar">
                  <p>PVC, N card</p>
                </div>
              </td>
              <td className="border ">3 X 4</td>
              <td className="border ">7</td>
              <td className="border ">84</td>
              <td className="border bg-gray-100">2.00</td>
              <td className="border bg-gray-300">168</td>
            </tr>
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CashMemoTable;
