import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Support</a>
        <a href="#">Community</a>
        <a href="#">Hosting</a>
        <a href="#">About</a>
      </div>
      <div className="social-media">
        {/* Add your social media icons here */}
        <span>© 2024 Airbnb Clone</span>
      </div>
    </footer>
  );
};

export default Footer;
