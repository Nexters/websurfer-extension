import React from 'react';

import MainTitle from '../../components/Main/MainContent/MainTitle';
import TotalTime from '../../components/Main/MainContent/TotalTime';
import MainTopNav from '../../components/Main/MainContent/MainTopNav';
import MainHistory from '../../components/Main/MainHistory/MainHistory';
import SurffingTime from '../../components/Main/MainContent/SurffingTime';
import MostVisitWebSite from '../../components/Main/MainContent/MostVisitWebSite';

import * as S from './Options.styled';
import * as Grid from '../../components/Grid/Grid.styled';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <>
      <S.backgroundContainer>
        <S.backgroundItem />
        <S.backgroundItem />
      </S.backgroundContainer>
      <Grid.Container>
          <Grid.Row>
            <Grid.LayoutCol
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
            </Grid.LayoutCol>
            <Grid.LayoutCol paddingTop="60px" paddingBottom="60px" unit={4}>
              <MainHistory />
            </Grid.LayoutCol>
          </Grid.Row>
        </Grid.Container>
    </>
  );
};

export default Options;
