import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Click the button below 👇
      </h2>

      <Link
        to="/contact/childa"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-lg font-medium transition duration-300"
      >
        Click Me!
      </Link>
    </div>
  );
};

export default Contact;
