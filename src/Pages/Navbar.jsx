import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Design from '../App.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="navbar bg-custom-bg-color text-white">
        <div className="navbar-start">
          <a href="#" className="btn btn-ghost normal-case text-xl">
            DEV Farabi
          </a>
          <button
            onClick={toggleMenu}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </button>
        </div>

        <div
          className={`navbar-center lg:flex ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="menu menu-horizontal px-1">
            <NavLink to="/">
              <li>
                <a className="hover:bg-white hover:text-custom-text-color">
                  Home
                </a>
              </li>
            </NavLink>
            <NavLink to="/AboutUs">
              <li>
                <a className="hover:bg-white hover:text-custom-text-color">
                  About Us
                </a>
              </li>
            </NavLink>
            <NavLink to="/ContactUs">
              <li>
                <a className="hover:bg-white hover:text-custom-text-color">
                  Contact Us
                </a>
              </li>
            </NavLink>
            <NavLink to="/Blog">
              <li>
                <a className="hover:bg-white hover:text-custom-text-color">
                  Blog
                </a>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="navbar-end">
          <NavLink to="/Login">
            <a className="btn">Login</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
