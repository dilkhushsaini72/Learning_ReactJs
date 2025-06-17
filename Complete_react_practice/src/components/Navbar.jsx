import React from "react";
import { NavLink } from "react-router-dom";
import Cart_icon from "../assets/cart_icon.png";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cartCount = useSelector((state) => state.Cart.cartCount)
  
  return (
    <div className="px-10 bg-green-400 ">
      <div className="flex justify-between h-16 items-center">
        <div className="text-3xl font-extrabold uppercase">Logo</div>
        <ul className="flex gap-8 font-semibold text-white">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-fuchsia-700" : "text-white"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-fuchsia-700" : "text-white"
              }
              to={"/products"}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-fuchsia-700" : "text-white"
              }
              to={"/weather"}
            >
              Weather App
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-fuchsia-700" : "text-white"
              }
              to={"/contact"}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-fuchsia-700" : "text-white"
              }
              to={"/cart"}
            >
              <div className="flex relative">
                Cart 
                <img
                  src={Cart_icon}
                  alt="cart_icon"
                  width={20}
                /> <span className="text-red-400 absolute top-[-12px] right-[5px]">{cartCount}</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
