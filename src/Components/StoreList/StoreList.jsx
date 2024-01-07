/* eslint-disable no-unused-vars */
import React from "react";
import { people } from "../../damoyData";
import { Link } from "react-router-dom";

const StoreList = () => {
  return (
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
  );
};

export default StoreList;
