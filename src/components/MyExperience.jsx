import React from 'react';
import './MyExperience.css';
import telkomLogo from '../assets/images/logo_telkom.png'; // 👈 Import logo Telkom

const Experience = () => {
  const experiences = [
    {
      companyLogo: telkomLogo, // ✅ Sudah benar, pakai variabel import
      position: 'Full-Stack Developer',
      company: 'PT Telkom Indonesia Tbk',
      period: 'Juli 2025 - Desember 2025',
      type: 'Internship',
      location: 'Bekasi, Indonesia',
      remote: 'Work From Office (WFO)',
      responsibilities: [
        'Developed the Aosodomoro Monitoring System using Laravel to track and visualize real-time operational data',
        'Built an AI-powered document generation system with React to automate the creation of SPH (Surat Penawaran Harga / Price Quotation Letters), reducing manual effort and accelerating sales support processes',
        'Integrated frontend and backend via secure RESTful APIs, implemented role-based access control (RBAC), and responsive UI',
        'Collaborated cross-functionally in an Agile environment to deliver user-centered features and continuous improvements',
        'Assisted in migrating and entering customer data into Telkom’s internal system to ensure service continuity and seamless integration'
      ]
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Judul */}
        <div className="section-title">
          <h2>💼 Work Experience 💼</h2>
          <div className="underline"></div>
        </div>

        {/* Subjudul */}
        <p className="subtitle">My professional journey and key accomplishments</p>

        {/* Timeline */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="company-logo">
                  <img src={exp.companyLogo} alt={exp.company} />
                </div>
                <div className="job-details">
                  <h3>{exp.position}</h3>
                  <p className="company-name">{exp.company}</p>
                  <div className="job-info">
                    <div className="info-item">
                      <span>📅</span> <span>{exp.period}</span>
                    </div>
                    <div className="info-item">
                      <span>💼</span> <span>{exp.type}</span>
                    </div>
                    <div className="info-item">
                      <span>📍</span> <span>{exp.location}</span>
                    </div>
                    <div className="info-item">
                      <span>🌐</span> <span>{exp.remote}</span>
                    </div>
                  </div>
                  <div className="responsibilities">
                    <h4>✨ Key Responsibilities:</h4>
                    <ul>
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;