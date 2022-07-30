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
import * as Card from '../../components/Commons/Card.styled';

interface Props {}

const Landing: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Grid.Container>
        <Grid.Row>
          <Grid.LayoutCol
            unit={12}
            backgroundColor="white"
            height="394px"
            overflowHidden
          >
            <Grid.Row>
              <Grid.Col unit={8} paddingTop="55px">
                <Logo>Web surfer logo</Logo>
                <S.LandingTitle>
                  정보의 바다 속, 나는 어떤 웹 서퍼일까요?
                </S.LandingTitle>
                <S.LandingSubTitle>
                  크롬 방문 기록으로 나의 웹 서핑 사용 패턴을 알아봐요.
                </S.LandingSubTitle>
                <S.GoogleLoginButton>
                  Google 계정으로 로그인
                </S.GoogleLoginButton>
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
            height="calc(100vh - 394px)"
            padding="55px 20px 60px 20px"
          >
            <MostVisitWebSite />
            <S.Justify>
              <TotalTime />
              <SurffingTime />
            </S.Justify>
          </Grid.LayoutCol>
          <Grid.LayoutCol
            unit={4}
            paddingTop="60px"
            paddingBottom="60px"
            backgroundColor="gray-02"
            height="calc(100vh - 394px)"
            padding="55px 20px 60px 0"
          >
            <Card.Wrapper
              width="400px"
              borderRadius="8px"
              height="586px"
              overflow="auto"
            >
              <S.CardTitle>방문 기록</S.CardTitle>
              <S.CardSubtitle>
                필터링과 검색으로 방문 기록을 더 편하게 볼 수 있습니다.
              </S.CardSubtitle>
            </Card.Wrapper>
          </Grid.LayoutCol>
        </Grid.Row>
      </Grid.Container>
    </>
  );
};

export default Landing;
