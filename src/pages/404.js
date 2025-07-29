import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal'; // Updated import
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          {/* 'bottom' becomes 'direction="down"', 'distance' removed, 'triggerOnce' added */}
          <Fade direction="down" duration={1000} delay={500} triggerOnce>
            <h1 className="hero-title text-center">
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          {/* 'bottom' becomes 'direction="down"', 'distance' removed, 'triggerOnce' added */}
          <Fade direction="down" duration={1000} delay={1000} triggerOnce>
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
