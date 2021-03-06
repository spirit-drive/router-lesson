import React from 'react';
import { Frame } from 'src/components/Frame';
import { Link } from 'react-router-dom';
import s from './NotFound.module.sass';

const NotFound: React.FC = () => (
  <div className={s.root}>
    <Frame>
      <div>404</div>
      <Link to=".">to home</Link>
    </Frame>
  </div>
);

export default NotFound;
