import React, { useState, useLayoutEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2, // lebih sensitif — hanya perlu 20% terlihat
        rootMargin: '-100px 0px 0px 0px', // kompensasi tinggi navbar + sedikit ekstra
      }
    );

    // Tunda 50ms untuk memastikan semua section sudah ada
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        observer.observe(section);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Lisna Desanti</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              SKILLS
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experience"
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            >
              EXPERIENCE
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            >
              PORTFOLIO
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;