import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";
import icon from '../../icon.svg';

function Navigation() {
  return (
    <div className="Navigation">

        <div className="nav-item">
          <NavLink className="nav-link" to="/">
            <img src={icon} className="Home" alt="home" />
          </NavLink>
        </div>
      <ul>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
