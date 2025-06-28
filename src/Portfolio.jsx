import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './style.css';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-wrapper">
      <Navbar />
      <Hero scrollY={scrollY} />
      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-up"><Projects /></div>
      <div data-aos="fade-up"><Skills /></div>
      <div data-aos="fade-up"><Contact /></div>

      <footer className="footer">
        <div className="container">
          <p>© 2025 Jidnesh Shah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
