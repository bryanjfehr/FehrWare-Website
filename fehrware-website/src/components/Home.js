import React from 'react';
import '../styles/Home.css';

// Home component with hero section, updated to use a separate background image instead of logo banner
function Home() {
  return (
    <section className="home">
      <div className="hero">
        {/* Hero background image, distinct from the logo banner */}
        <img
          src="/assets/photos/hero-background.jpg"
          alt="Hero Background"
          className="hero-banner"
        />
        <h1>Welcome to FehrWare Tech Solutions</h1>
        {/* Welcome paragraph with personal introduction */}
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