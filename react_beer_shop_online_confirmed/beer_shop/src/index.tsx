import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import Router from './router';
import './style/style.css';
import Template from './components/Template';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Template/>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
