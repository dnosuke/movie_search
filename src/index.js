import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
)