import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Airbnb Clone</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>
      <div className="user-menu">
        <button className="login-button">Login</button>
        <button className="signup-button">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
