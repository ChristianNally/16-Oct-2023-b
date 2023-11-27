import React from 'react';
import ReactDOM from 'react-dom/client';

// const App = require('./App');
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('monkeyFuzz'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
