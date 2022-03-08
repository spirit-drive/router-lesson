import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

export const defaultSetting = {
  titleTemplate: '%s - Test routing',
  defaultTitle: 'Test routing',
};

export const Head: FC = () => (
  <Helmet {...defaultSetting}>
    <html lang="ru" />
  </Helmet>
);
