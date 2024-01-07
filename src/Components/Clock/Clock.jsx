/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = (value) => {
    const formattedValue = value < 10 ? `0${value}` : value;
    return formattedValue;
  };

  const get12HourFormat = (hour) => {
    return hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  };

  const hours = formattedTime(get12HourFormat(time.getHours()));
  const minutes = formattedTime(time.getMinutes());
  const seconds = formattedTime(time.getSeconds());
  const period = time.getHours() >= 12 ? "PM" : "AM";

  return (
    <div className="flex flex-col ">
      <div className="stats rounded-t-lg rounded-b-none ">
        <div className="stat place-items-center h-[84px] flex justify-between">
          <div className="stat-title">Date:</div>
          <div className="stat-value text-cyan-400 text-xl">
            {time.toLocaleDateString()}
          </div>
          <div className=" text-sm font-bold flex justify-center items-center  z-50  rounded-full shadow bg-cyan-400 text-white  w-8 h-8">
            {period}
          </div>
        </div>
      </div>
      <div className="stats mt-[-18px] rounded-t-none shadow-md rounded-lg">
        <div className="stat place-items-center">
          <div className="stat-title">Hours</div>
          <div className="stat-value text-xl">{hours}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Minutes</div>
          <div className="stat-value text-secondary text-xl">{minutes}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Seconds</div>
          <div className="stat-value text-xl">{seconds}</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
