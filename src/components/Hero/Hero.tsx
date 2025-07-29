import React, { useContext, useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context'; // Removed IPortfolioContext from import

const Hero: React.FC = () => {
  const { hero } = useContext(PortfolioContext)!; // Assert non-null
  const { cta } = hero;

  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  // isMobile is declared but its value is never read. Removed.

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      // setIsMobile(false); // Removed
    } else {
      // setIsMobile(true); // Removed
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gray-100 text-center py-16">
      <div className="container mx-auto px-4">
        <Fade
          direction={isDesktop ? 'left' : 'down'}
          duration={1000}
          delay={500}
          triggerOnce
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Tornado{' '}
            <span className="text-blue-600">Blue</span>
            <br />
            Full Stack Web Development
          </h1>
        </Fade>
        <Fade
          direction={isDesktop ? 'left' : 'down'}
          duration={1000}
          delay={1000}
          triggerOnce
        >
          <p className="mt-8">
            <span className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
              <Link to="about" smooth duration={1000}>
                {cta || 'view'}
              </Link>
            </span>
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;