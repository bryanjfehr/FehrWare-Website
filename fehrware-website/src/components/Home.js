// src/components/Home.js
import React from 'react';
import { useLanguage } from '../LanguageContext'; // Import useLanguage hook
import '../styles/Home.css';

// Home component with hero section, featuring a background image behind text
function Home() {
  const { language } = useLanguage(); // Access language state

  // Bilingual content
  const content = {
    en: {
      welcomeHeader: 'Welcome to FehrWare Tech Solutions',
      welcomeText: `Welcome! I am Bryan Fehr, a dedicated software developer and the founder of FehrWare Tech Solutions.
        With a commitment to excellence, I specialize in designing responsive websites, developing cross-platform applications,
        and delivering tailored solutions to unique challenges. Explore my portfolio, review our service offerings, and collaborate with me to bring your visionary projects to production.`,
    },
    fr: {
      welcomeHeader: 'Bienvenue chez FehrWare Tech Solutions',
      welcomeText: `Bienvenue ! Je suis Bryan Fehr, un développeur logiciel passionné et le fondateur de FehrWare Tech Solutions.
        Avec un engagement envers l'excellence, je me spécialise dans la conception de sites web réactifs, le développement d'applications multiplateformes,
        et la fourniture de solutions sur mesure pour des défis uniques. Explorez mon portfolio, découvrez nos offres de services et collaborez avec moi pour donner vie à vos projets visionnaires.`,
    },
  };

  return (
    <section className="home">
      <div className="hero">
        {/* Hero background image, intended as a backdrop */}
        <img
          src="https://storage.googleapis.com/fehrware-tech-assets/photos/hero-background.png"
          alt="Hero Background"
          className="hero-background"
        />
        <h1 className="welcome-header">{content[language].welcomeHeader}</h1>
        {/* Welcome paragraph with personal introduction and translucent background for readability */}
        <div className="welcome-text-background">
          <p>{content[language].welcomeText}</p>
        </div>
      </div>
    </section>
  );
}

export default Home;