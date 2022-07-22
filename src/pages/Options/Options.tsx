import React from 'react';

import MainTitle from '../../components/Main/MainContent/MainTitle';
import TotalTime from '../../components/Main/MainContent/TotalTime';
import MainTopNav from '../../components/Main/MainContent/MainTopNav';
import MostVisitWebSite from '../../components/Main/MainContent/MostVisitWebSite';
import SurffingTime from '../../components/Main/MainContent/SurffingTime';

import * as Grid from '../../components/Grid/Grid.styled';
import * as S from './Options.styled';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col
          paddingTop="55px"
          paddingBottom="60px"
          unit={8}
          backgroundColor="gray-02"
        >
          <>
            <MainTopNav />
            <MainTitle />
            <MostVisitWebSite />
            <S.Justify>
              <TotalTime />
              <SurffingTime />
            </S.Justify>
          </>
        </Grid.Col>
        <Grid.Col paddingTop="60px" paddingBottom="60px" unit={4}>
          right
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
};

export default Options;
