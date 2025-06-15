import React from "react";
import Image1 from "../assets/exclu.webp";
import Image2 from "../assets/hand_icon.png";
import Image3 from "../assets/men.webp";
import Image4 from "../assets/p8.webp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-amber-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
        <div className="max-w-md">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Best Deal! <span className="text-pink-500">Best Price!</span>
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-xl bg-green-500 rounded-md px-4 py-2 text-white font-semibold shadow-md">
              Shop Now
            </span>
            <img width={70} src={Image2} alt="Hand icon" />
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img className="max-w-xs md:max-w-sm rounded-xl" src={Image4} alt="Hero" />
        </div>
      </section>

      {/* Button Section */}
      <div className="flex justify-center mt-10">
        <Link to="/products">
          <button className="bg-blue-500 cursor-pointer hover:bg-pink-500 transition-colors duration-300 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-md">
            View All Products
          </button>
        </Link>
      </div>

      {/* Promo Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-12">
        <img src={Image3} alt="Promo 1" className="rounded-xl shadow-md w-full" />
        <img src={Image1} alt="Promo 2" className="rounded-xl shadow-md w-full" />
      </div>
    </div>
  );
};

export default Home;
