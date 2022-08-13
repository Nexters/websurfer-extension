import React, { useEffect, useState } from 'react';

import Axios from '@utils/axios';
import { useAppDispatch } from '@redux/store';
import { getHistoryList } from '@redux/history';

import Modal from '@components/Commons/Modal';
import MainTitle from '@components/Main/MainContent/MainTitle';
import TotalTime from '@components/Main/MainContent/TotalTime';
import MainTopNav from '@components/Main/MainContent/MainTopNav';
import MainHistory from '@components/Main/MainHistory/MainHistory';
import SurffingTime from '@components/Main/MainContent/SurffingTime';
import MostVisitWebSite from '@components/Main/MainContent/MostVisitWebSite';

import { RefreshUpdateIcon } from '@assets/img/svg-icon-paths';

import * as S from './Main.styled';
import * as Grid from '@components/Grid/Grid.styled';
import Tab from '@components/Commons/Tab';

interface Props {}

const Main: React.FC<Props> = (props: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);
  // const histories = useAppSelector((state) => state.history.histories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Axios.defaults.headers.common.Authorization =
      'Bearer ' + process.env.TEMPORARY_TOKEN;

    dispatch(getHistoryList({}));
  }, [dispatch]);

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
              <MainTitle isSetting={isSetting} />
              <MostVisitWebSite />
              <S.Justify>
                <TotalTime />
                <SurffingTime />
              </S.Justify>
              <S.UpdateWrapper>
                <S.UpdateMessage>마지막 업데이트 : 15분 전</S.UpdateMessage>
                <S.UpdateIcon src={RefreshUpdateIcon} alt="Refresh" />
              </S.UpdateWrapper>
              <Modal title="자주 방문한 웹사이트">
                <Tab />
                <div>안녕</div>
              </Modal>
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

export default Main;
