/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import ShopCard from "../../Components/ShopCard/ShopCard";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import cashTop from "../../assets/cashMemo/Cash Memo.png";
import CashMemoTable from "../../Components/Table/CashMemoTable";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";
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
  const componentRef = useRef();

  const generatePDF = () => {
    const node = componentRef.current;

    domtoimage
      .toPng(node)
      .then((dataUrl) => {
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, "PNG", 0, 0, 210, 297); // A4 size: 210mm x 297mm
        pdf.save("cash-memo.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
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
            <div ref={componentRef} className="modal-box w-11/12 max-w-4xl ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-md  text-center">Cash Memo/Bill</h3>
              <div className="border-[1px] border-black ">
                <img
                  className="w-full h-full mt-[-40px]"
                  src={cashTop}
                  alt=""
                />
                <div className="mx-2 mb-3 flex justify-between items-center ">
                  <div>
                    <span className="text-white bg-black py-1 ps-1 pe-5 rounded rounded-e-badge">
                      NO:
                    </span>
                    <span className="text-xl ps-3 font-semibold">201</span>
                  </div>
                  <div>
                    <table>
                      <tr className="border-2 border-gray-500 text-black">
                        <td className="border border-gray-500 p-1 font-medium">
                          Date:
                        </td>
                        <td className="border border-gray-500 p-1">20</td>
                        <td className="border border-gray-500 p-1">12</td>
                        <td className="border border-gray-500 p-1">2023</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="mx-2 mb-3 flex justify-between items-center">
                  <div>
                    <span className="text-white bg-black py-1 ps-1 pe-8 rounded rounded-e-badge">
                      Name:
                    </span>
                  </div>
                  <div className=" border-b-[2px] text-left fixed left-[106px] w-[30vw] border-black mb-1">
                    <p className="ps-5 text-xl">Shop name</p>
                  </div>
                  <div className="ms-28">
                    <span className="text-white bg-black py-1 ps-1 pe-5 rounded rounded-e-badge">
                      Phone:
                    </span>
                  </div>
                  <div className=" border-b-[2px] text-left  ms-[-288px] w-[22vw] border-black  mb-1">
                    <p className="ps-5 text-xl">01XXXXXXXX</p>
                  </div>
                </div>
                <div className="mx-2 mb-3 flex justify-start">
                  <div>
                    <span className="text-white bg-black py-1 ps-1 pe-8 rounded rounded-e-badge">
                      Address:
                    </span>
                  </div>
                  <div className=" ms-[-9px] border-b-[2px] text-left  w-[100vw] border-black mt-[-5px]">
                    <p className="ps-5 text-xl">Bandarban sadar local</p>
                  </div>
                </div>
                <CashMemoTable />
                <p className="my-3 mx-2 font-semibold">Taka In Word:</p>
                <div className="mt-10 mb-2 mx-2 bg-indigo-600 text-white  flex justify-between items-center rounded px-2 py-1">
                  <div>Customer's Singature</div>
                  <div>Authorized Singature</div>
                </div>
              </div>
              <button
                onClick={generatePDF}
                className="bg-red-500 border-2 hover:border-red-400 text-white hover:text-red-600 hover:bg-transparent p-2 rounded-md  mt-3"
              >
                Generate PDF
              </button>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
