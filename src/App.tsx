import * as React from 'react';
import { Navigation } from 'src/navigation';
import { TokenProvider } from 'src/TokenProvider';
import { ConfigProvider, ThemeConfig } from 'antd';
import { Modals } from 'src/components/Modals';
import { $mainGreen } from 'src/styles/common';

const colorPrimary = $mainGreen;
const config: ThemeConfig = {
  token: {
    colorPrimary,
  },
};

export const App: React.FC = () => (
  <ConfigProvider theme={config}>
    <TokenProvider>
      <Navigation>
        <Modals />
      </Navigation>
    </TokenProvider>
  </ConfigProvider>
);
