import React from 'react';
import * as S from './MenuButton.styled';
import { MenuIcon, NoticeIcon } from '../../../assets/img/svg-icon-paths';

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
