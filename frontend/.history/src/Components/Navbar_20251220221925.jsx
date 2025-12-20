import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const navLinkStyle =
    "py-1 transition-all duration-300 hover:text-black";

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300 px-4 sm:px-10">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="logo"
          className="w-40 cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-start gap-6 font-medium">
          {["/", "/doctors", "/about", "/contact"].map((path, index) => (
            <NavLink key={index} to={path}>
              {({ isActive }) => (
                <li className={navLinkStyle}>
                  {path === "/"
                    ? "HOME"
                    : path.replace("/", "").toUpperCase()}
                  <hr
                    className={`border-none h-0.5 bg-black w-3/5 m-auto ${
                      isActive ? "block" : "hidden"
                    }`}
                  />
                </li>
              )}
            </NavLink>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Profile */}
          {token ? (
            <div className="relative group cursor-pointer hidden md:flex items-center gap-2">
              <img
                className="w-8 rounded-full"
                src={assets.profile_pic}
                alt=""
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />

              {/* Dropdown */}
              <div className="absolute top-0 right-0 pt-14 hidden group-hover:block z-20">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 text-gray-600">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer transition"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:text-black cursor-pointer transition"
                  >
                    My Appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer transition"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-primary text-white px-8 py-3 rounded-full hover:scale-105 transition-all"
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 cursor-pointer md:hidden"
            src={assets.menu_icon}
            alt=""
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b">
          <img src={assets.logo} className="w-36" alt="" />
          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt=""
          />
        </div>

        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
          <NavLink onClick={() => setShowMenu(false)} to="/">HOME</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/doctors">ALL DOCTORS</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">CONTACT</NavLink>

          {!token && (
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
