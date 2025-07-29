import React from 'react';
import { Fade } from 'react-awesome-reveal'; // Updated import
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <Fade
    direction="down" // 'bottom' becomes 'down'
    duration={1000}
    delay={300}
    triggerOnce // Added to ensure animation plays only once
  >
    <h2 className="section-title">{title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
