import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import "./../App.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white ps-5">
        <NavLink className="navbar-brand" to="#">
          Navbar
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/find">
                Find Blood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                <span className="reg">Register Now</span>
              </NavLink>
            </li>
            {/* <li className="nav-item">
        <NavLink className="nav-link" to="/login "><span className='login'>Log In</span></NavLink>
       </li> */}

<li className="nav-but">
                <NavLink className="btn btn-outline-dark" to="/find">
                  Log In
                </NavLink>
              </li>
          </ul>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
