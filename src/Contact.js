import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        
        <p className="contact-description">
          Ready to transform your data into powerful insights? Let's discuss your next project.
        </p>

        <div className="contact-links">
          <a href="mailto:jidnesh@example.com" className="contact-link">
            📧 jidneshshahwork@gmail.com
          </a>
          <a href="www.linkedin.com/in/jidnesh-shah" className="contact-link">
            💼 LinkedIn
          </a>
          <a href="https://github.com/Jidnesh2908" className="contact-link">
            🐙 GitHub
          </a>
        </div>

      
      </div>
    </section>
  );
};

export default Contact;