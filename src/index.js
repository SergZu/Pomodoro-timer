import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
      try {
          await navigator.serviceWorker.register('/serviceWorker.js')
      }
      catch (err) {
          console.log('Service worker register failed')
      }
  }
})

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
