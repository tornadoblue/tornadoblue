import React from 'react';
import { Fade } from 'react-awesome-reveal';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <Fade
    direction="down"
    duration={1000}
    delay={300}
    triggerOnce
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">{title}</h2>
  </Fade>
);

export default Title;