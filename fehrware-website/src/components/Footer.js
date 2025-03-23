// src/components/Footer.js
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Social media icons
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook
import '../styles/Footer.css';

// Footer component with desktop and mobile layouts
function Footer() {
  const { language } = useLanguage(); // Access language state

  // Bilingual content
  const content = {
    en: {
      pagesHeader: 'Pages',
      pages: ['Home', 'Information', 'Contact', 'Portfolio', 'Settings'],
      socialMediaHeader: 'Social Media',
      copyright: '© 2025 FehrWare Tech Solutions',
    },
    fr: {
      pagesHeader: 'Pages',
      pages: ['Accueil', 'Informations', 'Contact', 'Portefeuille', 'Paramètres'],
      socialMediaHeader: 'Réseaux sociaux',
      copyright: '© 2025 FehrWare Tech Solutions',
    },
  };

  return (
    <footer className="footer">
      {/* Desktop layout with text links */}
      <div className="desktop-footer">
        <div className="footer-column">
          <h3>{content[language].pagesHeader}</h3>
          <ul>
            {content[language].pages.map((page, index) => (
              <li key={index}><span>{page}</span></li>
            ))}
          </ul>
        </div>
        <div className="footer-column" id="footer-social-column">
          <h3>{content[language].socialMediaHeader}</h3>
          <ul>
            <li><a href="https://github.com/bryanjfehr/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://x.com/fehrwaretech/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/bryan-fehr-463515126/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      {/* Mobile layout with social icons */}
      <div className="mobile-footer">
        <a href="https://github.com/bryanjfehr" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://x.com/fehrwaretech/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/bryan-fehr-463515126/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
      {/* Copyright notice */}
      <p>{content[language].copyright}</p>
    </footer>
  );
}

export default Footer;