// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">LoreKeeper</Link>
      <ul className="nav-list">
        <li>
          <Link to="/characters" className="nav-link">
            Characters
          </Link>
        </li>
        <li>
          <Link to="/campaigns" className="nav-link">
            Campaigns
          </Link>
        </li>
      </ul>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
    </nav>
  );
};
