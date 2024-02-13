import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { ProtectedRoute } from 'src/navigation/ProtectedRoute';

import Home from 'src/screens/Home';
import Other from 'src/screens/Other';
import Cats from 'src/screens/Cats';
import Auth from 'src/screens/Auth';
import NotFound from 'src/screens/NotFound';

const mainElement = (
  <ProtectedRoute>
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="other" element={<Other />} />
        <Route path="cats">
          {/* Зачем replace? */}
          <Route index element={<Navigate to="1" replace />} />
          {/* <Route index element={<Navigate to="/cats/1" replace />} /> */}
          <Route path=":id" element={<Cats />}>
            <Route path=":batid" element={<Cats />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </ProtectedRoute>
);


export type NavigationProps = {
  children: React.ReactNode;
}


export const ApplicationRoutes = () => (
    <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={mainElement} />
    </Routes>
)

export const Navigation: FC<NavigationProps> = ({ children }) => (
  // рассказать про basename
  // <BrowserRouter basename="company/1">
  <BrowserRouter>
      {children}
      <ApplicationRoutes/>
  </BrowserRouter>
);
