import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import App from './App'; // Adjusted path for App component
import { headData } from './mock/data';
import './index.css'; // Import Tailwind CSS

const Main = () => {
  const { title, lang, description } = headData;

  return (
    <React.StrictMode>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Tornado Blue'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'A simple portfolio template'} />
      </Helmet>
      <App />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);