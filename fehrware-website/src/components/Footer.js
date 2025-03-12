import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Social media icons
import '../styles/Footer.css';

// Footer component with desktop and mobile layouts
function Footer() {
  return (
    <footer className="footer">
      {/* Desktop layout with text links */}
      <div className="desktop-footer">
        <div className="footer-column">
          <h3>Pages</h3>
          <ul>
            <li><span>Home</span></li>
            <li><span>Information</span></li>
            <li><span>Contact</span></li>
            <li><span>Portfolio</span></li>
            <li><span>Settings</span></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
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
      <p>© 2025 FehrWare Tech Solutions</p>
    </footer>
  );
}

export default Footer;