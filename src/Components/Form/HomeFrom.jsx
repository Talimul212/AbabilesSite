/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SelectMenu from "../SelectMenu/SelectMenu";
import { people } from "../../damoyData";

const HomeFrom = () => {
  const [selected, setSelected] = useState(people[0]);
  return (
    <div>
      <div className="w-[90%] mx-auto mt-10">
        <div className=" grid grid-cols-12 gap-2">
          <div className=" card w-full  card-bordered bg-base-100 col-span-8">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <div className=" col-span-4">
            <SelectMenu selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFrom;
