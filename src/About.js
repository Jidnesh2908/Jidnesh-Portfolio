import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Data Analyst from Pune with a passion for transforming complex data into actionable insights. 
              With expertise in Python, SQL, and Power BI, I create interactive dashboards that tell compelling stories.
            </p>
            <p>
              Beyond traditional analytics, I explore emerging technologies like blockchain development and AI, 
              constantly pushing the boundaries of what's possible with data.
            </p>
            <div className="badges">
              <span className="badge badge-primary">
                📊 Data Visualization Expert
              </span>
              <span className="badge badge-secondary">
                🚀 Innovation Enthusiast
              </span>
            </div>
          </div>
          <div className="stats-card">
            <h3>Quick Stats</h3>
            <div className="stats-list">
              <div className="stat-item">
                <span>Projects Completed</span>
                <span className="stat-value">5</span>
              </div>
              <div className="stat-item">
                <span>Years Experience</span>
                <span className="stat-value">2+</span>
              </div>
              <div className="stat-item">
                <span>Technologies Mastered</span>
                <span className="stat-value">7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;