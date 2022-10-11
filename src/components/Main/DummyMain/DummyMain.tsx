import React from 'react';

import DummyTitle from '@components/Main/DummyMain/DummyTitle';
import DummyTotalTime from '@components/Main/DummyMain/DummyTotalTime';
import DummySuffingTime from '@components/Main/DummyMain/DummySuffingTime';
import DummyMostVisitWebSite from '@components/Main/DummyMain/DummyMostVisitWebSite';
import DummyHistory from '@components/Main/DummyMain/DummyHistory';
import DummyTopNav from '@components/Main/DummyMain/DummyTopNav';

import * as S from './styled';

const BeforeLogin: React.FC = () => {
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
                <DummyTotalTime />
                <DummySuffingTime />
              </S.Justify>
            </S.DummyDashboardWrapper>
            <DummyHistory />
          </S.Flex>
        </S.DummyContentWrapper>
      </S.DummyBottonWrapper>
    </S.DummyWrapper>
  );
};

export default BeforeLogin;
