import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // replace later with auth logic

  return (
    <div className="sticky top-0 z-50 bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between py-4 px-4 sm:px-10 border-b border-gray-300 text-sm">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="logo"
          className="w-40 cursor-pointer"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {["/", "/doctors", "/about", "/contact"].map((path, index) => (
            <NavLink key={index} to={path}>
              {({ isActive }) => (
                <li className="py-1">
                  {path === "/"
                    ? "HOME"
                    : path.replace("/", "").toUpperCase()}
                  <hr
                    className={`h-0.5 bg-black w-3/5 m-auto ${
                      isActive ? "block" : "hidden"
                    }`}
                  />
                </li>
              )}
            </NavLink>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop Profile */}
          {token ? (
            <div className="hidden md:flex items-center gap-2 cursor-pointer group relative">
              <img
                src={assets.profile_pic}
                alt=""
                className="w-8 rounded-full"
              />
              <img src={assets.dropdown_icon} className="w-2.5" alt="" />

              <div className="absolute top-0 right-0 pt-14 hidden group-hover:block z-20">
                <div className="min-w-48 bg-stone-100 rounded p-4 flex flex-col gap-4 text-gray-600">
                  <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">
                    My Profile
                  </p>
                  <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">
                    My Appointments
                  </p>
                  <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-primary text-white px-8 py-3 rounded-full"
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Icon */}
          <img
            src={assets.menu_icon}
            className="w-6 cursor-pointer md:hidden"
            onClick={() => setShowMenu(true)}
            alt=""
          />
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-6 border-b">
          <img src={assets.logo} className="w-36" alt="" />
          <img
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            onClick={() => setShowMenu(false)}
            alt=""
          />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
          <NavLink to="/" onClick={() => setShowMenu(false)}>HOME</NavLink>
          <NavLink to="/doctors" onClick={() => setShowMenu(false)}>ALL DOCTORS</NavLink>
          <NavLink to="/about" onClick={() => setShowMenu(false)}>ABOUT</NavLink>
          <NavLink to="/contact" onClick={() => setShowMenu(false)}>CONTACT</NavLink>

          {/* 🔥 ACCOUNT SECTION (MOBILE) */}
          <div className="w-full h-px bg-gray-300 my-4" />

          {token ? (
            <>
              <button
                onClick={() => {
                  navigate("/my-profile");
                  setShowMenu(false);
                }}
                className="text-gray-700"
              >
                My Profile
              </button>

              <button
                onClick={() => {
                  navigate("/my-appointments");
                  setShowMenu(false);
                }}
                className="text-gray-700"
              >
                My Appointments
              </button>

              <button
                onClick={() => {
                  setToken(false);
                  setShowMenu(false);
                }}
                className="text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setShowMenu(false);
              }}
              className="bg-primary text-white px-8 py-3 rounded-full"
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
