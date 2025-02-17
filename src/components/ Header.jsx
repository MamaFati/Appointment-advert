import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-grey.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={closeMenu} // Close menu when logo is clicked
        >
          <img src={logo} className="h-8" alt="Our Logo" />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M1 1h15M1 7h15M1 13h15"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li className="mb-2 md:mb-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-900"
                }
                onClick={closeMenu} // Close menu when link is clicked
              >
                Home
              </NavLink>
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-900"
                }
                onClick={closeMenu} // Close menu when link is clicked
              >
                About
              </NavLink>
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-900"
                }
                onClick={closeMenu} // Close menu when link is clicked
              >
                Services
              </NavLink>
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "text-gray-900"
                }
                onClick={closeMenu} // Close menu when link is clicked
              >
                Contact
              </NavLink>
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink to="/appointment" onClick={closeMenu}>
                <button className="block py-1 px-2 text-white rounded-sm bg-[#36a8eb] hover:bg-gray-100 md:hover:bg-transparent transition-all duration-300">
                  Make an Appointment
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
