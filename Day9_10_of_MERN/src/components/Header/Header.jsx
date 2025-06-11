import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: Use `lucide-react` icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600";

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl uppercase font-bold text-blue-600 md:text-4xl">Logo</div>

          {/* Burger Menu (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none cursor-pointer">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 font-medium">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/project1" className={linkClass}>Project 1</NavLink>
            <NavLink to="/project2" className={linkClass}>Project 2</NavLink>
            <NavLink to="/project3" className={linkClass}>Project 3</NavLink>
            <NavLink to="/project4" className={linkClass}>Project 4</NavLink>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-2 flex items-center  flex-col space-y-2 font-medium">
            <NavLink to="/" className={linkClass} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/project1" className={linkClass} onClick={toggleMenu}>Project 1</NavLink>
            <NavLink to="/project2" className={linkClass} onClick={toggleMenu}>Project 2</NavLink>
            <NavLink to="/project3" className={linkClass} onClick={toggleMenu}>Project 3</NavLink>
            <NavLink to="/project4" className={linkClass} onClick={toggleMenu}>Project 4</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
