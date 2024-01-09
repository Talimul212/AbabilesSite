/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SelectMenu from "../SelectMenu/SelectMenu";
import { people } from "../../damoyData";
import moment from "moment";
import StoreList from "../StoreList/StoreList";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const HomeFrom = () => {
  const [selected, setSelected] = useState(people[0] || {});
  const orderDate = moment().format("LL");
  const { register, handleSubmit, formState, reset } = useForm();
  const onSubmit = (data) => {
    const realData = { ...selected, orderDate, data };
    console.log(realData);
    toast.success(`Successfully order added to ${selected.name} shop`);
    reset();
    setSelected(people[null]);
  };
  const isSubmitDisabled = !formState.isValid;
  return (
    <div>
      <div className=" mt-10">
        <div className=" grid grid-cols-12 gap-2">
          <div className=" card lg:w-[97%] w-full  card-bordered rounded-lg bg-base-100 col-span-8">
            <p className="text-gray-400 text-sm mt-2"></p>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className=" lg:flex justify-start">
                <div className="">
                  <div className="lg:flex justify-start gap-10">
                    <div className="form-control">
                      <label className="label">
                        <span className=" text-lg font-medium">Item</span>
                      </label>
                      <select
                        {...register("item", {
                          required: true,
                        })}
                        className=" card-bordered rounded-xl border-cyan-400 py-2 ps-2 w-[150px]"
                      >
                        <option>PVC</option>
                        <option>N card</option>
                        <option>Sicker</option>
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="text-lg font-medium">Quentity</span>
                      </label>
                      <div className="flex justify-start items-center gap-6">
                        <input
                          {...register("quentity", {
                            required: true,
                          })}
                          type="number"
                          placeholder="7 item"
                          className="card-bordered rounded-xl border-cyan-400 py-2 ps-2 w-[148px] lg:ml-[-7px]"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-control mt-3 ">
                    <label className="label">
                      <span className="text-lg font-medium">Size</span>
                    </label>
                    <div className="flex justify-start w-[400px] items-center gap-6">
                      <input
                        {...register("hight", {
                          required: true,
                        })}
                        type="number"
                        placeholder="7 feet"
                        className="card-bordered rounded-xl border-cyan-400 py-2 ps-2 w-[34%]"
                        required
                      />
                      <div>X</div>
                      <input
                        {...register("weight", {
                          required: true,
                        })}
                        type="number"
                        placeholder="3 feet"
                        className="card-bordered rounded-xl border-cyan-400 py-2 ps-2 w-[34%]"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 w-[490px]">
                  <SelectMenu selected={selected} setSelected={setSelected} />
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={isSubmitDisabled || !selected}
                  className=" uppercase btn btn-info bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400"
                >
                  Add To Shop
                </button>
              </div>
            </form>
          </div>
          <div className=" col-span-4">
            <StoreList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFrom;
