import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation
import "./Navbar.css";
import "animate.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".navbar-collapse") &&
        !event.target.closest(".hamburger")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="navbar" id="nav">
      <div className="container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            Jessica Adzoyi
          </Link>
        </div>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active-item" : ""
              }`}
            >
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active-link" : ""
                }`}
                to="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/projects" ? "active-item" : ""
              }`}
            >
              <Link
                className={`nav-link ${
                  location.pathname === "/projects" ? "active-link" : ""
                }`}
                to="/projects"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/resume" ? "active-item" : ""
              }`}
            >
              <Link
                className={`nav-link ${
                  location.pathname === "/resume" ? "active-link" : ""
                }`}
                to="/resume"
                onClick={closeMenu}
              >
                Experience
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active-item" : ""
              }`}
            >
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active-link" : ""
                }`}
                to="/about"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/contact" ? "active-item" : ""
              }`}
            >
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active-link" : ""
                }`}
                to="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
