// src/components/PageSettings.js
import React from 'react';
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook
import { useTheme } from '../ThemeContext'; // Import useTheme hook
import '../styles/PageSettings.css';

// PageSettings component to toggle tab title behavior, language, and theme
function PageSettings({ setShowTimeTab }) {
  const { language, setLanguage } = useLanguage(); // Access language state
  const { theme, setTheme } = useTheme(); // Access theme state

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Handle theme change
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <section className="page-settings">
      <h2>Page Settings</h2>
      {/* Checkbox to toggle time display in tab */}
      <label>
        <input
          type="checkbox"
          onChange={(e) => setShowTimeTab(e.target.checked)}
          defaultChecked={true}
        />
        Show current time in tab title
      </label>
      {/* Language selector */}
      <div className="settings-group">
        <label htmlFor="language-select">Language / Langue:</label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="en">English / Anglais</option>
          <option value="fr">French / Français</option>
        </select>
      </div>
      {/* Theme selector */}
      <div className="settings-group">
        <label htmlFor="theme-select">Theme / Thème:</label>
        <select id="theme-select" value={theme} onChange={handleThemeChange}>
          <option value="auto">Auto (System Preference)</option>
          <option value="light">Light / Clair</option>
          <option value="dark">Dark / Sombre</option>
          <option value="high-contrast">High Contrast / Contraste Élevé</option>
        </select>
      </div>
    </section>
  );
}

export default PageSettings;
