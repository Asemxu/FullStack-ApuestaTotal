import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../modules/auth/store/authStore';

const PrivateRoutes = ({ children }) => {
  const { accessToken } = useAuthStore();
  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
