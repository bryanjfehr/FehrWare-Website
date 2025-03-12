import React from 'react';
import '../styles/Home.css';

// Home component with hero section, featuring a background image behind text
function Home() {
  return (
    <section className="home">
      <div className="hero">
        {/* Hero background image, intended as a backdrop */}
        <img
          src="/assets/photos/hero-background.png" // Updated to .png as per your change
          alt="Hero Background"
          className="hero-background"
        />
        <h1 className="welcome-header">Welcome to FehrWare Tech Solutions</h1>
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