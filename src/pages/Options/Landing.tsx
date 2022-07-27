import React, { useState } from 'react';
import { RootState } from '../../redux/store';

import { useDispatch, useSelector } from 'react-redux';

import { Logo } from '../../components/Commons/Logo.styled';
import MainTitle from '../../components/Main/MainContent/MainTitle';
import TotalTime from '../../components/Main/MainContent/TotalTime';
import MainTopNav from '../../components/Main/MainContent/MainTopNav';
import MainHistory from '../../components/Main/MainHistory/MainHistory';
import SurffingTime from '../../components/Main/MainContent/SurffingTime';
import MostVisitWebSite from '../../components/Main/MainContent/MostVisitWebSite';

import LandingSerferImage from '../../assets/img/img-landing-serfer.svg';

import * as S from './Options.styled';
import * as Grid from '../../components/Grid/Grid.styled';

interface Props {}

const Landing: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Grid.Container>
        <Grid.Row minHeightScreen>
          <Grid.LayoutCol unit={12} backgroundColor="white">
            <Grid.Row height="394px">
              <Grid.Col unit={8} paddingTop="55px">
                <Logo>Web surfer logo</Logo>
                <S.LandingTitle>
                  정보의 바다 속, 나는 어떤 웹 서퍼일까요?
                </S.LandingTitle>
                <S.LandingSubTitle>
                  크롬 방문 기록으로 나의 웹 서핑 사용 패턴을 알아봐요.
                </S.LandingSubTitle>
                <S.GoogleLoginButton />
              </Grid.Col>
              <Grid.Col unit={4} paddingTop="55px">
                <S.LandingMainImage
                  src={LandingSerferImage}
                  alt="정보의 바다로 서핑을 떠나는 사진"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.LayoutCol>
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
