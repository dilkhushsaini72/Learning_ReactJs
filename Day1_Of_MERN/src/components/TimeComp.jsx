import React, { useEffect, useState } from "react";

const TimeComp = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, sethours] = useState(0);

  // Start the timer on mount
  useEffect(() => {
    console.log("SetInterval has been started");
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("setInterval stopped");
    };
  }, []);

  // Update minutes after every 60 seconds
  useEffect(() => {
    if (seconds === 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }
  }, [seconds]);

  // Update hours after every 60 minutes
  useEffect(() => {
    if (minutes === 60) {
      sethours((prevhours) => prevhours + 1);
      setMinutes(0);
    }
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">⏱ Time Tracker</h2>
        <div className="text-4xl font-bold mb-4">Hours: {hours}</div>
        <div className="text-4xl font-bold mb-4">Minutes: {minutes}</div>
        <div className="text-4xl font-bold mb-4">Seconds: {seconds}</div>
        <div className="text-3xl font-bold bg-gray-400 rounded-2xl text-blue-600">{`${hours} : ${minutes} : ${seconds}`}</div>
      </div>
    </div>
  );
};

export default TimeComp;
