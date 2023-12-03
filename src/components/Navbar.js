// Shortcut is rfc
import React from "react";
// Shortcut is impt
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary-${props.mode} navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" />
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>

              <li className="nav-item" />
              <Link className="nav-link" to="/about">
                About
              </Link>
            </ul>
          </div>
        </div>

        <div className="form-check form-switch ">
          <input

            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className={`form-check-label text-${(props.mode) === 'light'? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
              Dark
          </label>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Your Title Here",
};
