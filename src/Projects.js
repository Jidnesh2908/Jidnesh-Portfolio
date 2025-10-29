import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Hospital ER Dashboard",
      desc: "Interactive Power BI dashboard for real-time hospital analytics with patient flow tracking, resource optimization, and predictive insights.",
      img: "/hospital.png",
      github: "https://github.com/Jidnesh2908/Hospital-Emergency-Dashboard-PowerBI",
      tech: ["Power BI", "SQL Server", "Python", "DAX"]
    },
    {
      title: "Decentralized E-Voting System",
      desc: "Secure voting system using Ethereum blockchain, Solidity smart contracts, and Web3.js for transparent elections.",
      img: "/blockvote.jpg",
      github: "https://github.com/Jidnesh2908/Decentralized-Evoting-System-Using-Blockchain",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"]
    },
    {
      title: "Smart Email Assistant",
      desc: "An AI-powered Spring Boot application that analyzes, categorizes, and responds to emails intelligently using Google Gemini API. It features RESTful APIs for integration, JSON-based responses, and automated workflow management for productivity.",
      img: "/emailassistant.jpg", 
      github: "https://github.com/Jidnesh2908/Smart-email-Assistant-System-", 
      tech: ["Java", "Spring Boot", "REST API", "JSON", "Google Gemini API", "Maven"]
    },

    {
      title: "Library Management API",
      desc: "A Spring Boot RESTful API that manages books, authors, and borrowers using MySQL. It supports CRUD operations, exception handling, and service-layer architecture for scalability.",
      img: "/library.jpg", 
      github: "https://github.com/Jidnesh2908/Library-Management-API",
      tech: ["Java", "Spring Boot", "Maven", "MySQL", "REST API"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => setSelectedProject(project)}>
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">
                {project.desc.substring(0, 100)}...
              </p>
              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image">
              <img src={selectedProject.img} alt={selectedProject.title} />
            </div>
            <h2 className="modal-title">{selectedProject.title}</h2>
            <p className="modal-desc">{selectedProject.desc}</p>
            <div className="modal-tech">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="modal-buttons">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View on GitHub
              </a>
              <button className="btn-secondary" onClick={() => setSelectedProject(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
