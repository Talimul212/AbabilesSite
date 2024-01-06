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

  const formattedTime = (value) => (value < 10 ? `0${value}` : value);

  const hours = formattedTime(time.getHours());
  const minutes = formattedTime(time.getMinutes());
  const seconds = formattedTime(time.getSeconds());

  return (
    <div className="flex flex-col">
      <div className="stats  rounded-t-lg rounded-b-none">
        <div className="stat place-items-center ">
          <div className="stat-title">Date:</div>
          <div className="stat-value text-cyan-400 text-xl">
            {time.toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="stats  mt-[-18px] rounded-t-none shadow-md">
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
