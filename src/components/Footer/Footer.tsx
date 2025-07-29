import React from 'react'; // Removed useContext
import { Link } from 'react-scroll';
// Removed PortfolioContext import

const Footer: React.FC = () => {
  // const { footer } = useContext(PortfolioContext)!; // Assert non-null - removed as 'footer' is unused
  // networks is declared but its value is never read. Removed.

  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <span className="block mb-4">
          <Link to="hero" smooth duration={1000} className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-300">
            <i className="fa fa-angle-up text-2xl" aria-hidden="true" />
          </Link>
        </span>
        
        <p className="text-sm text-gray-400">
          Tornado Blue {' '} ACN 657 876 072
        </p>
      </div>
    </footer>
  );
};

export default Footer;