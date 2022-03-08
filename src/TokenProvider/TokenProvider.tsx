import React, { createContext, FC, useContext, useEffect, useMemo, useState } from 'react';

export type TokenProviderProps = {
  children: React.ReactChildren | React.ReactChild;
};

export type Token = string;

export type TokenCallbacks = {
  login: () => void;
  logout: () => void;
};

export type TokenContextType = [Token, TokenCallbacks];

const TokenContext = createContext<TokenContextType>(null);

export const useTokenContext = (): TokenContextType => useContext(TokenContext);

export const TokenProvider: FC<TokenProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>(localStorage.getItem('token'));

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  const callbacks = useMemo(
    () => ({ login: () => setToken(Math.random().toString(16)), logout: () => setToken(null) }),
    []
  );

  return <TokenContext.Provider value={[token, callbacks]}>{children}</TokenContext.Provider>;
};
