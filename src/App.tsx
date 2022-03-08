import * as React from 'react';
import { Navigation } from 'src/navigation';
import { TokenProvider } from 'src/TokenProvider';
import { Modals } from 'src/components/Modals';

export const App: React.FC = () => (
  <TokenProvider>
    <Navigation>
      <Modals />
    </Navigation>
  </TokenProvider>
);
