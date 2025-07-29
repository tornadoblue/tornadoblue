import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact: React.FC = () => {
  const { contact } = useContext(PortfolioContext)!;
  const { email } = contact;

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <Title title="Contact" />
        <Fade direction="down" duration={1000} delay={800} triggerOnce>
          <div className="mt-8">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold text-xl rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
              href={`mailto:${email || 'reid@tornadoblue.com'}`}
            >
              {email || 'reid@tornadoblue.com'}
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;