import React from 'react';
import * as S from './MenuButton.styled';
import {
  MenuIcon,
  NoticeIcon,
  SettingIcon,
} from '../../../assets/img/svg-icon-paths';

type Props = {};

const MenuButton = (props: Props) => {
  return (
    <S.Icon src={SettingIcon} alt="setting" />
    // <S.MenuButtonsWrapper>
    //   {/* <S.Icon src={NoticeIcon} alt="noice" />
    //   <S.Icon src={MenuIcon} alt="menu" /> */}
    // </S.MenuButtonsWrapper>
  );
};

export default MenuButton;
