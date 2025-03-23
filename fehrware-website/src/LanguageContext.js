import React, { createContext, useState, useContext } from 'react';

// Create a Language Context to manage the current language (English or French)
const LanguageContext = createContext();

// Language provider to wrap the app and provide language state
export const LanguageProvider = ({ children }) => {
  // Default language is English
  const [language, setLanguage] = useState('en');

  // Translation dictionaries for English and French
  const translations = {
    en: {
      // Header
      home: 'Home',
      information: 'Information',
      contact: 'Contact',
      portfolio: 'Portfolio',
      settings: 'Page Settings',
      // Home
      welcomeHeader: 'Welcome to FehrWare Tech Solutions',
      welcomeText: 'Welcome! I am Bryan Fehr, a dedicated software developer and the founder of FehrWare Tech Solutions. With a commitment to excellence, I specialize in designing responsive websites, developing cross-platform applications, and delivering tailored solutions to unique challenges. Explore my portfolio, review our service offerings, and collaborate with me to bring your visionary projects to production.',
      // Information
      informationHeader: 'Information',
      aboutMe: 'About Me',
      aboutMeText: 'I’m Bryan Fehr, a passionate developer with a focus on creating innovative tech solutions. With expertise in web development, I aim to deliver impactful projects for clients worldwide.',
      services: 'Services Offered',
      service1: 'Web Development (React.js, Node.js, Express.js)',
      service2: 'Cloud Deployment (Google Cloud Platform)',
      service3: 'Cross-platform mobile app development (React Native)',
      service4: 'Data science, AI and ML solutions with Python',
      service5: 'Custom Software Solutions',
      // ContactForm
      contactHeader: 'Contact Me',
      contactIntro: 'You can reach me through multiple channels: call me at (403)478-0570, email me directly at <span className="highlight">bryan.fehr@fehrwaretech.ca</span>, connect via social media (links in footer), or use the email form below.',
      nameLabel: 'Name:',
      emailLabel: 'Email:',
      messageLabel: 'Message:',
      sendButton: 'Send Email',
      nameRequired: 'Name is required.',
      nameLetters: 'Name must contain only letters.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Please enter a valid email address.',
      messageRequired: 'Message is required.',
      // Portfolio
      portfolioHeader: 'Portfolio',
      viewOnGitHub: 'View on GitHub',
      // PageSettings
      settingsHeader: 'Page Settings',
      showTimeTab: 'Show current time in tab title',
      languageLabel: 'Language:',
      themeLabel: 'Theme:',
      // Footer
      pages: 'Pages',
      socialMedia: 'Social Media',
      copyright: '© 2025 FehrWare Tech Solutions',
    },
    fr: {
      // Header
      home: 'Accueil',
      information: 'Informations',
      contact: 'Contact',
      portfolio: 'Portefeuille',
      settings: 'Paramètres de la page',
      // Home
      welcomeHeader: 'Bienvenue chez FehrWare Tech Solutions',
      welcomeText: 'Bienvenue ! Je suis Bryan Fehr, un développeur logiciel passionné et le fondateur de FehrWare Tech Solutions. Avec un engagement envers l’excellence, je me spécialise dans la conception de sites web réactifs, le développement d’applications multiplateformes et la fourniture de solutions sur mesure pour des défis uniques. Explorez mon portefeuille, découvrez nos offres de services et collaborez avec moi pour donner vie à vos projets visionnaires.',
      // Information
      informationHeader: 'Informations',
      aboutMe: 'À propos de moi',
      aboutMeText: 'Je suis Bryan Fehr, un développeur passionné qui se concentre sur la création de solutions technologiques innovantes. Avec une expertise en développement web, je vise à livrer des projets impactants pour des clients à travers le monde.',
      services: 'Services offerts',
      service1: 'Développement web (React.js, Node.js, Express.js)',
      service2: 'Déploiement cloud (Google Cloud Platform)',
      service3: 'Développement d’applications mobiles multiplateformes (React Native)',
      service4: 'Science des données, solutions IA et ML avec Python',
      service5: 'Solutions logicielles personnalisées',
      // ContactForm
      contactHeader: 'Contactez-moi',
      contactIntro: 'Vous pouvez me contacter via plusieurs canaux : appelez-moi au (403)478-0570, envoyez-moi un courriel directement à <span className="highlight">bryan.fehr@fehrwaretech.ca</span>, connectez-vous via les réseaux sociaux (liens dans le pied de page), ou utilisez le formulaire de courriel ci-dessous.',
      nameLabel: 'Nom :',
      emailLabel: 'Courriel :',
      messageLabel: 'Message :',
      sendButton: 'Envoyer le courriel',
      nameRequired: 'Le nom est requis.',
      nameLetters: 'Le nom doit contenir uniquement des lettres.',
      emailRequired: 'Le courriel est requis.',
      emailInvalid: 'Veuillez entrer une adresse courriel valide.',
      messageRequired: 'Le message est requis.',
      // Portfolio
      portfolioHeader: 'Portefeuille',
      viewOnGitHub: 'Voir sur GitHub',
      // PageSettings
      settingsHeader: 'Paramètres de la page',
      showTimeTab: 'Afficher l’heure actuelle dans le titre de l’onglet',
      languageLabel: 'Langue :',
      themeLabel: 'Thème :',
      // Footer
      pages: 'Pages',
      socialMedia: 'Réseaux sociaux',
      copyright: '© 2025 FehrWare Tech Solutions',
    },
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the Language Context
export const useLanguage = () => useContext(LanguageContext);