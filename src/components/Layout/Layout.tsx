import React, { memo } from 'react';
import { Header } from 'src/components/Header';
import cn from 'clsx';
import s from './Layout.module.sass';

export type Props = {
  className?: string;
  children: React.ReactNode | React.ReactChildren;
};

export const Layout = memo<Props>(({ className, children }) => (
  <div className={cn(s.root, className)}>
    <Header className={s.header} />
    <main className={s.main}>{children}</main>
  </div>
));

Layout.displayName = 'Layout';
