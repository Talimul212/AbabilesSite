/* eslint-disable no-unused-vars */
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const AdminTable = () => {
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
    <div className=" lg:w-[93%] mx-auto">
      <div className=" overflow-x-auto  bg-white card-bordered rounded-lg">
        <table className="table">
          {/* head */}
          <thead className="bg-cyan-400 text-white text-lg">
            <tr>
              <th>SI</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th className="">Role</th>

              <th className=""></th>
            </tr>
          </thead>
          <tbody className=" text-base">
            {/* row 1 */}
            <tr>
              <th className="border ">1</th>
              <td className="border ">
                <div className="avatar">
                  <div className=" flex justify-center items-center w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </td>
              <td className="border ">Adam</td>
              <td className="border ">adam@gmail.com</td>
              <td className="border ">01553543245</td>
              <td className="border ">
                <button className="btn border-cyan-400 border-[1px] w-full hover:text-white hover:bg-cyan-400 bg-transparent">
                  Admin
                </button>
              </td>
              <td className="border p-2 text-center">
                <div className="dropdown dropdown-left ">
                  <div tabIndex={0} role="button" className=" ">
                    {" "}
                    <BsThreeDotsVertical />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  mt-[-40px] right-0s  z-40 menu px-3 py-4 shadow-lg bg-base-100 rounded-md"
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
