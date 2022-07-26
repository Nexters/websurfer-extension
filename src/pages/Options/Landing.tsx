import React, { useState } from 'react';
import { RootState } from '../../redux/store';

import { useDispatch, useSelector } from 'react-redux';

import MainTitle from '../../components/Main/MainContent/MainTitle';
import TotalTime from '../../components/Main/MainContent/TotalTime';
import MainTopNav from '../../components/Main/MainContent/MainTopNav';
import MainHistory from '../../components/Main/MainHistory/MainHistory';
import SurffingTime from '../../components/Main/MainContent/SurffingTime';
import MostVisitWebSite from '../../components/Main/MainContent/MostVisitWebSite';

import * as S from './Options.styled';
import * as Grid from '../../components/Grid/Grid.styled';

interface Props {}

const Landing: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Grid.Container>
        <Grid.Row>
          <Grid.LayoutCol unit={12} backgroundColor="white"></Grid.LayoutCol>
          <Grid.LayoutCol
            unit={8}
            paddingTop="55px"
            paddingBottom="60px"
            backgroundColor="gray-02"
          >
            <MostVisitWebSite />
            <S.Justify>
              <TotalTime />
              <SurffingTime />
            </S.Justify>
          </Grid.LayoutCol>
          <Grid.LayoutCol
            paddingTop="60px"
            paddingBottom="60px"
            backgroundColor="gray-02"
            unit={4}
          ></Grid.LayoutCol>
        </Grid.Row>
      </Grid.Container>
    </>
  );
};

export default Landing;
