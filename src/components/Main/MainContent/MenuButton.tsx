import React from 'react';
import * as S from './MenuButton.styled';
import MenuIcon from '../../../assets/img/icon-line-three-mono.svg';
import NoticeIcon from '../../../assets/img/icon-notice.svg';

type Props = {};

const MenuButton = (props: Props) => {
  return (
    <S.MenuButtonsWrapper>
      <S.Icon src={MenuIcon} alt="menu" />
      <S.Icon src={NoticeIcon} alt="noice" />
    </S.MenuButtonsWrapper>
  );
};

export default MenuButton;
