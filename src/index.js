import React from 'react';
import ReactDOM from 'react-dom/client';
import Aplicacion from './components/app.js';

const App = () => {
  return (
    <Aplicacion/>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
