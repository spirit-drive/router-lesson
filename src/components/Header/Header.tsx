import React, { memo } from 'react';
import cn from 'clsx';
import { Frame } from 'src/components/Frame';
import { Logo } from 'src/components/Logo';
import { Button } from 'antd';
import { useTokenContext } from 'src/TokenProvider';
import { NavLink, NavLinkProps } from 'react-router-dom';
import s from './Header.module.sass';

export type Props = {
  className?: string;
  children?: never;
};

export const getClassName: NavLinkProps['className'] = ({ isActive }) => cn(s.link, isActive && s.active);

export const Header = memo<Props>(({ className }) => {
  const [, { logout }] = useTokenContext();

  return (
    <header className={cn(s.root, className)}>
      <Frame className={s.frame}>
        <Logo />
        <div>
          <NavLink className={getClassName} to=".">
            home
          </NavLink>
          <NavLink className={getClassName} to="other">
            other
          </NavLink>
          <NavLink className={getClassName} to="cats">
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
