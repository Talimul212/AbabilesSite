import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";

function App() {
  return (
    <div className=" bg-slate-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
