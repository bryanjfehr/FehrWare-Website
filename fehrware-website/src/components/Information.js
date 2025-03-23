// src/components/Information.js
import React from 'react';
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook
import '../styles/Information.css';

// Information component displaying About Me and Services Offered alongside an image
function Information() {
  const { language } = useLanguage(); // Access language state

  // Bilingual content
  const content = {
    en: {
      sectionHeader: 'Information',
      aboutMeHeader: 'About Me',
      aboutMeText: `I’m Bryan Fehr, a passionate developer with a focus on creating innovative tech solutions. 
        With expertise in web development, I aim to deliver impactful projects for clients worldwide.`,
      servicesHeader: 'Services Offered',
      services: [
        'Web Development (React.js, Node.js, Express.js)',
        'Cloud Deployment (Google Cloud Platform)',
        'Cross-platform mobile app development (React Native)',
        'Data science, AI and ML solutions with Python',
        'Custom Software Solutions',
      ],
    },
    fr: {
      sectionHeader: 'Informations',
      aboutMeHeader: 'À propos de moi',
      aboutMeText: `Je suis Bryan Fehr, un développeur passionné qui se concentre sur la création de solutions technologiques innovantes. 
        Avec une expertise en développement web, je vise à livrer des projets impactants pour des clients à travers le monde.`,
      servicesHeader: 'Services offerts',
      services: [
        'Développement web (React.js, Node.js, Express.js)',
        'Déploiement cloud (Google Cloud Platform)',
        'Développement d’applications mobiles multiplateformes (React Native)',
        'Science des données, solutions IA et ML avec Python',
        'Solutions logicielles personnalisées',
      ],
    },
  };

  return (
    <section className="information">
      {/* Section header */}
      <h2>{content[language].sectionHeader}</h2>
      {/* Container for side-by-side layout */}
      <div className="information-container">
        {/* Left section: Image */}
        <div className="information-image">
          <img src="https://storage.googleapis.com/fehrware-tech-assets/photos/about-me.png" alt="About Me" className="about-image" />
        </div>
        {/* Right section: About Me and Services Offered */}
        <div className="information-content">
          
          <div className="about-me">
            <h3>{content[language].aboutMeHeader}</h3>
            <p>{content[language].aboutMeText}</p>
          </div>
          <div className="services">
            <h3>{content[language].servicesHeader}</h3>
            <ul>
              {content[language].services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Information;
