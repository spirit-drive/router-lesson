import React, { ReactElement, FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTokenContext } from 'src/TokenProvider';

export const ProtectedRoute: FC = ({ children }) => {
  const [token] = useTokenContext();
  const location = useLocation();
  if (token) return React.Children.only(children as ReactElement);
  return <Navigate to="/auth" state={{ from: location }} replace />;
};
