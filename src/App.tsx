import * as React from 'react';
import { Navigation } from 'src/navigation';
import { TokenProvider } from 'src/TokenProvider';

export const App: React.FC = () => (
  <TokenProvider>
    <Navigation />
  </TokenProvider>
);
