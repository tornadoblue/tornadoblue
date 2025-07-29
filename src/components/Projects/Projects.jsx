import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal'; // Updated import
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import globaledge from '../../images/globaledge.png';

const Projects = () => {
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <h1 style={{ marginBottom: 30, color: '#333' }}>Current Projects</h1>

          <Row>
            <Col lg={4} sm={12}>
              {/* Conditional direction based on isDesktop/isMobile, 'distance' removed, 'triggerOnce' added */}
              <Fade
                direction={isDesktop ? 'left' : 'down'} // 'bottom' becomes 'down'
                duration={1000}
                delay={500}
                triggerOnce
              >
                <div className="project-wrapper__text">
                  <h3 className="project-wrapper__text-title">Global Edge</h3>
                  <div>
                    <p>
                      Global Edge is an award-winning product that gives instant access to the latest employment law developments in 39 countries plus the EU, direct to a mobile device or desktop. Designed to save time and help minimise legal spend on employment law queries, Global Edge provides clear, reliable, up-to-date answers on 30 key employment law topics around the world and maps out future legislative change to help you stay ahead.
                    </p>
                    <p>
                      Global Edge is designed for general counsel, members of in-house counsel or senior regional or global HR professionals at a multi-national organisation with employees around the world.
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--hero"
                    href={'https://globaledge.legal'}
                  >
                    See Live
                  </a>
                </div>
              </Fade>
            </Col>
            <Col lg={8} sm={12}>
              {/* Conditional direction based on isDesktop/isMobile, 'distance' removed, 'triggerOnce' added */}
              <Fade
                direction={isDesktop ? 'right' : 'down'} // 'bottom' becomes 'down'
                duration={1000}
                delay={1000}
                triggerOnce
              >
                <div className="project-wrapper__image">
                  <a
                    href={'#!'}
                    target="_blank"
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <Tilt
                      options={{
                        reverse: false,
                        max: 8,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',
                      }}
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img src={globaledge} style={{ maxWidth: '90%' }} alt="Global Edge screenshot" />
                      </div>
                    </Tilt>
                  </a>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
