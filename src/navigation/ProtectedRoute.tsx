import React, { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTokenContext } from 'src/TokenProvider';

export const ProtectedRoute: FC = ({ children }) => {
  const [token] = useTokenContext();
  const location = useLocation();
  if (token) return <>{children}</>;
  return <Navigate to="/auth" state={{ from: location }} replace />;
};
