import React, { useState, useEffect } from 'react';

import { getHistoryList } from '@redux/history';
import { useAppDispatch } from '@redux/store';

import Axios from '@utils/axios';

import MainTitle from '@components/Main/MainContent/MainTitle';
import TotalTime from '@components/Main/MainContent/TotalTime';
import MainTopNav from '@components/Main/MainContent/MainTopNav';
import MainHistory from '@components/Main/MainHistory/MainHistory';
import SurffingTime from '@components/Main/MainContent/SurffingTime';
import MostVisitWebSite from '@components/Main/MainContent/MostVisitWebSite';

import * as S from './Options.styled';
import * as Grid from '@components/Grid/Grid.styled';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Axios.defaults.headers.common.Authorization =
      'Bearer ' + process.env.TEMPORARY_TOKEN;

    dispatch(getHistoryList({}));
  }, [dispatch]);

  return (
    <>
      {!isFocus && (
        <S.backgroundContainer>
          <S.backgroundItem />
          <S.backgroundItem />
        </S.backgroundContainer>
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
              <MainTopNav />
              <MainTitle />
              <MostVisitWebSite />
              <S.Justify>
                <TotalTime />
                <SurffingTime />
              </S.Justify>
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
    </>
  );
};

export default Options;
