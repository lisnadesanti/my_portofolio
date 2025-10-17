import React from 'react';
import './Contact.css';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>❤️ Let's Connect ❤️</h2>
          <div className="underline"></div>
        </div>

        <p className="subtitle">
          Ready to collaborate? Let’s discuss your next project or just say hello!
        </p>

        <div className="contact-content">
          {/* Kolom Kiri: Get In Touch */}
          <div className="contact-info">
            <h3>✨ Get In Touch</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-text">
                <h4>LinkedIn</h4>
                <p>Connect on LinkedIn</p>
              </div>
              <a
                href="https://www.linkedin.com/in/lisna-desanti-00630b34b"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Visit Profile →
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaInstagram />
              </div>
              <div className="contact-text">
                <h4>Instagram</h4>
                <p>Follow my journey</p>
              </div>
              <a
                href="https://instagram.com/lisnadsnt_"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View Profile →
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div className="contact-text">
                <h4>GitHub</h4>
                <p>Check out my repositories</p>
              </div>
              <a
                href="https://github.com/lisnadesanti"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View Profile →
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>Send me an email</p>
              </div>
              <a
                href="mailto:lisnadesanti45@gmail.com"
                className="contact-link"
              >
                Send Email →
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Form — SUDAH DIINTEGRASIKAN DENGAN FORMSPREE */}
          <div className="contact-form">
            <h3>📨 Send Message</h3>
            <form action="https://formspree.io/f/mwpraajb" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-send">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;