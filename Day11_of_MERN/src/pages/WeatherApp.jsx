import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataOfForm } from "../features/userSlice";

const WeatherApp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stateToPrint = useSelector((state) => state.User.value);
  console.log(stateToPrint);

  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();

    const formValue = { emailAddr: email, pass: password };
    dispatch(dataOfForm(formValue));
  };

  return (
    <div>
      <h2 className="text-center text-2xl capitalize bg-amber-200 pt-4">
        User Data Form using react Redux Toolkit
      </h2>
      <div className="min-h-120 flex flex-col justify-center items-center bg-amber-200">
        <form
          onSubmit={submitHandle}
          className="flex flex-col gap-5 shadow-lg py-20 px-10 bg-blue-50 rounded-2xl"
        >
          <input
            className="border rounded py-1"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border rounded py-1"
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-green-400 py-2 rounded-xl font-extrabold text-white hover:bg-green-500 cursor-pointer">
            Submit
          </button>
        </form>
        <table className="border ">
          <thead className="border">
            <tr>
              <td className="border text-center">Username</td>
              <td className="border text-center">Password</td>
            </tr>
          </thead>
          <tbody>
            {stateToPrint.map((val, idx) => (
              <tr key={idx}>
                <td className="border px-2 py-1">{val.emailAddr}</td>
                <td className="border px-2">{val.pass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherApp;
