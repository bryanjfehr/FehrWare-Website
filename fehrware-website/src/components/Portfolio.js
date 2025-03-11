import React from 'react';
import '../styles/Portfolio.css';

// Portfolio component showcasing projects
function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {/* Example project card */}
        <div className="project-card">
          {/* Placeholder for project image */}
          <img src="/assets/project1.jpg" alt="Project 1" className="project-image" />
          <h3>Project 1</h3>
          <p>Description here</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}

export default Portfolio;