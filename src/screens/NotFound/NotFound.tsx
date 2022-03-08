import React from 'react';
import { Frame } from 'src/components/Frame';
import s from './NotFound.module.sass';

const NotFound: React.FC = () => (
  <div className={s.root}>
    <Frame>404</Frame>
  </div>
);

export default NotFound;
