import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Information from './components/Information';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import PageSettings from './components/PageSettings';
import Footer from './components/Footer';
import { FaHome, FaInfo, FaEnvelope, FaFolder, FaCog } from 'react-icons/fa'; // Icons for mobile navbar
import './styles/App.css';

// Main App component managing SPA state and rendering
function App() {
  // State to track the currently displayed section
  const [currentSection, setCurrentSection] = useState('home');
  // State to toggle dynamic time in tab title
  const [showTimeTab, setShowTimeTab] = useState(true);

  // Effect to update tab title based on showTimeTab state
  useEffect(() => {
    // Check if JavaScript is enabled (simplified check; real-world might differ)
    if (!window.navigator.javaScriptDisabled) {
      const updateTabTitle = () => {
        // Set title to current time if showTimeTab is true, else static text
        document.title = showTimeTab
          ? new Date().toLocaleTimeString()
          : 'FehrWare Tech';
      };
      updateTabTitle(); // Initial call
      if (showTimeTab) {
        // Update every second if time is enabled
        const interval = setInterval(updateTabTitle, 1000);
        // Cleanup interval on unmount or state change
        return () => clearInterval(interval);
      }
    } else {
      // Fallback for no JavaScript
      document.title = 'FehrWare Tech';
    }
  }, [showTimeTab]); // Re-run when showTimeTab changes

  // Function to render the active section based on currentSection state
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'information':
        return <Information />;
      case 'contact':
        return <ContactForm />;
      case 'portfolio':
        return <Portfolio />;
      case 'settings':
        return <PageSettings setShowTimeTab={setShowTimeTab} />;
      default:
        return <Home />; // Default to Home if section is invalid
    }
  };

  return (
    <div className="App">
      {/* Header with navigation and settings toggle */}
      <Header setCurrentSection={setCurrentSection} setShowTimeTab={setShowTimeTab} />
      {/* Main content area displaying the active section */}
      <main>{renderSection()}</main>
      {/* Footer with links */}
      <Footer />
      {/* Mobile navbar with icons for navigation */}
      <nav className="mobile-navbar">
        <span onClick={() => setCurrentSection('home')}><FaHome /></span>
        <span onClick={() => setCurrentSection('information')}><FaInfo /></span>
        <span onClick={() => setCurrentSection('contact')}><FaEnvelope /></span>
        <span onClick={() => setCurrentSection('portfolio')}><FaFolder /></span>
        <span onClick={() => setCurrentSection('settings')}><FaCog /></span>
      </nav>
    </div>
  );
}

export default App;