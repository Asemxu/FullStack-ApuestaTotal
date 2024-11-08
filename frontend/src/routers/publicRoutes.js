import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../modules/core/hooks';

const PublicRoutes = ({ children }) => {
  const { accessToken } = useUser();
  return accessToken ? <Navigate to="/user/upload-users" /> : children;
};

export default PublicRoutes;
