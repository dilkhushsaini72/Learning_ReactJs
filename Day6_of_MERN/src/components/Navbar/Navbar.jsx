import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-green-600 uppercase">
            Logo
          </div>

          {/* Nav Links */}
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-green-600 transition-colors duration-200">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-black"
                }
                to="/"
              >
                Current Time
              </NavLink>
            </li>
            <li className="hover:text-green-600 transition-colors duration-200">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-black"
                }
                to="/bgchanger"
              >
                BackGround Changer
              </NavLink>
            </li>
            <li className="hover:text-green-600 transition-colors duration-200">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-black"
                }
                to="/fetchusers"
              >
                User Fetcher
              </NavLink>
            </li>
            <li className="hover:text-green-600 transition-colors duration-200">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-600" : "text-black"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
