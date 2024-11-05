import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../modules/auth/store/authStore';

const PublicRoutes = ({ children }) => {
  const { accessToken } = useAuthStore();
  return accessToken ? <Navigate to="/user/upload-users" /> : children;
};

export default PublicRoutes;
