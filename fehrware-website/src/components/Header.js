import React, { useState } from 'react';
import { FaBars, FaCog } from 'react-icons/fa'; // Icons for burger menu and settings
import '../styles/Header.css';

// Header component with navigation and sidebar for mobile
function Header({ setCurrentSection, setShowTimeTab }) {
  // State to toggle sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Array of navigation items for consistency across desktop and sidebar
  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Information', section: 'information' },
    { name: 'Contact', section: 'contact' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'Page Settings', section: 'settings' },
  ];

  return (
    <header className="header">
      {/* Logo/title clickable to return to home */}
      <div className="logo">
        <span onClick={() => setCurrentSection('home')}>FehrWare Tech</span>
      </div>
      {/* Desktop navigation */}
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
      {/* Mobile menu controls */}
      <div className="mobile-menu">
        {/* Burger icon to toggle sidebar */}
        <FaBars onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="burger-icon" />
        {/* Settings icon to go directly to settings */}
        <FaCog onClick={() => setCurrentSection('settings')} className="settings-icon" />
      </div>
      {/* Sidebar for mobile navigation */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.section}>
              {/* Click closes sidebar and switches section */}
              <span onClick={() => {
                setCurrentSection(item.section);
                setIsSidebarOpen(false);
              }}>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;