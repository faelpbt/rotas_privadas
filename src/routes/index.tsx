import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { Home, Login, User } from '../pages';

export const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}