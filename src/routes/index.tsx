import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {AuthContext} from '../contexts/auth';
import { AppRoutes } from './app.routes';
import { AppAuth } from './auth.routes';

export const AuthRoutes: React.FC = () => {
  const {signed} = useContext(AuthContext);

  return(
      <BrowserRouter>
        {
          signed
            ? <AppRoutes />
            : <AppAuth />
        }
      </BrowserRouter>
  );
}
