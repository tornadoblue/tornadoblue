import { useState, useEffect } from 'react'; // Removed React import
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { PortfolioProvider, IHeroData, IAboutData, IProject, IContactData, IFooterData } from './context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from './mock/data';

function App() {
  const [hero, setHero] = useState<IHeroData>({} as IHeroData);
  const [about, setAbout] = useState<IAboutData>({} as IAboutData);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [contact, setContact] = useState<IContactData>({} as IContactData);
  const [footer, setFooter] = useState<IFooterData>({} as IFooterData);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;