import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal'; // Updated import
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact; // Note: cta, btn, email are not used in this specific component's JSX

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        {/* 'bottom' becomes direction="down" and 'distance' is removed, 'triggerOnce' added */}
        <Fade direction="down" duration={1000} delay={800} triggerOnce>
          <div className="contact-wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:reid@tornadoblue.com`}
            >
              reid@tornadoblue.com
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
