// src/components/ContactForm.js
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook
import '../styles/ContactForm.css';

// ContactForm component with form validation and error handling
function ContactForm() {
  const { language } = useLanguage(); // Access language state

  // State to manage form inputs (name, email, message)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // State to manage error messages for each field
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  // Bilingual content
  const content = {
    en: {
      sectionHeader: 'Contact Me',
      intro: `You can reach me through multiple channels: call me at (403)478-0570, 
        email me directly at <span className="highlight">bryan.fehr@fehrwaretech.ca</span>, 
        connect via social media (links in footer), or use the email form below.`,
      labels: {
        name: 'Name:',
        email: 'Email:',
        message: 'Message:',
      },
      errors: {
        nameRequired: 'Name is required.',
        nameInvalid: 'Name must contain only letters.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Message is required.',
      },
      button: 'Send Email',
    },
    fr: {
      sectionHeader: 'Contactez-moi',
      intro: `Vous pouvez me contacter via plusieurs canaux : appelez-moi au (403)478-0570, 
        envoyez-moi un email directement à <span className="highlight">bryan.fehr@fehrwaretech.ca</span>, 
        connectez-vous via les réseaux sociaux (liens dans le pied de page), ou utilisez le formulaire d'email ci-dessous.`,
      labels: {
        name: 'Nom :',
        email: 'Email :',
        message: 'Message :',
      },
      errors: {
        nameRequired: 'Le nom est requis.',
        nameInvalid: 'Le nom doit contenir uniquement des lettres.',
        emailRequired: 'L’email est requis.',
        emailInvalid: 'Veuillez entrer une adresse email valide.',
        messageRequired: 'Le message est requis.',
      },
      button: 'Envoyer l’email',
    },
  };

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
      newErrors.name = content[language].errors.nameRequired;
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = content[language].errors.nameInvalid;
      isValid = false;
    }

    // Validate email: must be non-empty and match a basic email format
    if (!formData.email.trim()) {
      newErrors.email = content[language].errors.emailRequired;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = content[language].errors.emailInvalid;
      isValid = false;
    }

    // Validate message: must be non-empty
    if (!formData.message.trim()) {
      newErrors.message = content[language].errors.messageRequired;
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
      <h2>{content[language].sectionHeader}</h2>
      {/* Introductory paragraph explaining contact options */}
      <p className="contact-intro" dangerouslySetInnerHTML={{ __html: content[language].intro }} />
      {/* Contact form with validation */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{content[language].labels.name}</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/* Display name error if present */}
        {errors.name && <p className="error">{errors.name}</p>}
        <label htmlFor="email">{content[language].labels.email}</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {/* Display email error if present */}
        {errors.email && <p className="error">{errors.email}</p>}
        <label htmlFor="message">{content[language].labels.message}</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {/* Display message error if present */}
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit">{content[language].button}</button>
      </form>
    </section>
  );
}

export default ContactForm;