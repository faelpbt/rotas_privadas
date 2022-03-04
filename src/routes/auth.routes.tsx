import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages';

export const AppAuth: React.FC = () => {
  return(
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={() => <Navigate to="/" />} />
    </Routes>
  );
}
