import React from 'react';
import '../styles/Portfolio.css';

// Portfolio component showcasing six projects with images, titles, descriptions, and GitHub links
function Portfolio() {
  // Array of project data (to be expanded with real descriptions and links)
  const projects = [
    {
      id: 1,
      image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project1.png',
      title: 'FehrWare-Website',
      description: 'My business website showcasing my course code and development skills.',
      github: 'https://github.com/bryanjfehr/FehrWare-Website',
    },
    {
      id: 2,
      image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project2.png',
      title: 'xrwvm-fullstack_developer_capstone',
      description: 'A forked full-stack capstone project demonstrating advanced development techniques.',
      github: 'https://github.com/bryanjfehr/xrwvm-fullstack_developer_capstone',
    },
    {
      id: 3,
      image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project3.png',
      title: 'Chronos-App',
      description: 'An app to simplify tracking workouts, diets, habits, and lifestyle metrics.',
      github: 'https://github.com/bryanjfehr/Chronos-App',
    },
    {
      id: 4,
      image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project4.png',
      title: 'MackenzieSmoke',
      description: 'A website to help cannabis users in Mackenzie County become more informed about shopping.',
      github: 'https://github.com/bryanjfehr/MackenzieSmoke',
    },
    {
      id: 5,
      image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project5.png',
      title: 'GlucoSnap',
      description: 'An app for simplifying the tracking of blood glucose levels.',
      github: 'https://github.com/bryanjfehr/TranslationGapFinder',
    },
    {
      id: 6,
      image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project6.png',
      title: 'VoiceOfTheAncients',
      description: 'An app dedicated to preserving and translating ancient languages.',
      github: 'https://github.com/bryanjfehr/VoiceOfTheAncients',
    },
  ];

  return (
    <section className="portfolio">
      {/* Section header */}
      <h2>Portfolio</h2>
      {/* Container for all project sections */}
      <div className="portfolio-container">
        {projects.map((project) => (
          <div key={project.id} className="project-section">
            {/* Left section: GitHub card screenshot */}
            <div className="project-image">
              <img src={project.image} alt={`${project.title} GitHub Card`} className="project-card-image" />
            </div>
            {/* Right section: Title, description, and GitHub link */}
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;