import React, { useContext, useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaPlus,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <nav className=" bg-linear-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar main row */}
        <div className="flex justify-between items-center h-16">
          {/* ---------- Left: Logo + Events ---------- */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                EventHub
              </span>
            </Link>
          </div>

          <div className="nav-bar">
            <NavLink
              to="/upcoming-events"
              className="hidden md:block text-gray-700 hover:text-blue-600 transition-colors dark:text-white"
            >
              Upcoming Events
            </NavLink>
          </div>

          {/* ---------- Right: Profile ---------- */}
          <div className="flex items-center space-x-4">
            {/* Desktop View */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative flex items-center gap-x-3">
                  {/* Profile Image */}
                  <div className="relative group">
                    <div
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-10 h-10 border-2 border-blue-500 rounded-full overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                    >
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {user.displayName || "User"}
                    </span>
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={signOutUser}
                    className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                  >
                    <FaSignOutAlt className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                  <input
                    onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                    className="toggle"
                  />

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="nav-bar absolute right-0 mt-50 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <NavLink
                        to="/create-event"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <FaPlus className="w-4 h-4 mr-2" />
                        Create Event
                      </NavLink>
                      <NavLink
                        to="/manage-event"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <FaCog className="w-4 h-4 mr-2" />
                        Manage Events
                      </NavLink>
                      <NavLink
                        to="/joined-events"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        Joined Events
                      </NavLink>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <NavLink
                    to="/login"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mr-4"
                  >
                    Login
                  </NavLink>
                  <input
                    onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                    className="toggle"
                  />
                </div>
              )}
            </div>

            {/* ---------- Mobile Menu Toggle ---------- */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6 text-gray-600" />
              ) : (
                <FaBars className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* ---------- Mobile Menu ---------- */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 pt-4 pb-3">
            {user ? (
              <>
                <div className="px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 border-2 border-blue-500 rounded-full overflow-hidden">
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {user.displayName}
                      </p>
                      <p className="text-sm text-gray-500">View profile</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="nav-bar">
                  <NavLink
                    to="/upcoming-events"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"
                  >
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    Upcoming Events
                  </NavLink>
                  <NavLink
                    to="/create-event"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"
                  >
                    <FaPlus className="w-4 h-4 mr-2" />
                    Create Event
                  </NavLink>
                  <NavLink
                    to="manage-events"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-white"
                  >
                    <FaCog className="w-4 h-4 mr-2" />
                    Manage Events
                  </NavLink>
                </div>

                {/* Logout */}
                <button
                  onClick={signOutUser}
                  className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  <FaSignOutAlt className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className=" block mx-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
                >
                  Login
                </NavLink>
                <div className="nav-bar">
                  <NavLink
                    to="/upcoming-events"
                    className="flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-gray-100 dark:text-white"
                  >
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    Upcoming Events
                  </NavLink>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Overlay to close dropdown */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
