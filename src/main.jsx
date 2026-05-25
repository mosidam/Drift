import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { setupNativeRuntime } from './nativeRuntime.js';
import './styles.css';

setupNativeRuntime();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    fetch('/app/sw.js', { method: 'HEAD' })
      .then((response) => {
        const type = response.headers.get('content-type') || '';
        if (!response.ok || !type.includes('javascript')) return null;
        return navigator.serviceWorker.register('/app/sw.js', { scope: '/app/' });
      })
      .catch(() => {
        // The app remains fully usable if offline caching is unavailable.
      });
  });
}
