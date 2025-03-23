import React from 'react';
import { FaCog, FaGlobe } from 'react-icons/fa'; // Add FaGlobe for language selector
import { useLanguage } from '../LanguageContext'; // Corrected import path
import { useTheme } from '../ThemeContext'; // Corrected import path
import '../styles/Header.css';

// Header component with navigation for desktop, logo-only on mobile
function Header({ setCurrentSection, setShowTimeTab }) {
  const { language, setLanguage, translations } = useLanguage(); // Access language context
  const { theme } = useTheme(); // Access theme context to switch logo

  // Array of navigation items for desktop (removed 'Page Settings' text)
  const navItems = [
    { name: translations[language].home, section: 'home' },
    { name: translations[language].information, section: 'information' },
    { name: translations[language].contact, section: 'contact' },
    { name: translations[language].portfolio, section: 'portfolio' },
  ];

  // Toggle language between English and French
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  // Determine which logo to use based on the theme
  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const logoSrc =
    theme === 'light' || (theme === 'auto' && !isSystemDark)
      ? 'https://storage.googleapis.com/fehrware-tech-assets/logos/fehrware-tech-banner-lm.png' // Light mode logo
      : 'https://storage.googleapis.com/fehrware-tech-assets/logos/fehrware-tech-banner.png'; // Dark mode logo

  // Debug the theme and logoSrc values
  console.log('Current theme:', theme);
  console.log('System prefers dark mode:', isSystemDark);
  console.log('Selected logoSrc:', logoSrc);

  return (
    <header className="header">
      {/* Logo section with clickable banner image to return to home */}
      <div className="logo">
        <img
          src={logoSrc}
          alt="FehrWare Tech Solutions"
          className="logo-banner"
          onClick={() => setCurrentSection('home')}
          onError={(e) => console.error('Error loading logo:', logoSrc, e)} // Log if the image fails to load
        />
      </div>
      {/* Desktop navigation menu */}
      <nav className="desktop-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.section}>
              {/* Clickable spans to switch sections */}
              <span onClick={() => setCurrentSection(item.section)}>{item.name}</span>
            </li>
          ))}
          <li>
          {/* Desktop settings and language icons */}
          <div className="desktop-settings">
            {/* Language selector icon */}
            <FaGlobe onClick={toggleLanguage} className="language-icon" />
            {/* Settings icon */}
            <FaCog onClick={() => setCurrentSection('settings')} className="settings-icon" />
          </div>

          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;