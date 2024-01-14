// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import MediaCard from "../../Components/Card/MediaCard";
import HomeFrom from "../../Components/Form/HomeFrom";
// import Pdf from "../Pdf";

const Home = () => {
  const [formSQ, setFormSQ] = useState(0);
  console.log(formSQ);
  // Retrieve total from local storage or default to 0
  const initialTotal = Number(localStorage.getItem("total")) || 0;
  const [total, setTotal] = useState(initialTotal);

  // Retrieve sq from local storage or default to initialTotal
  const initialSq = Number(localStorage.getItem("sq")) || initialTotal;
  // const initialTotal = Number(localStorage.getItem("total")) || 0;
  const [sq, setSq] = useState(initialSq);

  const handleSubtract = () => {
    if (formSQ > 0) {
      setSq((prevSq) => prevSq - formSQ);
    }
  };

  return (
    <div className="w-[90%] mx-auto ">
      <MediaCard total={total} sq={sq} setTotal={setTotal} setSq={setSq} />
      <HomeFrom handleSubtract={handleSubtract} setFormSQ={setFormSQ} />
      {/* <Pdf /> */}
    </div>
  );
};

export default Home;
