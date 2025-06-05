import React, { useState } from "react";

const BgChanger = () => {
  const buttonObj = [
    { value: "red", bg: "bg-red-600" },
    { value: "green", bg: "bg-green-600" },
    { value: "blue", bg: "bg-blue-600" },
    { value: "yellow", bg: "bg-yellow-500" },
    { value: "purple", bg: "bg-purple-600" },
    { value: "orange", bg: "bg-orange-500" },
    { value: "pink", bg: "bg-pink-500" },
    { value: "teal", bg: "bg-teal-500" },
    { value: "black", bg: "bg-black" },
    { value: "gray", bg: "bg-gray-500 text-black border" },
  ];

  const [color, setColor] = useState("white");

  return (
    <div
      style={{ backgroundColor: color }}
      className="h-screen transition-all duration-300"
    >
      <div className="bg-white/80 backdrop-blur-md rounded-b-3xl p-6 shadow-md">
        <h2 className="text-2xl capitalize font-semibold text-center mb-4">
          🎨 Click a button to change the background color
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {buttonObj.map((val, idx) => (
            <button
              key={idx}
              className={`${val.bg} px-4 cursor-pointer py-2 rounded-full text-white font-semibold capitalize shadow hover:scale-105 transition-transform duration-200`}
              onClick={() => setColor(val.value)}
            >
              {val.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BgChanger;
