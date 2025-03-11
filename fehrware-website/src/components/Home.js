import React from 'react';
import '../styles/Home.css';

// Home component with hero section and welcome message
function Home() {
  return (
    <section className="home">
      <div className="hero">
        {/* Placeholder for hero banner image */}
        <img src="/assets/hero-banner.jpg" alt="Hero Banner" className="hero-banner" />
        <h1>Welcome to FehrWare Tech Solutions</h1>
        {/* Welcome paragraph */}
        <p>
          Hello! I’m Bryan Fehr, a passionate developer crafting innovative solutions at FehrWare Tech Solutions. 
          Whether it’s building sleek websites, robust applications, or solving complex problems, I’m here to bring ideas to life. 
          Explore my portfolio, discover my services, and let’s connect to create something amazing together!
        </p>
      </div>
    </section>
  );
}

export default Home;