import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Tilt from 'react-parallax-tilt';
import globaledge from '../../images/globaledge.png';

// Define the props interface for react-parallax-tilt to ensure TypeScript recognizes them
interface ReactParallaxTiltProps {
  tiltReverse?: boolean;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  transitionSpeed?: number;
  transitionEasing?: string;
  reset?: boolean;
  children?: React.ReactNode; // Tilt component wraps children
}

const Projects: React.FC = () => {
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

  // Define the props object with the explicit interface
  const tiltProps: ReactParallaxTiltProps = {
    tiltReverse: false,
    maxTilt: 8,
    perspective: 1000,
    scale: 1,
    transitionSpeed: 300,
    transitionEasing: "cubic-bezier(.03,.98,.52,.99)",
    reset: true,
  };

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="project-wrapper">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Current Projects</h1>

          <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Fade
                direction={isDesktop ? 'left' : 'down'}
                duration={1000}
                delay={500}
                triggerOnce
              >
                <div className="text-gray-700 text-lg leading-relaxed">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Global Edge</h3>
                  <div className="mb-4">
                    <p className="mb-2">
                      Global Edge is an award-winning product that gives instant access to the latest employment law developments in 39 countries plus the EU, direct to a mobile device or desktop. Designed to save time and help minimise legal spend on employment law queries, Global Edge provides clear, reliable, up-to-date answers on 30 key employment law topics around the world and maps out future legislative change to help you stay ahead.
                    </p>
                    <p>
                      Global Edge is designed for general counsel, members of in-house counsel or senior regional or global HR professionals at a multi-national organisation with employees around the world.
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                    href={'https://globaledge.legal'}
                  >
                    See Live
                  </a>
                </div>
              </Fade>
            </div>
            <div className="md:w-1/2">
              <Fade
                direction={isDesktop ? 'right' : 'down'}
                duration={1000}
                delay={1000}
                triggerOnce
              >
                <div className="flex justify-center items-center">
                  <a
                    href={'#!'}
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                    className="block w-full max-w-xl"
                  >
                    <Tilt {...tiltProps}> {/* Use spread props */}
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src={globaledge} className="w-full h-auto" alt="Global Edge screenshot" />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;