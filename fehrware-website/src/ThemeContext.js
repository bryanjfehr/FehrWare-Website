// src/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Theme Context
const ThemeContext = createContext();

// Theme provider to wrap the app and provide theme state
export const ThemeProvider = ({ children }) => {
  // Default to 'auto' which will detect system preference
  const [theme, setTheme] = useState('auto');

  // Detect system theme preference on mount
  useEffect(() => {
    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Listen for system theme changes when in 'auto' mode
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (theme === 'auto') {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the Theme Context
export const useTheme = () => useContext(ThemeContext);