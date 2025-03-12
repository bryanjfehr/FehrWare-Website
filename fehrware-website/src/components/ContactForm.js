import React, { useState } from 'react';
import '../styles/ContactForm.css';

// ContactForm component with form validation and error handling
function ContactForm() {
  // State to manage form inputs (name, email, message)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // State to manage error messages for each field
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  // Handle input changes and clear errors on change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear error for the field being edited
    setErrors({ ...errors, [id]: '' });
  };

  // Validate form data
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Validate name: must be non-empty and contain only letters
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only letters.';
      isValid = false;
    }

    // Validate email: must be non-empty and match a basic email format
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate message: must be non-empty
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If validation passes, proceed with email submission
      const mailtoLink = `mailto:bryan.fehr@fehrwaretech.ca?subject=Contact from ${formData.name}&body=${formData.message} (From: ${formData.email})`;
      window.location.href = mailtoLink; // Opens default email client
    } else {
      console.log('Form validation failed. Please correct the errors.');
    }
  };

  return (
    <section className="contact-form">
      {/* Section header */}
      <h2>Contact Me</h2>
      {/* Introductory paragraph explaining contact options */}
      <p className="contact-intro">
        You can reach me through multiple channels: call me at (403)478-0570, 
        email me directly at <span className="highlight">bryan.fehr@fehrwaretech.ca</span>, 
        connect via social media(links in footer), or use the email form below.
      </p>
      {/* Contact form with validation */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/* Display name error if present */}
        {errors.name && <p className="error">{errors.name}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {/* Display email error if present */}
        {errors.email && <p className="error">{errors.email}</p>}
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {/* Display message error if present */}
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit">Send Email</button>
      </form>
    </section>
  );
}

export default ContactForm;