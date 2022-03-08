import React, { FC } from 'react';
import { Frame } from 'src/components/Frame';
import s from './Home.sass';

const Home: FC = () => (
  <div className={s.root}>
    <Frame>Home</Frame>
  </div>
);

export default Home;
