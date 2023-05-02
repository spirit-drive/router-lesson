/* eslint-disable */
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
  const value = {
    visible: false,
    content: 'invalid content',
  };

  const callbacks = {
    close: () => {
      //  закрывать подальное окно
    },
    open: (content: string) => {
      // открывает модальное окно и записывает в него контент
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
