import React, { useEffect, useState } from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import TagModal from './MainModal/TagModal';
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
import { dashboardStatSelector, refreshStat } from '@redux/dashboard';
import { UserEntity } from '@redux/webSerfer.type';
import { RootState, useAppDispatch, useAppSelector } from '@redux/store';
import dayjs, { Dayjs } from 'dayjs';

import 'react-toastify/dist/ReactToastify.css';

const getFromNow = (input: Date) => {
  const diff = dayjs().diff(dayjs(input), 'seconds');
  if (diff >= 60) {
    return `${Math.floor(diff / 60)}분 전`;
  } else if (diff <= 1) {
    return '방금';
  } else {
    return `${diff}초 전`;
  }
};

interface Props {
  rawKeyword: string | undefined;
  setRawKeyword: React.Dispatch<React.SetStateAction<string | undefined>>;
  user: UserEntity;
}

const Main: React.FC<Props> = ({ rawKeyword, setRawKeyword, user }: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const statData = useAppSelector(dashboardStatSelector);

  return (
    <>
      {!isFocus && (
        <S.BackgroundContainer>
          <S.BackgroundItem />
          <S.BackgroundItem />
        </S.BackgroundContainer>
      )}
      {statData && (
        <>
          <Grid.Container>
            {/* <S.Relative> */}
            <Grid.Row>
              <Grid.LayoutCol
                unit={isFocus ? 0 : 8}
                display={isFocus ? 'none' : 'block'}
                paddingTop="55px"
                paddingBottom="60px"
                backgroundColor="bgColor"
              >
                <S.Sticky>
                  <S.MainContentsWrapper>
                    <MainTopNav
                      setIsSetting={setIsSetting}
                      isSetting={isSetting}
                    />
                    <MainTitle
                      setIsSetting={setIsSetting}
                      isSetting={isSetting}
                      user={user}
                      statData={statData}
                    />
                    <MostVisitWebSite statData={statData} />
                    <S.Justify>
                      <TotalTime statData={statData} />
                      <SurffingTime statData={statData} />
                    </S.Justify>
                    <S.UpdateWrapper>
                      <S.UpdateMessage>
                        마지막 업데이트 : {getFromNow(statData.lastUpdatedAt)}
                      </S.UpdateMessage>
                      <S.UpdateIcon
                        src={RefreshUpdateIcon}
                        alt="Refresh"
                        onClick={() => {
                          dispatch(refreshStat());
                        }}
                      />
                    </S.UpdateWrapper>
                  </S.MainContentsWrapper>
                </S.Sticky>
              </Grid.LayoutCol>
              <Grid.LayoutCol
                paddingTop="60px"
                paddingBottom="60px"
                unit={isFocus ? 12 : 4}
              >
                <MainHistory
                  setIsFocus={setIsFocus}
                  isFocus={isFocus}
                  rawKeyword={rawKeyword}
                  setRawKeyword={setRawKeyword}
                />
              </Grid.LayoutCol>
            </Grid.Row>
            {/* </S.Relative> */}
          </Grid.Container>
          <MostVisitWebSIteModal />
          <TotalTimeModal />
          <MostUseTimeModal />
          <TagModal />
          <ToastContainer
            position="bottom-center"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="dark"
            closeButton={false}
            transition={Slide}
            style={{
              textAlign: 'center',
              borderRadius: '5px',
              fontWeight: '700',
              fontSize: '16px',
              width: '240px',
            }}
          />
        </>
      )}
    </>
  );
};

export default Main;
