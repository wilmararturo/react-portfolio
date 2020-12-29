import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/">
        <span className="navbar-brand">Wilmar Stephens</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link
            to="/contact"
            className={
              window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </Link>
          <Link
            to="/portfolio"
            className={
              window.location.pathname === "/portfoliio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </Link>
          <Link
            to="/resume"
            className={
              window.location.pathname === "/resume"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
