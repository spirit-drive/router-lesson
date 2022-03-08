import React, { memo } from 'react';
import cn from 'clsx';
import { Frame } from 'src/components/Frame';
import { Logo } from 'src/components/Logo';
import { Button } from 'antd';
import { useTokenContext } from 'src/TokenProvider';
import { NavLink } from 'react-router-dom';
import s from './Header.module.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const Header = memo<Props>(({ className }) => {
  const [, { logout }] = useTokenContext();

  return (
    <header className={cn(s.root, className)}>
      <Frame className={s.frame}>
        <Logo />
        <div>
          <NavLink className={({ isActive }) => cn(s.link, isActive && s.active)} to=".">
            home
          </NavLink>
          <NavLink className={({ isActive }) => cn(s.link, isActive && s.active)} to="other">
            other
          </NavLink>
          <NavLink className={({ isActive }) => cn(s.link, isActive && s.active)} to="cats">
            cat
          </NavLink>
        </div>
        <Button onClick={logout} type="primary">
          Выйти
        </Button>
      </Frame>
    </header>
  );
});

Header.displayName = 'Header';
