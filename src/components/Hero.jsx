// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import './Hero.css';
import profilePic from '../assets/images/profile.jpg';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Full-Stack Developer", "Software Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="home" className="hero">
      {/* Animasi Partikel (Background) */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <div className="hero-content">
        <div className="profile-circle">
          <img src={profilePic} alt="Lisna Desanti" />
        </div>
        <h1>Lisna Desanti</h1>
        <h2 className="job-title">
          I'm a{' '}
          <span className="highlight-underline">
            {texts[currentTextIndex]}
          </span>
        </h2>
        <p className="description">
          Passionate about creating innovative digital solutions with exceptional user experiences. 
          Specialize in modern web technologies and enjoy turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
        <div className="social-icons">
          <a
            href="mailto:lisnadesanti45@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lisna-desanti-00630b34b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/lisnadesanti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com/lisnadsnt_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;