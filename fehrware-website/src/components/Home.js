import React from 'react';
import '../styles/Home.css';

// Home component with hero section, featuring a background image behind text
function Home() {
  return (
    <section className="home">
      <div className="hero">
        {/* Hero background image, intended as a backdrop */}
        <img
          src="https://storage.googleapis.com/fehrware-tech-assets/photos/hero-background.png" // Updated to .png as per your change
          alt="Hero Background"
          className="hero-background"
        />
        <h1 className="welcome-header">Welcome to FehrWare Tech Solutions</h1>
        {/* Welcome paragraph with personal introduction and translucent background for readability*/}
        <div className="welcome-text-background">
          <p>
          Welcome! I am Bryan Fehr, a dedicated software developer and the founder of FehrWare Tech Solutions.
          With a commitment to excellence, I specialize in designing responsive websites, developing cross-platform applications,
          and delivering tailored solutions to unique challenges. Explore my portfolio, review our service offerings, and collaborate with me to bring your visionary projects to production.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;