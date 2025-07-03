import React from 'react';
import './Hero.css';
import profileImg from './jidnesh_shah.jpg' // Make sure this image exists in the same folder

const Hero = ({ scrollY }) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="availability-badge">
        <div className="pulse-dot"></div>
        AVAILABLE FOR WORK
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            JIDNESH<br />SHAH
          </h1>

          <p className="hero-description">
            I blend analytical thinking with cutting-edge technology to deliver 
            data insights that not only look stunning but also drive results.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToProjects}>
              View My Work
            </button>

            <a
              href="/Jidnesh_Shah Final (1).pdf"
              download="JidneshShahResume.pdf"
              className="btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImg} alt="Jidnesh Shah" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
