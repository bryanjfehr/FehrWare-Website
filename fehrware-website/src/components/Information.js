import React from 'react';
import '../styles/Information.css';

function Information() {
  return (
    <section className="information">
      <h2>Information</h2>
      <div className="about-me">
        <h3>About Me</h3>
        {/* Placeholder for future content */}
      </div>
      <div className="services">
        <h3>Services Offered</h3>
        {/* Placeholder for future content */}
      </div>
      <img src="/assets/photos/about-me.png" alt="About Me" className="about-image" />
    </section>
  );
}

export default Information; // Ensure this line exists