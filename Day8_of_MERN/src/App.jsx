import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  resetCount,
} from "./redux/counterSlice";

const App = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementClickHandle = () => dispatch(increment());

  const decrementClickHandle = () => {
    if (count > 0) {
      dispatch(decrement());
    } else {
      alert("🚫 You can't decrease below 0");
    }
  };

  const resetClickHandle = () => {
    if (count > 0) {
      dispatch(resetCount());
    } else {
      alert("⚠️ Nothing to reset!");
    }
  };

  const incrementByAmountHandle = () => {
    if (amount > 0) {
      dispatch(incrementByAmount(Number(amount)));
    } else {
      alert("🔢 Please enter a valid number");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-blue-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-green-700">
          🧮 Redux Counter
        </h1>

        <div className="text-center text-xl font-semibold text-gray-700">
          Count: <span className="text-2xl text-indigo-700">{count}</span>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={incrementClickHandle}
            className="bg-green-600 hover:bg-green-700 text-white text-2xl px-5 py-2 rounded-full shadow"
            title="Increase"
          >
            ➕
          </button>

          <button
            onClick={decrementClickHandle}
            className="bg-red-600 hover:bg-red-700 text-white text-2xl px-5 py-2 rounded-full shadow"
            title="Decrease"
          >
            ➖
          </button>

          <button
            onClick={resetClickHandle}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow text-sm"
            title="Reset"
          >
            🔁 Reset
          </button>
        </div>

        <div className="pt-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Enter amount to add:
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="e.g., 5"
          />
          <button
            onClick={incrementByAmountHandle}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            💡 Increment By Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
