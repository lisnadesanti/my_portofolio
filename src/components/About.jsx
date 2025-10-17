import React from 'react';
import './About.css';

const About = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Judul "About Me" */}
        <div className="section-title">
          <h2>✨ About Me ✨</h2>
          <div className="underline"></div>
        </div>

        {/* Konten Utama */}
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a software engineer passionate about building end-to-end digital solutions — from intuitive user interfaces to robust backend systems. 
              I believe the perfect application balances great user experience with solid technical architecture.
            </p>
          </div>

          {/* Statistik — 5 kartu */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <span>⟨⟩</span>
              </div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <span>📜</span>
              </div>
              <div className="stat-number">1+</div>
              <div className="stat-label">Certificates</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <span>🏆</span>
              </div>
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <span>📦</span>
              </div>
              <div className="stat-number">5+</div>
              <div className="stat-label">Public Repositories</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <span>👥</span>
              </div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Team Projects</div>
            </div>
          </div>
        </div>

        {/* 🔷 Core Skills — TANPA BOX */}
        <div className="core-skills-section">
          <h3>🔸 Core Skills</h3>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Laravel</span>
            <span className="skill-tag">Python</span>
          </div>
        </div>

        {/* 🔷 CTA Buttons — TANPA BOX */}
        <div className="cta-buttons">
          <a 
            href="/Lisna_Desanti_CV.pdf" 
            download="Lisna_Desanti_CV.pdf"
            className="btn-download"
          >
            📥 DOWNLOAD CV
          </a>
          <button 
            className="btn-view" 
            onClick={scrollToPortfolio}
          >
            VIEW PROJECT ▼
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;