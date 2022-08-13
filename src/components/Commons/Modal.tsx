import React, { useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';
import { closeModal } from '@redux/common';
import { RootState, useAppDispatch, useAppSelector } from '@redux/store';

import { ModalCloseIcon } from '@assets/img/svg-icon-paths';

import * as S from './Modal.Styled';

interface Props {
  children: React.ReactNode;
  // closePortal: () => void;
  title: string;
}

const Modal = ({ children, title }: Props) => {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  const dispatch = useAppDispatch();
  const isOpenModal = useAppSelector(
    (state: RootState) => state.common.isOpenModal
  );

  const closePortal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById('modal');
      ref.current = dom; // ref에 dom 값 전달
    }
  }, []);

  if (ref.current && mounted && isOpenModal) {
    return createPortal(
      <>
        <S.ModalContainer onClick={closePortal} />
        <S.ModalWrapper>
          <S.ModalTitleWrapper>
            <S.ModalTitle>{title}</S.ModalTitle>
            <S.ModalCloseButton
              src={ModalCloseIcon}
              alt="Close Modal"
              onClick={closePortal}
            />
          </S.ModalTitleWrapper>
          <S.ModalContentWrapper>{children}</S.ModalContentWrapper>
        </S.ModalWrapper>
      </>,
      ref.current
    );
  }
  return null;
};
export default Modal;
