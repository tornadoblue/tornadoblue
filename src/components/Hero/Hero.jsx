import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal'; // Updated import
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero; // Note: title, name, subtitle are not used in this specific component's JSX

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        {/* Conditional direction based on isDesktop/isMobile, 'distance' removed, 'triggerOnce' added */}
        <Fade
          direction={isDesktop ? 'left' : 'down'} // 'bottom' becomes 'down'
          duration={1000}
          delay={500}
          triggerOnce
        >
          <h1 className="hero-title">
            Tornado{' '}
            <span className="text-color-main">Blue</span>
            <br />
            Full Stack Web Development
          </h1>
        </Fade>
        {/* Conditional direction based on isDesktop/isMobile, 'distance' removed, 'triggerOnce' added */}
        <Fade
          direction={isDesktop ? 'left' : 'down'} // 'bottom' becomes 'down'
          duration={1000}
          delay={1000}
          triggerOnce
        >
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'view'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
