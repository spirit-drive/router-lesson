/* eslint-disable */
import React, { memo } from 'react';
import cn from 'clsx';
import { Link } from 'react-router-dom';
import s from './Logo.module.sass';

export type LogoProps = {
  className?: string;
  children?: never;
};

export const Logo = memo<LogoProps>(({ className }) => (
  <div className={cn(s.root, className)}>
    <div className={s.img} />
    <div className={s.text}>Лого</div>
  </div>
));

Logo.displayName = 'Logo';
