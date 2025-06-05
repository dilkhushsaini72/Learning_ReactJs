import React, { useEffect, useState } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    const apiResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/"
    );
    const result = await apiResponse.json();
    setUsers(result);
    console.log(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Click the button below to show or hide users
      </h2>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setIsShow(!isShow)}
          className="bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors duration-200 text-white font-semibold py-2 px-5 rounded-lg shadow-md"
        >
          {!isShow ? "Show Users" : "Hide Users"}
        </button>
      </div>

      {isShow && (
        <div className="max-w-3xl mx-auto space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {user.name}
              </h3>
              <p className="text-sm text-gray-600">Username: {user.username}</p>
              <p className="text-sm text-gray-600">Email: {user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchUsers;
