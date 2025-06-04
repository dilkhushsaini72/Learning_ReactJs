import React, { useState } from "react";

const Toggle = () => {
  const [flag, setFlag] = useState(true);
  const [buttonText, setButtonText] = useState("Hide the para");

  const toggleHandler = () => {
    setFlag((prev) => !prev);
    setButtonText(!flag ? "Hide the para" : "Show the para");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        flag ? "bg-blue-100" : "bg-red-100"
      }`}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Toggle the Button
      </h2>
      <button
        className="mb-6 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
        onClick={toggleHandler}
      >
        {buttonText}
      </button>
      {flag && (
        <p className="text-lg text-gray-700 px-6 py-3 bg-white shadow-md rounded-lg animate-fade-in">
          This is my paragraph
        </p>
      )}
    </div>
  );
};

export default Toggle;
