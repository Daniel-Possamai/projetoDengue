import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
