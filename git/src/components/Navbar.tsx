import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex">
              <Link
                to="/"
                className="py-4 px-2 text-indigo-200 hover:text-white transition duration-300 text-center"
              >
                <span className="font-semibold text-lg">D&D Cartas</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-indigo-200 hover:text-white transition duration-300"
              >
                Adicionar
              </Link>
              <Link
                to="/add"
                className="py-4 px-2 text-indigo-200 hover:text-white transition duration-300"
              >
                Carta
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 "></div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-white hover:text-indigo-200"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <ul className="">
          <li>
            <Link
              to="/"
              className="block text-sm px-2 py-4 text-white hover:bg-indigo-700 transition duration-300"
            >
              Página Inicial
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              className="block text-sm px-2 py-4 text-white hover:bg-indigo-700 transition duration-300"
            >
              Adicionar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
