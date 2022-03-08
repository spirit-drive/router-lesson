import React, { FC, useEffect, useMemo, useRef } from 'react';
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
  const searchParamsCopy = useRef(searchParams);
  useEffect(() => {
    searchParamsCopy.current = searchParams;
  }, [searchParams]);

  const value = useMemo(
    () => ({
      visible: searchParams.has(SOME_MODAL_KEY),
      content: searchParams.get(SOME_MODAL_KEY),
    }),
    [searchParams]
  );

  const callbacks = useMemo(
    () => ({
      close: () => {
        const newSearchParams = new URLSearchParams(searchParamsCopy.current.toString());
        newSearchParams.delete(SOME_MODAL_KEY);
        setSearchParams(newSearchParams as URLSearchParams);
      },
      open: (_value: string) => {
        const newSearchParams = new URLSearchParams(searchParamsCopy.current.toString());
        newSearchParams.append(SOME_MODAL_KEY, _value);
        setSearchParams(newSearchParams as URLSearchParams);
      },
    }),
    [setSearchParams]
  );

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
