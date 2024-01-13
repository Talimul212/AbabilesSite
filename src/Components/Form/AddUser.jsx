/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
const AddUser = () => {
  const [image, setImage] = useState(null);
  const [uploadimg, setUpLoadimg] = useState(null);
  const { register, handleSubmit, formState, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success(`Successfully Shop Added to your Shop List `);
    reset();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("image", uploadimg);
  //     try {
  //       const result = await addImage(formData).unwrap();
  //       if (result.statusCode === 200) {
  //         toast.success("Image added successfully");
  //         refetch();
  //         navigate("/admin/image");
  //       }
  //     } catch (error) {
  //       toast.error("Fail to add image");
  //     }
  //   };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mt-4 ">
          <div
            className="mb-3 lg:h-[15vh] h-[10vh] w-[20%] border-2 border-dashed border-gray-400 rounded-lg p-2 text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="   lg:h-[10vh] h-[10vh] w-[30vw] object-contain"
              />
            ) : (
              <div>
                <MdOutlineAddPhotoAlternate style={{ fontSize: "75px" }} />
              </div>
            )}
          </div>
          <div>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                setUpLoadimg(file);
                if (file && file.type.startsWith("image/")) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setImage(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />

            <label
              htmlFor="imageInput"
              className=" font-medium text-center flex justify-center items-center rounded-md hover:border-cyan-400 border-[1px] uppercase bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 lg:w-[7vw] w-[18vw] lg:h-[5vh]"
            >
              Upload
            </label>
          </div>
        </div>
        <div className="lg:flex justify-between mt-5">
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
                className="card-bordered rounded-xl border-cyan-400 py-2 ps-2  w-full"
                required
              />
            </div>
          </div>
        </div>
        <div className="">
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
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className=" uppercase btn btn-info bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
