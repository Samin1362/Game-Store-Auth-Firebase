import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { useToast } from "../contexts/ToastContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const toast = useToast();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out!");
      })
      .catch((error) => {
        toast.error(error.message || "Logout failed");
      });
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
          ${
            isActive
              ? "bg-cyan-500/20 text-cyan-400"
              : "text-gray-300 hover:text-cyan-400"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
          ${
            isActive
              ? "bg-cyan-500/20 text-cyan-400"
              : "text-gray-300 hover:text-cyan-400"
          }`
        }
      >
        Game Gallery
      </NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-gray-200 shadow-lg border-b border-gray-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo + Title */}
        <Link
          to="/"
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
        >
          <FaGamepad className="text-2xl" />
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-green-400">
            GameStore
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">{navLinks}</div>

        {/* Login Button */}
        <div className="hidden md:block">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="p-1 bg-linear-to-r from-cyan-500 to-green-500 rounded-full">
                <div className="max-w-10">
                  <img
                    className="rounded-full"
                    src={user.photoURL}
                    alt="user image"
                  />
                </div>
              </div>
              <h1>{user.displayName}</h1>
              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-linear-to-r from-cyan-500 to-green-500 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-md hover:shadow-cyan-500/30"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-green-500 rounded-full blur-md opacity-50 animate-pulse" />
                {/* Icon Container */}
                <div className="relative p-1.5 bg-linear-to-r from-cyan-500 to-green-500 rounded-full">
                  <div className="bg-[#0a0a0a] rounded-full p-2">
                    <FaUserCircle className="text-2xl text-cyan-400" />
                  </div>
                </div>
              </div>
              <Link
                to="/login"
                className="px-5 py-2 bg-linear-to-r from-cyan-500 to-green-500 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-md hover:shadow-cyan-500/30"
              >
                Login
              </Link>
            </div>
          )}
          {/* <Link
            to="/login"
            className="px-5 py-2 bg-linear-to-r from-cyan-500 to-green-500 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-md hover:shadow-cyan-500/30"
          >
            Login
          </Link> */}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle hover:bg-cyan-500/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-3 shadow-2xl bg-linear-to-b from-[#111] to-[#1a1a1a] rounded-xl w-64 border border-gray-700 backdrop-blur-lg z-100"
          >
            {/* Navigation Links */}
            <li className="mb-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                  }`
                }
              >
                Game Gallery
              </NavLink>
            </li>

            {/* Divider */}
            <div className="border-t border-gray-700 my-2" />

            {/* User Section or Login */}
            {user ? (
              <>
                {/* User Info */}
                <li className="mb-2">
                  <div className="px-3 py-3 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="p-0.5 bg-linear-to-r from-cyan-500 to-green-500 rounded-full shrink-0">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={user.photoURL}
                          alt="user"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold truncate">
                          {user.displayName}
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Logout Button */}
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-center px-4 py-2.5 bg-linear-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-red-500/30 active:scale-95"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-2.5 bg-linear-to-r from-cyan-500 to-green-500 text-black font-semibold rounded-lg hover:from-cyan-400 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 active:scale-95"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
