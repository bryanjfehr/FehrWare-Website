import React, { useState } from 'react';
import '../styles/ContactForm.css';

// ContactForm component with email functionality
function ContactForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle form submission by creating a mailto link
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:bryan.fehr@fehrwaretech.ca?subject=Contact from ${formData.name}&body=${formData.message} (From: ${formData.email})`;
    window.location.href = mailtoLink; // Opens default email client
  };

  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        {/* Email input */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        {/* Message textarea */}
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        {/* Submit button */}
        <button type="submit">Send Email</button>
      </form>
    </section>
  );
}

export default ContactForm;