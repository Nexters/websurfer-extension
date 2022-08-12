import React from 'react';
import * as S from './MenuButton.styled';
import { SettingIcon } from '../../../assets/img/svg-icon-paths';

type Props = {
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
  isSetting: boolean;
};

const MenuButton = (props: Props) => {
  return (
    <S.Icon
      src={SettingIcon}
      alt="setting"
      onClick={() => {
        props.setIsSetting(!props.isSetting);
      }}
    />
  );
};

export default MenuButton;
