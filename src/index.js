import React from 'react';
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet';
import App from './components/App';
import { headData } from './mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';

const Main = () => {

  const { title, lang, description } = headData;

  return ( 
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App />
    </>
  )
};

const app = ReactDOM.createRoot(
  document.getElementById('app')
);

app.render(<div><App/></div>);

