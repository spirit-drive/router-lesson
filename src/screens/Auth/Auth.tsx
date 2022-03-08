import React, { FC } from 'react';
import { useTokenContext } from 'src/TokenProvider';
import { Button } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationState } from 'src/navigation/types';
import s from './Auth.sass';

const Auth: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [, { login }] = useTokenContext();
  const onClick = () => {
    const state = location.state as NavigationState;
    login();
    navigate(state?.from?.pathname || '/');
  };
  return (
    <div className={s.root}>
      <div>Авторизация</div>
      <Button type="primary" onClick={onClick}>
        Вход
      </Button>
    </div>
  );
};

export default Auth;
