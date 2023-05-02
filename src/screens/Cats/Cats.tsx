/* eslint-disable */
import React, { FC } from 'react';
import { Frame } from 'src/components/Frame';
import { useParams } from 'react-router-dom';
import s from './Cats.sass';

const Cats: FC = () => (
  <div className={s.root}>
    <Frame>{/* Cat {id} {batid} */}</Frame>
  </div>
);

export default Cats;
