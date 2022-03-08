import React, { FC } from 'react';
import { Frame } from 'src/components/Frame';
import { Button } from 'antd';
import { useSomeModal } from 'src/components/Modals/SomeModal';
import s from './Other.sass';

const Other: FC = () => {
  const [, { open }] = useSomeModal();

  return (
    <div className={s.root}>
      <Frame>
        Other
        <div>
          <Button onClick={() => open('some content')}>open modal</Button>
        </div>
      </Frame>
    </div>
  );
};

export default Other;
