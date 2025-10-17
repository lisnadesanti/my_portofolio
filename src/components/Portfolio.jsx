import React from 'react';
import './Portfolio.css';

// Import semua gambar lokal
import glamourCashierImg from '../assets/images/glamour_cashier.png';
import cocositeImg from '../assets/images/cocosite.png';
import travelgoImg from '../assets/images/travelgo.png';
import frepleImg from '../assets/images/freple.png';
import aosodomoroImg from '../assets/images/aosodomoro.png';
import agentaiImg from '../assets/images/agentai.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Glamour Cashier',
      category: 'Website Application',
      description: 'A cashier management website to make cashier operations easier and more efficient, helping store owners input products, generate reports, and manage transactions seamlessly.',
      image: glamourCashierImg,
      tags: ['Figma']
    },
    {
      id: 2,
      title: 'Cocosite',
      category: 'Mobile App Design',
      description: 'This system is designed to facilitate the sale of grated coconut and inter-regional delivery within Jatibarang, Indramayu, containing product information as well as other details related to the grated coconut business.',
      image: cocositeImg,
      tags: ['Figma', 'UI/UX', 'User Research']
    },
    {
      id: 3,
      title: 'TravelGo',
      category: 'Web Application',
      description: 'A travel car rental system to make it easier for users to book vehicles quickly and easily, which provides various car options according to travel needs.',
      image: travelgoImg,
      tags: ['Figma', 'UI/UX', 'Prototyping']
    },
    {
      id: 4,
      title: 'Freple',
      category: 'Web App Design',
      description: 'Apple Fruit Ripeness Detection Application to help consumers or traders choose apples of suitable quality for consumption.',
      image: frepleImg,
      tags: ['Figma', 'UI/UX', 'User Testing', 'Wireframing']
    },
    {
      id: 5,
      title: 'Aosodomoro',
      category: 'Platform Order PT Telkom Indonesia Tbk',
      description: 'Order management system for more efficient monitoring of the quantity and types of orders coming in and out',
      image: aosodomoroImg,
      tags: ['Figma', 'UI/UX', 'Community Research', 'Cultural Design']
    },
    {
      id: 6,
      title: 'AgentAI',
      category: 'AI-Powered Web App PT Telkom Indonesia Tbk',
      description: 'to accelerate the creation of documents needed by AI-based companies quickly and other information',
      image: agentaiImg,
      tags: ['Figma', 'UI/UX', 'AI Integration', 'Conversational Design']
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Judul "Featured Projects" */}
        <div className="section-title">
          <h2>⚡ Featured Projects ⚡</h2>
          <div className="underline"></div>
        </div>

        {/* Subjudul */}
        <p className="subtitle">A showcase of my recent work and creative solutions</p>

        {/* Grid Project */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;