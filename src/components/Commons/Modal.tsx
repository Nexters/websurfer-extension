import React, { useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';
import { closeModal, modalSelector, ModalType } from '@redux/common';
import { RootState, useAppDispatch, useAppSelector } from '@redux/store';

import { ModalCloseIcon } from '@assets/img/svg-icon-paths';

import * as S from './Modal.Styled';

interface Props {
  children: React.ReactNode;
  title: string;
  type: ModalType;
}

const Modal = ({ children, title, type }: Props) => {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  const dispatch = useAppDispatch();
  const modalState = useAppSelector(modalSelector);

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

  if (
    ref.current &&
    mounted &&
    modalState.isOpenModal &&
    type === modalState.isModalType
  ) {
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
