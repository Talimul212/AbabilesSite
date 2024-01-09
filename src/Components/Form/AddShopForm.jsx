/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddShopForm = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success(`Successfully Shop Added to your Shop List `);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex justify-center gap-10 mt-5">
          <div className="form-control">
            <label className="label">
              <span className=" text-md ">Name</span>
            </label>
            <input
              {...register("ShopName", {
                required: true,
              })}
              type="text"
              placeholder="Ababile printer"
              className="card-bordered rounded-xl border-cyan-400 py-2 ps-2 "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-md ">Email</span>
            </label>
            <div className="flex justify-start items-center gap-6">
              <input
                {...register("shopEmail", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
                type="email"
                placeholder="7 item"
                className="card-bordered rounded-xl border-cyan-400 py-2 ps-2 "
                required
              />
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center gap-10 mt-5">
          <div className="form-control">
            <label className="label">
              <span className=" text-md ">Number</span>
            </label>
            <input
              {...register("ShopNumber", {
                required: true,
                pattern: /^01[3-9]\d{8}$/,
              })}
              type="number"
              placeholder="01820-820186"
              className="card-bordered rounded-xl border-cyan-400 py-2 ps-2 "
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="text-md ">Address</span>
            </label>
            <div className="flex justify-start items-center gap-6">
              <input
                {...register("shopAddress")}
                type="text"
                placeholder="Bandarban sadar ,main road"
                className="card-bordered rounded-xl border-cyan-400 py-2 ps-2 "
                required
              />
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className=" uppercase btn btn-info bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400"
          >
            Add Shop
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddShopForm;
