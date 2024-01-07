/* eslint-disable no-unused-vars */
import React from "react";

const ShopDetails = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className=" card rounded-lg bg-white ">
        <p>afgasdh</p>
      </div>
      <div className="overflow-x-auto bg-white card-bordered rounded-lg">
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
              <th>1</th>
              <td>1/3/24</td>
              <td>PVC</td>
              <td>10 X 5</td>
              <td>3</td>
              <td>50</td>
              <td>1890</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>2/3/24</td>
              <td>PVC</td>
              <td>1 X 5</td>
              <td>3</td>
              <td>15</td>
              <td>790</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopDetails;
