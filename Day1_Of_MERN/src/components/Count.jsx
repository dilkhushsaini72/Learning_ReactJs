import React from "react";
import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  useEffect(() => {
    alert("It will runs on both count updated");
  }, [count, count2]);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Learning the <span className="text-blue-600">useEffect</span> Hook
            in React.js
          </h2>

          <div className="space-y-4">
            <button
              onClick={clickHandler}
              className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
            >
              Click Me!
            </button>
            <h2 className="text-lg font-medium text-gray-700">
              Value of count is: <span className="text-blue-500">{count}</span>
            </h2>

            <button
              onClick={() => setCount2(count2 + 2)}
              className="bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
            >
              Count2 Click Me! {count2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
