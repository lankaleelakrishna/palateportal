// src/Header.js
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 md:py-3 min-h-[64px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 h-[44px]">
          <img
            src="/pnpn.png"
            alt="Palate Networks Logo"
            className="h-10 w-6 rounded-full object-cover"
          />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-black-700">
            Palate Networks
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 ml-auto text-sm md:text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all duration-300 hover:text-slate-700 hover:underline hover:underline-offset-8 ${isActive
                ? "text-slate-900 underline decoration-slate-400 underline-offset-8 decoration-2 font-semibold"
                : "text-slate-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all duration-300 hover:text-slate-900 hover:underline hover:underline-offset-8 ${isActive
                ? "text-slate-900 underline decoration-slate-400 underline-offset-8 decoration-2 font-semibold"
                : "text-slate-700"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-all duration-300 hover:text-slate-900 hover:underline hover:underline-offset-8 ${isActive
                ? "text-slate-900 underline decoration-slate-400 underline-offset-8 decoration-2 font-semibold"
                : "text-slate-700"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/foodeez"
            className={({ isActive }) =>
              `transition-all duration-300 hover:text-slate-900 hover:underline hover:underline-offset-8 ${isActive
                ? "text-indigo-600 underline decoration-indigo-500 underline-offset-8 decoration-2 font-semibold"
                : "text-slate-700"
              }`
            }
          >
            Foodeez
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `transition-all duration-300 hover:text-slate-900 hover:underline hover:underline-offset-8 ${isActive
                ? "text-indigo-600 underline decoration-indigo-500 underline-offset-8 decoration-2 font-semibold"
                : "text-slate-700"
              }`
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-all duration-300 hover:text-slate-900 hover:underline hover:underline-offset-8 ${isActive
                ? "text-indigo-600 underline decoration-indigo-500 underline-offset-8 decoration-2 font-semibold"
                : "text-slate-700"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-screen py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        } bg-white border-t border-slate-200 shadow-lg`}
      >
        <div className="px-6 flex flex-col gap-5 text-lg font-medium">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-slate-800 hover:text-slate-900 transition-colors py-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-slate-800 hover:text-slate-900 transition-colors py-2"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className="text-slate-800 hover:text-slate-900 transition-colors py-2"
          >
            Services
          </NavLink>
          <NavLink
            to="/foodeez"
            onClick={() => setIsOpen(false)}
            className="text-slate-800 hover:text-slate-900 transition-colors py-2"
          >
            Foodeez
          </NavLink>
          <NavLink
            to="/careers"
            onClick={() => setIsOpen(false)}
            className="text-slate-800 hover:text-slate-900 transition-colors py-2"
          >
            Careers
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-slate-800 hover:text-slate-900 transition-colors py-2"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}