import React from 'react';
import '../styles/Information.css';

// Information component displaying About Me and Services Offered alongside an image
function Information() {
  return (
    <section className="information">
      {/* Section header */}
      <h2>Information</h2>
      {/* Container for side-by-side layout */}
      <div className="information-container">
        {/* Left section: Image */}
        <div className="information-image">
          <img src="https://storage.googleapis.com/fehrware-tech-assets/photos/about-me.png" alt="About Me" className="about-image" />
        </div>
        {/* Right section: About Me and Services Offered */}
        <div className="information-content">
          <div className="about-me">
            <h3>About Me</h3>
            {/* Placeholder for future content */}
            <p>
              I’m Bryan Fehr, a passionate developer with a focus on creating innovative tech solutions. 
              With expertise in web development, I aim to deliver impactful projects for clients worldwide.
            </p>
          </div>
          <div className="services">
            <h3>Services Offered</h3>
            {/* Placeholder for future content */}
            <ul>
              <li>Web Development (React.js, Node.js, Express.js)</li>
              <li>Cloud Deployment (Google Cloud Platform)</li>
              <li>Cross-platform mobile app development (React Native)</li>
              <li>Custom Software Solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;