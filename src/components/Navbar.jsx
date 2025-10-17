// src/components/Navbar.jsx
import React, { useState, useLayoutEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Toggle menu di mobile
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Tutup menu (dipanggil saat klik link atau di luar)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Tutup menu saat klik di luar
  useLayoutEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Observer untuk active section (fungsi utama tetap dipertahankan)
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
        threshold: 0.2,
        rootMargin: '-100px 0px 0px 0px',
      }
    );

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
      <div className="nav-container" ref={navbarRef}>
        <div className="nav-logo">Lisna Desanti</div>

        {/* Hamburger icon — hanya muncul di mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu dengan toggle responsif */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a
              href="#home"
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              SKILLS
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experience"
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              EXPERIENCE
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              PORTFOLIO
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={closeMenu}
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