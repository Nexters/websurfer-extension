import React from 'react';

import MainTopNav from './MainTopNav';
import MainTitle from './MainTitle';

import * as Grid from '../../Grid/Grid.styled';

type Props = {};

const MainContent = (props: Props) => {
  return (
    <>
      <MainTopNav />
      <MainTitle />
    </>
  );
};

export default MainContent;
