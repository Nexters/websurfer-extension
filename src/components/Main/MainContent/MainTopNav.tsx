import React from 'react';

import Logo from '@components/Commons/Logo';
import MenuButton from './MenuButton';

import * as S from './MainTopNav.styled';

type Props = {
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
  isSetting: boolean;
};

const MainTopNav = (props: Props) => {
  return (
    <>
      <S.Wrapper>
        <Logo />
        <MenuButton
          setIsSetting={props.setIsSetting}
          isSetting={props.isSetting}
        />
      </S.Wrapper>
    </>
  );
};

export default MainTopNav;
