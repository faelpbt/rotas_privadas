import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
// import { AppAuth } from './auth.routes';

export const AuthRoutes: React.FC = () => {

  return(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  );
}
