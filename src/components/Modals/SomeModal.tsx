import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Modal } from 'antd';

const SOME_MODAL_KEY = 'someModalId';

export type SomeModalCallbacks = {
  close: () => void;
  open: (value: string) => void;
};

export type SomeModalValue = {
  visible: boolean;
  content: string;
};

export type SomeModalType = [SomeModalValue, SomeModalCallbacks];

export const useSomeModal = (): SomeModalType => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = {
    visible: searchParams.has(SOME_MODAL_KEY),
    content: searchParams.get(SOME_MODAL_KEY),
  };

  const callbacks = {
    close: () => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete(SOME_MODAL_KEY);
      setSearchParams(newSearchParams as URLSearchParams);
    },
    open: (_value: string) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.append(SOME_MODAL_KEY, _value);
      setSearchParams(newSearchParams as URLSearchParams);
    },
  };

  return [value, callbacks];
};

export const SomeModal: FC = () => {
  const [{ visible, content }, { close }] = useSomeModal();

  return (
    <Modal visible={visible} onCancel={close}>
      {content}
    </Modal>
  );
};
