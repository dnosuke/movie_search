import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { SkeletonTheme } from 'react-loading-skeleton'


ReactDOM.render(
  <ErrorBoundary>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </SkeletonTheme>
  </ErrorBoundary>,
  document.getElementById('root')
)