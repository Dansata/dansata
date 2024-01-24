import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from '../../icon.svg';
import './Navigation.css';

function Navigation() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  return (
    <div className={`Navigation ${isBurgerMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="nav-item">
        <NavLink className="nav-link" to="/" onClick={closeBurgerMenu}>
          <img src={icon} className="Home" alt="home" />
        </NavLink>
      </div>
      <button className={`burger-menu ${isBurgerMenuOpen ? "cross" : ""}`} onClick={toggleBurgerMenu}>
        <span></span>
        <span></span>
      </button>
      <ul className={isBurgerMenuOpen ? "open" : ""}>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" onClick={closeBurgerMenu}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/portfolio" onClick={closeBurgerMenu}>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="https://dansata.com/blog" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={closeBurgerMenu}>
            Blog
          </a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" onClick={closeBurgerMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
