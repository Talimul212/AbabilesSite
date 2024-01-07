import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" bg-slate-100">
      <RouterProvider router={router} />
      <Toaster position="top-rightr" reverseOrder={false} />
    </div>
  </React.StrictMode>
);
