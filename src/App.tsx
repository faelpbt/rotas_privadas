import React from 'react';
import { AuthRoutes } from './routes';
import {AuthProvider} from './contexts/auth';

export const App: React.FC = () => {
  return (
    <div>
      <AuthProvider>
        <AuthRoutes />
      </AuthProvider>
    </div>
  );
}

