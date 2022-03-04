import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { User } from '../pages';

export const AppRoutes: React.FC = () => {
  return(
    <Routes>
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
