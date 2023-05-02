/* eslint-disable */
import React, { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { ProtectedRoute } from 'src/navigation/ProtectedRoute';

import Home from 'src/screens/Home';
import Other from 'src/screens/Other';
import Cats from 'src/screens/Cats';
import Auth from 'src/screens/Auth';
import NotFound from 'src/screens/NotFound';

export const Navigation: FC = () => null;
