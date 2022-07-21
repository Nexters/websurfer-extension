import React from 'react';

import Logo from '../../../components/Commons/Logo';
import MenuButton from './MenuButton';

import * as S from './MainTopNav.styled';
import * as Grid from '../../../components/Grid/Grid.styled';

type Props = {};

const MainTopNav = (props: Props) => {
  return (
    <S.Wrapper>
      <Logo />
      <Grid.Col margin="auto 0" unit={1}>
        <MenuButton />
      </Grid.Col>
    </S.Wrapper>
  );
};

export default MainTopNav;
