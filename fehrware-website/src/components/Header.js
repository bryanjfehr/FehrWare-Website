import React from 'react';
import { FaCog } from 'react-icons/fa'; // Keep settings icon for desktop
import '../styles/Header.css';

// Header component with navigation for desktop, logo-only on mobile
function Header({ setCurrentSection, setShowTimeTab }) {
  // Array of navigation items for desktop
  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Information', section: 'information' },
    { name: 'Contact', section: 'contact' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'Page Settings', section: 'settings' },
  ];

  return (
    <header className="header">
      {/* Logo section with clickable banner image to return to home */}
      <div className="logo">
        <img
          src="https://storage.googleapis.com/fehrware-tech-assets/logos/fehrware-tech-banner.png"
          alt="FehrWare Tech Solutions"
          className="logo-banner"
          onClick={() => setCurrentSection('home')}
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
        </ul>
      </nav>
      {/* Settings icon for desktop */}
      <div className="desktop-settings">
        <FaCog onClick={() => setCurrentSection('settings')} className="settings-icon" />
      </div>
    </header>
  );
}

export default Header;