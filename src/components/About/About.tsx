import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import photo from '../../images/portfolio.png';

const About: React.FC = () => {
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
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <Fade direction="down" duration={1000} delay={600} triggerOnce>
              <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
                <img src={photo} className="w-full h-auto rounded-lg shadow-lg" alt="Profile" />
              </div>
            </Fade>
          </div>
          <div className="md:w-1/2">
            <Fade
              direction={isDesktop ? 'left' : 'down'}
              duration={1000}
              delay={1000}
              triggerOnce
            >
              <div className="text-gray-700 text-lg leading-relaxed">
                <p className="mb-4">
                  Hello, my name is Reid. I have been developing software &amp; web applications professionally for over 25 years.
                </p>
                <div className="mb-4">
                  <p className="font-semibold text-gray-800">Languages:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>C# .NET</li>
                    <li>
                      JavaScript<br /> <span className="text-sm text-gray-600"> Vanilla JS, NodeJS / React </span>
                    </li>
                    <li>PHP</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Data Tech / Platforms:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>MS SQL</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>
                      Web APIs <br /> <span className="text-sm text-gray-600"> GraphQL / REST / JSON </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;