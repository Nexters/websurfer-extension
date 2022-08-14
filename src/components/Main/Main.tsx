import React, { useState } from 'react';

import TotalTimeModal from './MainModal/TotalTimeModal';
import MostUseTimeModal from './MainModal/MostUseTimeModal';
import MainTitle from '@components/Main/MainContent/MainTitle';
import TotalTime from '@components/Main/MainContent/TotalTime';
import MainTopNav from '@components/Main/MainContent/MainTopNav';
import MainHistory from '@components/Main/MainHistory/MainHistory';
import SurffingTime from '@components/Main/MainContent/SurffingTime';
import MostVisitWebSIteModal from './MainModal/MostVisitWebSIteModal';
import MostVisitWebSite from '@components/Main/MainContent/MostVisitWebSite';

import { RefreshUpdateIcon } from '@assets/img/svg-icon-paths';

import * as S from './Main.styled';
import * as Grid from '@components/Grid/Grid.styled';

interface Props {}

const Main: React.FC<Props> = (props: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  return (
    <>
      {!isFocus && (
        <S.BackgroundContainer>
          <S.BackgroundItem />
          <S.BackgroundItem />
        </S.BackgroundContainer>
      )}
      <Grid.Container>
        <Grid.Row>
          <Grid.LayoutCol
            unit={isFocus ? 0 : 8}
            display={isFocus ? 'none' : 'block'}
            paddingTop="55px"
            paddingBottom="60px"
            backgroundColor="bgColor"
          >
            <>
              <MainTopNav setIsSetting={setIsSetting} isSetting={isSetting} />
              <MainTitle setIsSetting={setIsSetting} isSetting={isSetting} />
              <MostVisitWebSite />
              <S.Justify>
                <TotalTime />
                <SurffingTime />
              </S.Justify>
              <S.UpdateWrapper>
                <S.UpdateMessage>마지막 업데이트 : 15분 전</S.UpdateMessage>
                <S.UpdateIcon src={RefreshUpdateIcon} alt="Refresh" />
              </S.UpdateWrapper>
            </>
          </Grid.LayoutCol>
          <Grid.LayoutCol
            paddingTop="60px"
            paddingBottom="60px"
            unit={isFocus ? 12 : 4}
          >
            <MainHistory setIsFocus={setIsFocus} isFocus={isFocus} />
          </Grid.LayoutCol>
        </Grid.Row>
      </Grid.Container>
      <MostVisitWebSIteModal />
      <TotalTimeModal />
      <MostUseTimeModal />
    </>
  );
};

export default Main;
