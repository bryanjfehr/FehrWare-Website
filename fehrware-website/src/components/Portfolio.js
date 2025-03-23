// src/components/Portfolio.js
import React from 'react';
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook
import '../styles/Portfolio.css';

// Portfolio component showcasing six projects with images, titles, descriptions, and GitHub links
function Portfolio() {
  const { language } = useLanguage(); // Access language state

  // Bilingual content
  const content = {
    en: {
      sectionHeader: 'Portfolio',
      projects: [
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
      ],
      viewOnGitHub: 'View on GitHub',
    },
    fr: {
      sectionHeader: 'Portefeuille',
      projects: [
        {
          id: 1,
          image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project1.png',
          title: 'FehrWare-Website',
          description: 'Mon site web professionnel présentant mes compétences en codage et développement.',
          github: 'https://github.com/bryanjfehr/FehrWare-Website',
        },
        {
          id: 2,
          image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project2.png',
          title: 'xrwvm-fullstack_developer_capstone',
          description: 'Un projet final full-stack bifurqué démontrant des techniques de développement avancées.',
          github: 'https://github.com/bryanjfehr/xrwvm-fullstack_developer_capstone',
        },
        {
          id: 3,
          image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project3.png',
          title: 'Chronos-App',
          description: 'Une application pour simplifier le suivi des entraînements, régimes, habitudes et métriques de style de vie.',
          github: 'https://github.com/bryanjfehr/Chronos-App',
        },
        {
          id: 4,
          image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project4.png',
          title: 'MackenzieSmoke',
          description: 'Un site web pour aider les utilisateurs de cannabis dans le comté de Mackenzie à mieux s’informer sur leurs achats.',
          github: 'https://github.com/bryanjfehr/MackenzieSmoke',
        },
        {
          id: 5,
          image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project5.png',
          title: 'GlucoSnap',
          description: 'Une application pour simplifier le suivi des niveaux de glucose sanguin.',
          github: 'https://github.com/bryanjfehr/TranslationGapFinder',
        },
        {
          id: 6,
          image: 'https://storage.googleapis.com/fehrware-tech-assets/photos/project6.png',
          title: 'VoiceOfTheAncients',
          description: 'Une application dédiée à la préservation et à la traduction des langues anciennes.',
          github: 'https://github.com/bryanjfehr/VoiceOfTheAncients',
        },
      ],
      viewOnGitHub: 'Voir sur GitHub',
    },
  };

  return (
    <section className="portfolio">
      {/* Section header */}
      <h2>{content[language].sectionHeader}</h2>
      {/* Container for all project sections */}
      <div className="portfolio-container">
        {content[language].projects.map((project) => (
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
                {content[language].viewOnGitHub}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;