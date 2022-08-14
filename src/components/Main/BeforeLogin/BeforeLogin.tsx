import React from 'react';

import DummyTitle from '@components/Main/BeforeLogin/DummyTitle';
import TotalTime from '@components/Main/MainContent/TotalTime';
import SurffingTime from '@components/Main/MainContent/SurffingTime';
import DummyMostVisitWebSite from '@components/Main/BeforeLogin/DummyMostVisitWebSite';
import DummyHistory from '@components/Main/BeforeLogin/DummyHistory';
import DummyTopNav from '@components/Main/BeforeLogin/DummyTopNav';

import * as S from './styled';

const BefoerLogin: React.FC = () => {
  return (
    <S.DummyWrapper>
      <S.DummyTopWrapper>
        <S.DummyContentWrapper>
          <DummyTopNav />
          <DummyTitle />
        </S.DummyContentWrapper>
      </S.DummyTopWrapper>
      <S.DummyBottonWrapper>
        <S.DummyContentWrapper>
          <S.Flex>
            <S.DummyDashboardWrapper>
              <DummyMostVisitWebSite />
              <S.Justify>
                <TotalTime />
                <SurffingTime />
              </S.Justify>
            </S.DummyDashboardWrapper>
            <DummyHistory />
          </S.Flex>
        </S.DummyContentWrapper>
      </S.DummyBottonWrapper>
    </S.DummyWrapper>
  );
};

export default BefoerLogin;
