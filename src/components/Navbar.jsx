import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.svg" alt="Airbnb Logo" />
      </div>
      <ul className="navbar-links">
        <li>Places to stay</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>
      <div className="navbar-profile">
        <i className="fa fa-user"></i>
      </div>
    </nav>
  );
};

export default Navbar;
