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
      {/* ✨ BINTANG-BINTANG LATAR BELAKANG (tetap di luar) */}
      <div className="star star-1">★</div>
      <div className="star star-2">★</div>
      <div className="star star-3">★</div>
      <div className="star star-4">★</div>
      <div className="star star-5">★</div>
      <div className="star star-6">★</div>

      {/* Konten Utama */}
      <div className="hero-content">
        <div className="profile-container">
          {/* Foto profil */}
          <div className="profile-circle">
            <img src={profilePic} alt="Lisna Desanti" />
          </div>

          {/* 🌟 BINTANG KUNING UTAMA + PARTIKEL — DI DALAM profile-container ✅ */}
          <div className="star-main">★</div>
          <div className="star-particle star-particle-1">★</div>
          <div className="star-particle star-particle-2">★</div>
          <div className="star-particle star-particle-3">★</div>
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