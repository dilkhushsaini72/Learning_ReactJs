import React, { useState } from "react";

const colors = [
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
  { value: "gray", bg: "bg-gray-500 text-black border" },
];

const App = () => {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-screen h-screen transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="p-4 sm:p-10 max-w-5xl mx-auto">
        <h2 className="text-white bg-gray-800 shadow-lg rounded-xl text-center text-xl sm:text-3xl font-bold py-4 px-6 mb-6">
          Change the background by clicking the buttons below
        </h2>

        <div className="bg-white shadow-lg rounded-xl p-4 flex flex-wrap gap-3 justify-center sm:justify-between overflow-auto">
          {colors.map((col) => (
            <button
              className={`${col.bg} py-1 px-4 rounded-xl text-white font-bold capitalize cursor-pointer transform transition-transform duration-300 hover:scale-110`}
              key={col.value}
              onClick={() => setColor(col.value)}
            >
              {col.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
