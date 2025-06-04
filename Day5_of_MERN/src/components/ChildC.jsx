import React, { useContext, useState } from "react";
import { UserContext } from "../App";

const ChildC = () => {
  const { user, setUser } = useContext(UserContext);
  const [showUser, setShowUser] = useState(false);

  const clickHandler = () => {
    setShowUser(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        I am Child C component
      </h1>
      <button
        onClick={clickHandler}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors duration-300 mb-6"
      >
        Click to Show Users
      </button>
      <h2>
        {showUser ? (
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            {user.map((u, idx) => (
              <li
                key={idx}
                className="bg-blue-50 p-3 list-none  rounded-md shadow-sm"
              >
                <span className="font-semibold">Name:</span> {u.name} <br />
                <span className="font-semibold">Email:</span> {u.email} <br />
                <span className="font-semibold">Age:</span> {u.age}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400 italic">No users shown</p>
        )}
      </h2>
    </div>
  );
};

export default ChildC;
