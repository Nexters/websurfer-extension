import React from 'react';

import DummyTitle from '@components/Main/DummyMain/DummyTitle';
import TotalTime from '@components/Main/MainContent/TotalTime';
import SurffingTime from '@components/Main/MainContent/SurffingTime';
import DummyMostVisitWebSite from '@components/Main/DummyMain/DummyMostVisitWebSite';
import DummyHistory from '@components/Main/DummyMain/DummyHistory';
import DummyTopNav from '@components/Main/DummyMain/DummyTopNav';

import * as S from './styled';

const BefoerLogin: React.FC = () => {
  return (
    <S.DummyWrapper>
      <S.DummyTopWrapper>
        <S.DummyTopContetnWrapper>
          <DummyTopNav />
          <DummyTitle />
        </S.DummyTopContetnWrapper>
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
