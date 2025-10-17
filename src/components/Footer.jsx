import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="quantum-footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Lisna Desanti. Built with passion and quantum pink vibes.
        </p>
        <p className="footer-heart">
          Made with <span className="heart">❤️</span> and lots of ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;