import React, { useState } from 'react';

import TopNav from '../MainContent/MainTopNav';
import SettingDropdown from '../MainContent/SettingDropdown';

import * as S from './NoDataPage.styled';

import noDataImg from '@assets/img/nodata.png';

const NoData = () => {
  const [isSetting, setIsSetting] = useState(false);
  const onClickGoSurf = () => window.open('', '_blank');

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <TopNav setIsSetting={setIsSetting} isSetting={isSetting} />
        <S.SettingDropdownWrapper>
          <SettingDropdown setIsSetting={setIsSetting} isSetting={isSetting} />
        </S.SettingDropdownWrapper>
      </S.TopWrapper>
      <S.ContetnWrapper>
        <S.ContentItem>
          <S.NoDataImg src={noDataImg} alt="no-data" />
          <S.MainTitle>웹 서핑을 즐기고 돌아와주세요</S.MainTitle>
          <S.SubTitle>
            아직 서퍼님의 성향을 알아볼 수 있는 데이터가 없어요.
          </S.SubTitle>
          <S.SubTitle>
            잠시 웹 서핑을 즐기고 돌아와주시면 분석을 시작할게요.
          </S.SubTitle>
          <S.GoSurfButton onClick={onClickGoSurf}>
            웹 서핑 하러가기
          </S.GoSurfButton>
        </S.ContentItem>
      </S.ContetnWrapper>
    </S.Wrapper>
  );
};

export default NoData;
