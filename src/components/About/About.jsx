import React, { useContext, useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal'; // Updated import
import { Container, Row, Col } from 'react-bootstrap';
import photo from '../../images/portfolio.png';
import PortfolioContext from '../../context/context';

const About = () => {
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
    <section id="about">
      <Container>
        <h1 style={{ marginBottom: 30 }}>About Me</h1>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            {/* For the image, 'bottom' becomes direction="down" (or "bottom" in some versions, but "down" is more explicit) */}
            <Fade direction="down" duration={1000} delay={600} triggerOnce> {/* 'distance' is not directly supported, 'triggerOnce' is good practice */}
              <div className="about-wrapper__image">
                <img src={photo} style={{ maxWidth: '50%', borderRadius: '10px' }} alt="Profile" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            {/* Conditional direction based on isDesktop/isMobile */}
            <Fade
              direction={isDesktop ? 'left' : 'down'} // 'bottom' becomes 'down'
              duration={1000}
              delay={1000}
              triggerOnce // 'distance' is not directly supported, 'triggerOnce' is good practice
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Hello, my name is Reid. I have been developing software &amp; web applications professionally for over 25 years.
                </p>
                <p className="about-wrapper__info-text">
                  Languages: <br /> <br />
                  <ul>
                    <li>C# .NET</li>
                    <li>
                      JavaScript<br /> <span style={{ fontSize: '0.8em' }}> Vanilla JS, NodeJS / React </span>
                    </li>
                    <li>PHP</li>
                  </ul>
                </p>
                <p className="about-wrapper__info-text">
                  Data Tech / Platforms: <br /><br />
                  <ul>
                    <li>MS SQL</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>
                      Web APIs <br /> <span style={{ fontSize: '0.8em' }}> GraphQL / REST / JSON </span>
                    </li>
                  </ul>
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
