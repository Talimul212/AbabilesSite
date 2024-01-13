/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ShopCard from "../../Components/ShopCard/ShopCard";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const ShopDetails = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [rate, setRate] = useState(0);
  console.log("start", start, "end", end);
  const handleDelete = async (teacherId) => {
    // try {
    //   await deleteTeacher(teacherId);
    //   toast.success("Teacher Deleted Successfully");
    //   refetch();
    // } catch (error) {
    //   toast.error("Fail to delete");
    // }
  };

  const navigate = useNavigate();

  const handleEditClick = (item) => {
    navigate("/", { state: { editMode: true, item } });
  };
  return (
    <div className="w-[90%] mx-auto mt-6">
      <ShopCard />
      <div className=" grid lg:grid-cols-12 gap-5">
        <div className=" col-span-8  ">
          <div className=" mb-3  flex justify-between items-center">
            <p className="bg-white p-2 rounded-md shadow-md text-lg text-cyan-400 font-semibold ">
              Rate per Square ={">"}
            </p>

            <div className="flex justify-between items-center">
              <input
                onChange={(e) => setRate(e.target.value)}
                className="input input-bordered border-cyan-400 w-[90px] mr-3"
                placeholder="rate"
                type="number"
              />
              <button
                disabled={!rate}
                className="btn  join-item rounded-md bg-cyan-400"
              >
                Add
              </button>
            </div>
          </div>
          <div className=" overflow-x-auto bg-white card-bordered rounded-lg">
            <table className="table">
              {/* head */}
              <thead className="bg-cyan-400 text-white text-lg">
                <tr>
                  <th>SI</th>
                  <th>Date</th>
                  <th>Item</th>
                  <th>Size</th>
                  <th className="w-[3vw]">Quentity</th>
                  <th>Square</th>
                  <th className="w-[3vw]">Amount</th>
                  <th className="w-[1vw]"></th>
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
                  <td className="border p-2 text-center">
                    <div className="dropdown dropdown-left ">
                      <div tabIndex={0} role="button" className=" ">
                        {" "}
                        <BsThreeDotsVertical />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content mt-2  right-0s  z-40 menu px-3 py-4 shadow-lg bg-base-100 rounded-md"
                      >
                        <div className="flex flex-col justify-start gap-2 ">
                          <div className=" hover:text-blue-500  cursor-pointer flex justify-start items-center gap-2">
                            <MdEdit
                              onClick={() => handleEditClick("item")}
                              className=" "
                            />
                            <p>Edit</p>
                          </div>
                          <div className="flex justify-start gap-2 hover:text-blue-500  cursor-pointer items-center">
                            <MdDeleteForever
                              className=" "
                              onClick={() => handleDelete("item?._id")}
                            />
                            <p>Delete</p>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </td>
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
                  <td className="border p-2 text-center">
                    <div className="dropdown dropdown-left">
                      <div tabIndex={0} role="button" className=" ">
                        {" "}
                        <BsThreeDotsVertical />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu px-3 py-4 shadow-lg bg-base-100 rounded-md ms-[-30px]"
                      >
                        <div className="flex flex-col justify-start gap-2 ">
                          <div className=" hover:text-blue-500  cursor-pointer flex justify-start gap-2 items-center">
                            <MdEdit
                              onClick={() => handleEditClick("item")}
                              className=" "
                            />
                            <p>Edit</p>
                          </div>
                          <div className="flex justify-start gap-2 hover:text-blue-500  cursor-pointe items-centerr">
                            <MdDeleteForever
                              className=" "
                              onClick={() => handleDelete("item?._id")}
                            />
                            <p>Delete</p>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className=" card-bordered shadow">
                  <th className=" text-black text-lg font-medium border"></th>
                  <th></th>
                  <th className=" text-black text-lg font-normal border">
                    2 It
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
              onClick={() => document.getElementById("my_modal_3").showModal()}
              type="button"
              disabled={!end || !start}
              className="btn btn-accent hover:text-cyan-400 border-2 hover:border-cyan-400 hover:bg-transparent bg-cyan-400 text-white uppercase mt-5 mx-6"
            >
              perview
            </button>
          </div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
